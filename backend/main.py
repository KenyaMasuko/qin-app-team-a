from fastapi import FastAPI

app = FastAPI()


@app.get("/api/greet/{name}")
def greet(name: str):
    return {"message": f"こんにちは、{name}さん！"}
