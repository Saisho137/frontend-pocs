import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas para <getGifs/>', () => {
    test('Deberia retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('Evangelion');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});