import { getUser, getUsuarioActivo } from "./05-functions"

describe('Pruebas 05-Functions', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto ', () => {
        const testUsername = 'Saishin';
        const testUser = {
            uid: 'ABC567',
            username: testUsername
        };

        const user = getUsuarioActivo(testUsername);

        expect(testUser).toEqual(user);
    });
})
