from fastapi import APIRouter, Depends
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm


router = APIRouter()
oauth2 = OAuth2PasswordBearer(tokenUrl="login")

class User(BaseModel):
    restaurant_name: str
    email: str
    address: str
    path_menu: str

class UserDB(BaseModel):
    password: str

def search_user(email: str):
    #Buscar en nuestra base de datos si hay un listado
    pass

@router.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends()):
    pass