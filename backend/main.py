import re
import openai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = openai_api_key


# レシピ名を出力
async def get_recipe_gpt(keywords: str) -> str:
    prompt = f"'{keywords}' のキーワードに合ったレシピ名を1つ出力してください。 レシピは答えずに1つのレシピ名だけ簡潔に出力してください。 良い例:お好み焼き,  悪い例1:今日のおすすめレシピは、「簡単！お好み焼き」です。,  悪い例2:「簡単！お好み焼き」, 悪い例3:韓国チーズ焼き ビビンバ ミンチカツ ビッグマック(複数のレシピ名は不要、1つだけ)"
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )
    message = response.choices[0].text.strip()
    return message


# unsplashの画像検索用にレシピ名をシンプルに & 英語に翻訳
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


async def get_recipe_details_gpt(recipe: str) -> dict:
    prompt = f"レシピ名 '{recipe}' のレシピの詳細を「材料」「作り方」「ポイント」のフォーマットで出力してください。材料と作り方は番号付きのリスト形式で出力してください。100トークン以内でまとめてください。 例: 材料: 1. <材料1> 2. <材料2>... 作り方: 1. <ステップ1> 2. <ステップ2>... ポイント: 1. <ポイント1> 2. <ポイント2>..."
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.5,
    )
    recipe_text = response.choices[0].text.strip()
    print("recipe_text:", recipe_text)  # ログ出力

    # def extract_list(text, keyword):
    #     split_text = text.split(keyword)
    #     return [item.strip() for item in split_text[1].split("\n") if item.strip()]

    # recipe_dict = {
    #     "ingredients": extract_list(recipe_text, "材料:"),
    #     "steps": extract_list(recipe_text, "作り方:"),
    #     "tips": extract_list(recipe_text, "ポイント:"),
    # }

    return recipe_text


@app.get("/api/recipe")
async def recipe(keywords: str = Query(None)):
    recommended_recipe = await get_recipe_gpt(keywords)
    query_for_unsplash = await translate_recipe_to_english(recommended_recipe)
    recipe_details = await get_recipe_details_gpt(recommended_recipe)
    return {
        "name": recommended_recipe,
        "imageUrl": f"https://source.unsplash.com/featured/?{query_for_unsplash}",
        "text": recipe_details,
    }
