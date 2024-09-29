from passlib.context import CryptContext
import DB.operationsDB as sentences

#CD means comandadirecta, it's the database name where this code works in.
#ESTE FICHERO esta creado para automatizar la creacion de sentencias SQL que se van a utilizar en la API

def insertCD(tabla, lista_datos):
    sql = 'INSERT INTO ' + tabla + ' ('
    numero_s = ''
    
    for dato in lista_datos[:-1]:
        sql += dato + ', '
        numero_s +='%s, '
    
    numero_s += '%s'
    sql += f"{lista_datos[-1]}) VALUES ({numero_s})"

    return sql

#list_data = ['restaurant_name', 'email', 'restaurant_address', 'password', 'url_restaurant_menu']
#print(insertCD('user', list_data))

def checkUserIsRegisted(cursor, email):
    sql = 'SELECT email FROM user WHERE email=%s'
    cursor.execute(sql, (email,))
    result = cursor.fetchone()
    if result:
        return True
    else:
        return False

def getElementFromTable(table, column_name, value, cursor):
    sql = 'SELECT * FROM ' + table + ' WHERE ' + column_name + "=%s"
    cursor.execute(sql, (value,))
    result = cursor.fetchall()
    return result


#print(getElementFromTable('user', 'restaurant_name'))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
def encrypt_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

