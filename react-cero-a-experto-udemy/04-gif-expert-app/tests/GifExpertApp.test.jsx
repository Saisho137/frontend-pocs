import { render, fireEvent, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas para <GifExpertApp />', () => {
    it('should renders with initial category', () => {
        const { getByText, getAllByText } = render(<GifExpertApp />);

        expect(getByText('Gif Expert App'));
        expect(getAllByText('Evangelion').length).toBe(1);
      });
    
      it('should doesnt add duplicate category', () => {
        const { getAllByText } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Evangelion' } });
        expect(input.value).toBe('Evangelion');

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(getAllByText('Evangelion').length).toBe(1);
      });

      it('should add a new category', () => {
        const { getAllByText } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Jujutsu Kaisen' } });
        expect(input.value).toBe('Jujutsu Kaisen');

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(getAllByText('Evangelion').length).toBe(1);
        expect(getAllByText('Jujutsu Kaisen').length).toBe(1);
      });
});
