import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    box-shadow: 0 5px 10px -5px rgba(3, 97, 251, .5);

`;
export const Wrapper = styled.div`
    width: 100%;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 700px) {
        margin: 0 4rem;
    }
`;

export const Logo = styled.h1`
    color: #22222;
    font-size: 1.5rem;
    @media screen and (min-width: 700px) {
        font-size: 2rem;
    }
`;

export const Link = styled.li`
    display: inline;
`;