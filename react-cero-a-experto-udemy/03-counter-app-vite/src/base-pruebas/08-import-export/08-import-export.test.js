import { getHeroeById, getHeroesByOwner } from "./08-import-export";

describe('Probando 08-import', () => {
    //getHeroeById()
    test('getHeroeById debe retornar un heroe por ID ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroeById debe retornar undefined si el id no existe ', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });
    //getHeroesByOwner
    test('getHeroesByOwner debe retornar heroes por Owner', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    });
    test('getHeroesByOwner debe retornar heroes por Owner', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
})
