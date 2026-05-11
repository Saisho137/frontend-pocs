import { retornaArreglo } from "./07-destruc-array";

describe('Pruebas 07-destruc', () => {
    test('getUser debe de retornar un objeto', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(typeof numbers).toBe('number');
    });
})
