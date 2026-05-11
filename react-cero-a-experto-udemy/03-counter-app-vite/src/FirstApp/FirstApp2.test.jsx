
import { render, screen } from '@testing-library/react';
import FirstApp from './FirstApp';

describe('Pruebas en <FirstApp2 />', () => {
    const title = 'Hola mundo!!!';
    const message = '01379';

    test('Debe hacer match con el snapshot', () => {
        const { containter } = render(<FirstApp title={title} />)
        expect(containter).toMatchSnapshot()
    });
    test('Debe mostrar el mensaje "Hola mundo!!!"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });
    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });
    test('Debe mostrar el "noParentProp" enviado por props', () => {
        render(<FirstApp title={title} noParentProp={message} />);
        expect(screen.getAllByText(message).length).toBe(3);
    })
})
