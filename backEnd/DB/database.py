from mysql.connector import connect, Error
from dotenv import load_dotenv
import os
from contextlib import contextmanager

load_dotenv()

def get_db_connection():
    connection = None
    try:
        connection = connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME")
        )
        yield connection  
    except Error as e:
        raise Exception(f"Database connection error: {str(e)}")
    finally:
        if connection and connection.is_connected():
            connection.close()  
