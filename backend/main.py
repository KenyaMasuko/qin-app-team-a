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


async def get_recipe_gpt() -> str:
    prompt = "今日のおすすめレシピのレシピ名を出力してください。 レシピは答えずにレシピ名だけ簡潔に出力してください。 良い例:お好み焼き 悪い例1:今日のおすすめレシピは、「簡単！お好み焼き」です。,  悪い例2:「簡単！お好み焼き」,  お好み焼きは1例なのでいろんな料理を答えてください。"
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
    keyword = response.choices[0].text.strip()
    return keyword


@app.get("/api/recipe")
async def recipe():
    recommended_recipe = await get_recipe_gpt()
    keyword_for_unsplash = await translate_recipe_to_english(recommended_recipe)
    return {
        "recipe": recommended_recipe,
        "imageUrl": f"https://source.unsplash.com/featured/?{keyword_for_unsplash}",
    }
