import React from "react";
import { Summary } from "../Summary/Sumary";
import { TransactionsTalbe } from "../TransactionsTable/TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionsTalbe />
        </Container>
    );
}