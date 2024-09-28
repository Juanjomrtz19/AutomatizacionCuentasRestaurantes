from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
import DB.operationsDB as sentences
from DB.database import get_db_connection
from mysql.connector import Error

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
        list_data = ['restaurant_name', 'email', 'restaurant_address', 'password', 'url_restaurant_menu']
        sql = sentences.insertCD('user', list_data)
        values = (user.restaurant_name, user.email, user.address, user.password, user.path_menu)

        cursor.execute(sql, values)
        db.commit()
        
        return{"message": "Usuario registrado exitósamente"}
    
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Failed to insert user: {str(e)}")
    
    finally:
        cursor.close()
