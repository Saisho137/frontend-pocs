import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Evangelion';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {id: 'ABC', title: 'Shinji', url: 'https://localhost/shinji.jpg'},
            {id: '123', title: 'Yuji', url: 'https://localhost/yuji.jpg'},
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
