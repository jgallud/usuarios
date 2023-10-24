# usuarios
Arquitectura SaaS con gestión de usuarios
![test](https://github.com/github/docs/actions/workflows/test.yml/badge.svg)

Diagram de despliegue de la solución:

![image](https://github.com/jgallud/usuarios/assets/5364288/be50f216-6e21-4c94-b37e-09c36c32030d)

Antes de lanzar la ejecución de deben obtener credenciales:
- en el archivo "cad.js": obtener la cadena de conexión de Mongo Atlas (crear una BBDD en Mongo Atlas y un usuario de acceso)
- en el archivo "controlWeb.js": obtener credenciales OAuth para implementar Google One Tap
- en el archivo "passport-setup.js": obtener credenciales OAuth para implementar acceso con Google

Lanzar la ejecución:
```
npm install
npm start
```

Lanzar los tests de Jasmine:
```
npm test (o también: npm run testW)
```

