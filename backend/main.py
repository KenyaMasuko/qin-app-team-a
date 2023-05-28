import re
import openai
from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from typing import Union
import logging
import uvicorn
from typing import List, Optional

app = FastAPI()

load_dotenv()
origin = os.getenv("ORIGIN")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai_api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = openai_api_key

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="info", reload=True)


# レシピ名を出力
async def get_recipe_gpt(
    keywords: str, existingRecipeNames: Optional[List[str]]
) -> str:
    # If existing recipes are provided, modify the prompt
    if existingRecipeNames:
        # Join the existing recipe names into a string with a comma and space in between each name
        existing_recipes_string = ", ".join(existingRecipeNames)
        prompt = f"'{keywords}' のキーワードに合った、以下のレシピ名 '{existing_recipes_string}' に含まれない新しいレシピ名を1つ出力してください。 レシピは答えずに1つのレシピ名だけ簡潔に出力してください。 良い例:お好み焼き,  悪い例1:今日のおすすめレシピは、「簡単！お好み焼き」です。,  悪い例2:「簡単！お好み焼き」, 悪い例3:韓国チーズ焼き ビビンバ ミンチカツ ビッグマック(複数のレシピ名は不要、1つだけ)"
    else:
        prompt = f"'{keywords}' のキーワードに合ったレシピ名を1つ出力してください。 レシピは答えずに1つのレシピ名だけ簡潔に出力してください。 良い例:お好み焼き,  悪い例1:今日のおすすめレシピは、「簡単！お好み焼き」です。,  悪い例2:「簡単！お好み焼き」, 悪い例3:韓国チーズ焼き ビビンバ ミンチカツ ビッグマック(複数のレシピ名は不要、1つだけ)"

    while True:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=50,
            n=1,
            stop=None,
            temperature=0.5,
        )
        message = response.choices[0].text.strip()

        # If existing recipes are provided and the generated recipe is not in the list, break the loop
        if existingRecipeNames and message not in existingRecipeNames:
            break
        # If no existing recipes are provided, break the loop
        elif not existingRecipeNames:
            break

    return message


#  unsplashの画像検索用にレシピ名をシンプルに & 英語に翻訳
async def translate_recipe_to_english(recipe: str) -> str:
    prompt = f"レシピ名 '{recipe}' を、一般的でシンプルなレシピ名に変換して、半角小文字の英語に翻訳して、出力してください。 変換例1...サーモンと新玉ねぎのカルパッチョ -> carpaccio, 変換例2...こってりとんこつ醤油ラーメン -> ramen, 変換例3...クリームチーズとほうれん草のオムレツ -> omelette 出力例1...carpaccio, 出力例2...ramen, 出力例3...omelette"
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )
    query = response.choices[0].text.strip()
    return query


# レシピの詳細「材料」「作り方」「ポイント」を出力
async def get_recipe_details_gpt(recipe: str) -> Union[str, dict]:
    logger.info("get_recipe_details_gpt started")
    prompt = f"レシピ名 '{recipe}' のレシピの詳細を「材料」「作り方」「ポイント」のフォーマットで出力してください。材料と作り方は番号付きのリスト形式で出力してください。 例:材料:1.<ingredients.name1>:<ingredients.amount1>2. <ingredients.name2>:<ingredients.amount2>...作り方:1.<step1>2.<step2>...ポイント:1.<point1>2.<point2>..."
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=1000,
        n=1,
        stop=None,
        temperature=0.2,
    )
    if "error" in response.choices[0].text.strip():
        return "Error: Unable to generate recipe details. Please try again."

    recipe_text = response.choices[0].text.strip()
    print("recipe_text:", recipe_text)  # ログ出力

    def extract_list(text, keyword):
        split_text = re.split(f"{keyword}\s*?", text)
        if len(split_text) < 2:
            return []

        list_items = [
            item.strip() for item in split_text[1].split("\n") if item.strip()
        ]

        result = []
        for item in list_items:
            match = re.match(r"\d+\.\s*(.*)", item)
            if match:
                item = match.group(1).strip()
            else:
                continue

            if keyword == "材料:" and ":" in item:
                name, amount = item.split(":", 1)
                name = name.strip()
                amount = amount.strip()
                result.append({"name": name, "amount": amount})
            elif keyword == "作り方:":
                result.append(item)
            elif keyword == "ポイント:":
                result.append(item)
            else:
                continue

        return result

    recipe_dict = {
        "ingredients": extract_list(recipe_text, "材料:"),
        "steps": extract_list(recipe_text, "作り方:"),
        "tips": extract_list(recipe_text, "ポイント:"),
    }

    print("recipe_dict:", recipe_dict)  # ログ出力

    logger.info("get_recipe_details_gpt finished")
    return recipe_dict


@app.get("/api/recipe")
async def recipe(
    keywords: str = Query(None), existingRecipeNames: Optional[List[str]] = Query(None)
):
    try:
        recommended_recipe = await get_recipe_gpt(keywords, existingRecipeNames)
        query_for_unsplash = await translate_recipe_to_english(recommended_recipe)
        recipe_details = await get_recipe_details_gpt(recommended_recipe)

        return {
            "name": recommended_recipe,
            "imageUrl": f"https://source.unsplash.com/featured/?{query_for_unsplash}",
            "recipe": recipe_details,
        }
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
