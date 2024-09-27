from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    restaurant_name: str
    email: str
    address: str
    password: str
    path_menu: str

users_list = [User(restaurant_name='El ortega', email='ortega@contacto.com', address='Macael', password='1234', path_menu='/')]

@router.get('/user')
async def root():
    return users_list[0];
