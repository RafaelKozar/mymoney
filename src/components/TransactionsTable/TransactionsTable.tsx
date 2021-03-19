import React from "react";
import { Container } from "./styles";

export function TransactionsTalbe(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 5.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr >
                        <td> Desenvolvimento de WebSite</td>
                        <td className="withdraw">R$-1.000</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>              
                </tbody>
            </table>
        </Container>
    );
}