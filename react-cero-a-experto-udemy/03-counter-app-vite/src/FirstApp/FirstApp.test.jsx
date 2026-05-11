
import { render } from '@testing-library/react';
import FirstApp from './FirstApp';

describe('Pruebas en <FirstApp />', () => {
    /* test('Debe hacer match con el snapshot', () => {
        const title = 'Hola mundo';
        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    }); */

    test('Debe mostrar el titulo en h1', () => {
        const title = 'Hola mundo';
        const { getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);

        /* const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title); */
    });
    test('Debe mostrar el bestNumber enviado por props ', () => {
        const title = 'Hola mundo';
        const message = '13790';
        const { getAllByText } = render(<FirstApp title={title} noParentProp={message} />);

        expect(getAllByText(message).length).toBe(3);
    })

})
