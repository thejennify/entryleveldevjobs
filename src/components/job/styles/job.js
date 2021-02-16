import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-gap: 1rem;
    margin: 0 auto;
    margin-bottom: 4rem;

    @media screen and (min-width: 980px) {
        grid-template-columns: repeat(2, 50%); 
    }

`;

export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: var(--radius);
    padding: 1rem;

    :hover{
        cursor: pointer;
    }

    @media screen and (min-width: 980px) {
        padding: 2rem;
    }
`;
export const Details = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const Logo = styled.img`
    width: auto;
    height: 40px;
    border-radius: var(--radius);
`;

export const Title = styled.h3`
    :hover {
        color: #444444;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    align-items: center;
    
`;

export const Tag = styled.div`
    background-color: var(--light-blue);
    color: var(--primary-color);
    padding: .5rem;
    margin-right: 1rem;
    text-transform: capitalize;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Icon = styled.img`
    margin-right: .5rem;
`;

export const PublishedDate = styled.div`
    color: var(--light-gray)
`;
