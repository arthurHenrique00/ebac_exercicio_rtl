import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Teste para um Text Area', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('txt-area'), { target: { value: 'DS1 melhor que Elden' } });
        fireEvent.click(screen.getByTestId('btn-txt'));

        fireEvent.change(screen.getByTestId('txt-area'), { target: { value: 'BloodBorne melhor que Elden' } });
        fireEvent.click(screen.getByTestId('btn-txt'));

        expect(screen.getByTestId('souls-0')).toHaveTextContent('DS1 melhor que Elden');
        expect(screen.getByTestId('souls-1')).toHaveTextContent('BloodBorne melhor que Elden');
    })
});