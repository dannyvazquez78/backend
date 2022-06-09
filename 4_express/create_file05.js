const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, (err) => {
        if (err) {
            console.error("algo salio mal", err);
        } else {
            console.log("se creo el archivo");
        }
    });
}

crearArchivo ("hola.txt", "Mi Primer archivo")

