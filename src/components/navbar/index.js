import React from 'react';
import { Container, Wrapper, Logo} from './styles/navbar';
import {Link} from 'react-router-dom';

const listStyle = {
    color: "#222",
    textDecoration: "none"
}

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={listStyle}><Logo> JuniorBoard </Logo></Link>
            </Wrapper>
        </Container>
    )
}
