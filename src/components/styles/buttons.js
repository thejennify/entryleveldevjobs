import styled from 'styled-components';

export const PrimaryBtn = styled.button`
    padding: 1em 2em;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 10px;
    outline: transparent;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${props => props.font };
    width: ${props => props.width };

    :hover {
        background: ${props => props.bgGradients}
    }

    img{
        width: 1.5rem;
    }
`;

export const InvisibleBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: transparent;
    text-transform: capitalize;
    cursor: pointer;
`;