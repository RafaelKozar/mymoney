import Modal from 'react-modal';
import { Container } from '../TransactionsTable/styles';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <Container>
                <h2>Cadastrar Informarçoes</h2>

                <input placeholder="Titulo" />

                <input
                    type="number"
                    placeholder="valor" />

                <input
                    placeholder="categoria" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}