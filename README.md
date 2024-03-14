# back-end
Repositorio con el back-end de la aplicación casino lotus.

## Instrucciones de uso del servidor

1. Tener [Node.js versión 20.11.1](https://nodejs.org/en/download/)
2. Para instalar todos los paquetes (recomendable hacerlo después de cada Pull), ejecutar `npm install` en una terminal en el directorio principal del back-end.
3. Ejecutar `npm run dev`: Este comando ejecuta un pequeño script que está configurado en el fichero package.json, que hace que puedas reiniciar la ejecución del servidor teniendo en cuenta los cambios efectuados hasta el momento escribiendo `rs` en la terminal y dándole a Enter.

## Instrucciones para cambiar y visualizar la base de datos con Dataflare

1. Instalar [Dataflare](https://dataflare.app/download)
2. Dentro del programa, darle al botón de conexiones y rellenar los campos como se muestra:
  - Nombre: Da igual
  - Host: casino-lotus.mysql.database.azure.com
  - User: Roberta
  - Password: Williams8
  - Database: casino-lotus

    
    ![image](https://github.com/UNIZAR-30226-2024-08/back-end/assets/131779521/2a021f2c-42a4-452b-ac77-d543f91a698b)
3. Darle a `Conectar`
4. La interfaz para manejar las tablas es muy sencilla. Pueden crearse tablas, modificar las tablas de casi cualquier forma e insertar o borrar filas con la interfaz.\
Además, puede ejecutarse código SQL con la parte inferior izquierda del programa.
