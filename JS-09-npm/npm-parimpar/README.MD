# Crear y publicar un nuevo package de npm

## Creacion del paquete
1. Inicializar npm desde CLI con el comando
````sh
npm init
```
Me guiara a traves de una serie de psas donde me solicite informacion relacionada con mi package, como el nombre (unico), la version, la descripcion, el punto de entrara (index.js), comando de prueba, repositorio de git en donde vive, palabras clave para coincidir con busquedas, autor.

2. Presionar enter para aceptar que la informacion es correcta y generar el archivo package.json
> - package.json
    - Contiene informacion sobre el proytcto-modulo que vamos a crear. son un estandar de nodejs para facilitar la estructura y ejecucion de los proytectos dentro del entorno de ejecucion y de esta manera poder compartirlo a traves del sitio de [https://www.npmjs.com].
    - la informacion se estructura como objeto de JS con cotacion JSON. 

3. Crear una carpeta llamada `modules` en donde vivira nuestro script
4. Dentro de `modules` crear el scrip JS con el nombre `parimpar.js`
5. Crear la funcion del script y exportarlo con `export default`
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta` e invocamos la funcion con parametros.
7. Configurar el `"type": "module"` en el archivo `package.json`
8. Ejecutamos el programa desde el entorno de nodejs con el comando
```sh
node index.js
```

## Publicar package en npm
1. Iniciar sesión de npm pero ahora desde CLI con el comando
```sh
npm login
```
2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`
5. Publicar el package con acceso público desde CLI a npm con el comando 
```sh
npm publish --access=public
```

