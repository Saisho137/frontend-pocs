import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe('Pruebas a useFetchGifs (Custom Hook)', () => {
  test('Deberia regresar el estado inicial', () => {
    const {result} = renderHook( () => useFetchGifs('Evangelion'));
    const { images, isLoading } = result.current;
    
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('Deberia retornar un arreglo de imagenes y el isLoading en False', async () => {
    const {result} = renderHook( () => useFetchGifs('Evangelion'));

    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0),
        /* {timeout: 1000} */
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
});
