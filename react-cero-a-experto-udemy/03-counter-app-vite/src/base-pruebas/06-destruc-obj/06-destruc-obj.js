export const usaContexto = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        nombre,
        rango,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};