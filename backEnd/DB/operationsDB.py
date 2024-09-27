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