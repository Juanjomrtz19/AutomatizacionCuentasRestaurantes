from mysql.connector import connect, Error
from dotenv import load_dotenv
from fastapi import HTTPException
import os

load_dotenv()

def get_db_connection():
    try:
        connection = connect(
            host = os.getenv("DB_HOST"),
            user = os.getenv("DB_USER"),
            password = os.getenv("DB_PASSWORD"),
            database = os.getenv("DB_NAME")
        )
        yield connection
    
    except Error as e:
        raise HTTPException(status_code=500, detail=f"Database connection error: {str(e)}")

    finally:
        if connection.is_connected():
            connection.close()

