from typing import Annotated
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Path
from models import Pizza
from database import SessionLocal
from starlette import status
from pydantic import BaseModel, Field

router = APIRouter()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class PizzaRequest(BaseModel):
  name: str = Field(min_length=3)
  ingredients: str = Field(min_length=3)
  price: float = Field(gt=0)
  sold: bool


@router.get('/pizzas', status_code=status.HTTP_200_OK)
async def get_pizzas(db: db_dependency):
  return db.query(Pizza).all()

@router.post('/create-pizza', status_code=status.HTTP_201_CREATED)
async def create_pizza(db: db_dependency, pizza_request: PizzaRequest):
  pizza_model = Pizza(**pizza_request.model_dump())
  db.add(pizza_model)
  db.commit()

