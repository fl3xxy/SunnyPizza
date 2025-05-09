from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float

class Pizza(Base):
  __tablename__ = 'pizza'

  id = Column(Integer, primary_key=True, index=True)
  name = Column(String)
  ingredients = Column(String)
  price = Column(Float)
  sold = Column(Boolean, default=False)