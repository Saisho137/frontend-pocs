// Variables and constants

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )

// Should not use 'var'.

if ( true ) {
    const nombre = 'Peter';
    console.log(nombre)
}

console.log( valorDado );