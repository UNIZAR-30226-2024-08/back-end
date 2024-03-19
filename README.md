# back-end
Repositorio con el back-end de la aplicación casino lotus.

## Instrucciones de uso del servidor

1. Tener [Node.js versión 20.11.1](https://nodejs.org/en/download/)
2. `npm install` instala todos los paquetes que no estén ya instalados (en una terminal en el directorio principal del back-end)
3. `npm run dev` ejecuta el servidor y puedes reiniciarlo con los cambios actualizados escribiendo rs + enter

Cuando se hace Push a la rama maestra se sube a [casino-backend.scm.azurewebsites.net](casino-backend.scm.azurewebsites.net)

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
