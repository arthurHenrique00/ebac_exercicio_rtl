import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Teste para um Text Area', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'Dark Souls 1 é melhor que Elden' } });
        fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'BloodBorne é o melhor!' } });

        expect(screen.getByTestId('Primeirocomentario')).toHaveTextContent('Dark Souls 1 é melhor que Elden');
        expect(screen.getByTestId('Segundocomentario')).toHaveTextContent('BloodBorne é o melhor!');
    })
});