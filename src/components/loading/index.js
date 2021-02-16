import React from 'react';
import { Container, Gif } from './styles/loading'

export default function Loading() {
    return (
        <Container>
            <Gif src={"/assets/loading.gif"} alt="loading"/>
        </Container>
    )
}
