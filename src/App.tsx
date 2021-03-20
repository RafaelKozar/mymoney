import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    });
  }
});

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>

        <h2>Cadastrar Informarçoes</h2>
      </Modal>
      <GlobalStyle />

    </>
  );
}


