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
    prompt = "今日のおすすめレシピのレシピ名を出力してください。 レシピは答えずにレシピ名だけ簡潔に出力してください。 良い例：お好み焼き 悪い例：今日のおすすめレシピは、「簡単！お好み焼き」です。 悪い例：「簡単！お好み焼き」 お好み焼きは1例なのでいろんな料理を答えてください。"
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


@app.get("/api/recipe")
async def recipe():
    recommended_recipe = await get_recipe_gpt()
    return {"recipe": recommended_recipe}
