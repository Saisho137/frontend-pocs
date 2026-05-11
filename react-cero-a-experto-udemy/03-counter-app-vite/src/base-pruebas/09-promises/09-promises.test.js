import { getHeroeByIdAsync } from "./09-promises";

describe('Pruebas en 09-promises', () => {
    test('getHeroeByIdAsync debe retornar un herore', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    });

    test('getHeroeByIdAsync debe retornar un error', (done) => {
        const id = 100;

        getHeroeByIdAsync(id).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
})
