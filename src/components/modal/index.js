import React from 'react';
import { Container, Wrapper } from './styles/modal';

export default function Modal({children, ...props}) {
    

    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}
