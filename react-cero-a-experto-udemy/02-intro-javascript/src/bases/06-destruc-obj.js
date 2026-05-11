// Destructuration.
// Destructuring Assignment.

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usaContexto = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = usaContexto( persona );

console.log(nombreClave, anios);
console.log( lat, lng );