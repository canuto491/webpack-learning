# webpack-learning

# Configuración inicial
Iniciar la configuración del projecto con `npm init`, e seguidamente instalar las dependencias con la flag `--save` para que sean registradas en el fichero `package.json`

## Ejecutar scripts del ``package.json``
Crear el script dentro del objeto ``scripts`` del fichero ``package.json``:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "key" : "echo 'hello'",
    "build": "webpack src/main.js --output dist/bundle.js --mode development"
  },
```
Una vez definido puede ser ejecutado desde la consola con el comando ``npm run {script_key}``, por ejemplo: ``npm run key``

```
> webpack-learning@1.0.0 key C:\PATH\TO\PROJECT\webpack-learning
> echo 'hello'
```

## Generar dist/bundle.js
``npm run build`` <br>
``` npm run watch -- --mode development ```
