import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GitItem";

describe('Pruebas en <GifItem />', () => {
    const title = "Shinji";
    const url = "https://eva.com/eva.png";

    test('Debería hacer match con el snapshot ', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debería mostrar el titulo ', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debería mostrar la imagen con el url y alt indicado', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        /*
        //screen.debug();
        expect( screen.getByRole('img').alt).toBe(title);
        expect( screen.getByRole('img').src).toBe(url); 
        */
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
});