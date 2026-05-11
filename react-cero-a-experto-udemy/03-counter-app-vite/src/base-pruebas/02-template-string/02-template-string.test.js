import { getSaludo } from "./02-template-strings";

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe regresar el "Hola Santiago"', () => {
    const name = 'Santiago';
    const message = getSaludo(name);

    expect(message).toBe('Hola Santiago');
  })
})
