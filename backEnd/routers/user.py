from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
import DB.operationsDB as sentences
from DB.database import get_db_connection
from mysql.connector import Error
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

router = APIRouter()

class User(BaseModel):
    restaurant_name: str
    email: str
    address: str
    password: str
    path_menu: str

@router.post('/register')
async def register(user: User, db = Depends(get_db_connection)):
    
    try:
        cursor = db.cursor()

        if sentences.checkUserIsRegisted(cursor, user.email):
            return {"message": "El usuario ya estaba registrado"}
        
        list_data = ['restaurant_name', 'email', 'restaurant_address', 'password', 'url_restaurant_menu']
        sql = sentences.insertCD('user', list_data)
        values = (user.restaurant_name, user.email, user.address, sentences.encrypt_password(user.password), user.path_menu)

        cursor.execute(sql, values)
        db.commit()
        
        return{"message": "Usuario registrado exitósamente"}
    
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Failed to insert user: {str(e)}")
    
    finally:
        cursor.close()

@router.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends(get_db_connection)):
    exists_user = sentences.checkUserIsRegisted(form.username)
    
    if not exists_user:
        raise HTTPException(status_code=404, detail="El usuario no es correcto")

@router.get('/prueba')
async def prueba(db = Depends(get_db_connection)):
    cursor = db.cursor()
    datos = sentences.getElementFromTable('user', 'email', 'elOrtega@gmail.com', cursor)
    return User(restaurant_name=datos[0][0], email=datos[0][1], address=datos[0][2], password=datos[0][3], path_menu=datos[0][4])