from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from .routers import post, user, auth, vote
from .database import engine
from . import models


# models.Base.metadata.create_all(bind=engine)
app = FastAPI()


origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
app.include_router(vote.router)


# @app.get("/")
# def root():
#     return RedirectResponse(url="/docs")


@app.get("/")
def root():
    return {"msg": "Hello from API Root"}
