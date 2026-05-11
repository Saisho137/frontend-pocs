import { usaContexto } from "./06-destruc-obj";

describe('Pruebas 06-Destruct', () => {
    test('getUser debe de retornar un objeto', () => {
        const clave = 'Saisho';
        const nombre = 'Santiago';
        const edad = 21;

        const testContext = {
            nombreClave: clave,
            nombre,
            rango: 'Capitán',
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const testPersona = {nombre, edad, clave};
        const context = usaContexto(testPersona);

        expect(testContext).toEqual(context);
    });
})
