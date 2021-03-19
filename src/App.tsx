import React from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global'

createServer({
    routes(){
      this.namespace = 'api';

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transaction 1',
            amount: 400,
            type : 'deposit',
            category: 'Food',
            createAt : new Date()            
          }
        ]
      });
    }
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />      
      <GlobalStyle />  

    </>
  );
}


