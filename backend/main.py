from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
from routes import pizza
import models

app = FastAPI()

origins = [
  "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

app.include_router(pizza.router)