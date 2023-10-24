# usuarios
Arquitectura SaaS con gestión de usuarios

![Diagrama de despliegue de la arquitectura SaaS](https://github.com/jgallud/usuarios/issues/1#issue-1958759464)

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

