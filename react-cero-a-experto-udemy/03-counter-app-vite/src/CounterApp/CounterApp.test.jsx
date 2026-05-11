import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from "./CounterApp";

describe('Pruebas para CounterApp', () => {
    const value = 100;

    test('Deberia hacer el match con el snapshot', () => {
        const { containter } = render(<CounterApp value={value} />);
        expect(containter).toMatchSnapshot();
    });

    test('Deberia mostrar el valor inicial de 100', () => {
        const { containter } = render(<CounterApp value={value} />);
        expect(screen.getByText(value).innerHTML).toContain("100");
    });

    test('Deberia aumtentar el contado al hacer click en "+1"', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Deberia decrementar el contado al hacer click en "-1"', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Deberia funcionar el boton de "reset"', () => {
        render(<CounterApp value={value} />);

        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));

        expect(screen.getByText('97')).toBeTruthy();

        fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
        expect(screen.getByText(value)).toBeTruthy();
    });
})
