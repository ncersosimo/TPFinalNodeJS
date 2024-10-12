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
   1. http://localhost:3000/api/v1/auth/register (registro de usuario)
   2. http://localhost:3000/api/v1/auth/login (necesario para obtener el Token y asi poder usar los endpoints segurizados)
   3. http://localhost:3000/api/v1/auth/login (necesario para obtener el Token y asi poder usar los endpoints segurizados)
3. http://localhost:3000/api/v1/products

Están creados los siguientes endpoints:

http://localhost:3000/api/denuncias
http://localhost:3000/api/provincias
http://localhost:3000/api/departamentos
http://localhost:3000/api/tipos_denuncia

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
