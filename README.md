# Trabajo Práctico Final NodeJS

Aplicación CRUD con NodeJS, MongoDB (usando mongoose para modelado de datos y capa intermedia entre Node y MongoDB) y JSON WEB Token

Primeros pasos

1. Instalar node y npm

2. Instalar los modulos con npm install

3. para correrlo:

```
npm run dev
```
Se encuentran disponibles 2 rutas con sus respectivos endpoints, puediendose probar algunos endpoints con el explorador y todos los métodos con Postman o similar
1. http://localhost:3000/api/v1/auth
   1. http://localhost:3000/api/v1/auth/register (Endpoint no segurizado, accesible sólo por método POST, que permite el registro del usuario)
   2. http://localhost:3000/api/v1/auth/login (Endpoint no segurizado, accesible sólo por método POST, necesario para obtener el Token y asi poder usar los endpoints segurizados)
   3. http://localhost:3000/api/v1/auth/users (Endpoint segurizado, accesible sólo por método GET, que lista a todos los usuarios pensado para futuro uso de administración. Se requiere agregar en el encabezado authorization, el Token otorgado por el endpoint login)
   4. http://localhost:3000/api/v1/auth/:id (Endpoint no segurizado, accesible sólo por método GET, que lista al usuario que correponde con el id)
   5. http://localhost:3000/api/v1/auth/delete/:id (Endpoint segurizado, accesible sólo por método DELETE, que elimina al usuario que correponde con el id. Se requiere agregar en el encabezado authorization, el Token otorgado por el endpoint login)
2. http://localhost:3000/api/v1/products
   1. http://localhost:3000/api/v1/products (Endpoint no segurizado, accesible sólo por método GET, que lista a todos los productos)
   2. http://localhost:3000/api/v1/products/:id (Endpoint no segurizado, accesible sólo por método GET, que lista al producto que correponde con el id)
   3. http://localhost:3000/api/v1/products/s (Endpoint no segurizado, accesible sólo por método GET, necesario para obtener el Token y asi poder usar los endpoints segurizados)
   4. http://localhost:3000/api/v1/products/create (Endpoint segurizado, accesible sólo por método POST, que lista a todos los usuarios pensado para futuro uso de administración. Se requiere agregar en el encabezado authorization, el Token otorgado por el endpoint login)
   5. http://localhost:3000/api/v1/products/update/:id (Endpoint no segurizado, accesible sólo por método PATCH, que lista al usuario que correponde con el id)
   6. http://localhost:3000/api/v1/auth/delete/:id (Endpoint segurizado, accesible sólo por método DELETE, que elimina al usuario que correponde con el id. Se requiere agregar en el encabezado authorization, el Token otorgado por el endpoint login)

Con los web services pueden probar cosas como:

// paginar y ordenar
http://localhost:3000/api/denuncias?len=3&page=2&order=razon_social&sort=desc

// ordenar en campos anidads
http://localhost:3000/api/denuncias?order=tipo.descripcion

// filtro rapido
http://localhost:3000/api/denuncias?q=mayo&fields=descripcion,direccion

// filtro por cada campo
http://localhost:3000/api/denuncias?id=3..10&direccion=Rivadavia

Por último, en http://localhost:3000/ hay un abm hecho con angular y ngResource

Para correr las pruebas unitarias

```
cd crudSample/back-end/mock/
grunt test
```
