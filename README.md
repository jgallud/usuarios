# usuarios
Arquitectura SaaS con gestión de usuarios

Antes de lanzar la ejecución de deben obtener credenciales:
- en el archivo "cad.js": crear una BBDD en Mongo Atlas, un usuario de acceso y obtener la cadena de conexión
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

