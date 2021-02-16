import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    background-color: #fff;
    margin: 3rem 2rem;
    border-radius: var(--radius);
    

`;
export const DropdownOptions = styled.ul`
    position: absolute;
    background-color: #fff;
    padding: 0;
    width: calc(100%/3 - 1.5rem);
    border: 1px solid #e5e5e5;
    border-radius:  0 0 var(--radius) var(--radius);

`;
export const DropdownList = styled.div`
    width: 100%;
    margin-top: -.8rem;
    display: none;
    box-shadow: 5px 15px #c4c4c4;
    hover: {
        display: block;
    }
`;

export const DropdownWrapper = styled.div`
    border-right: 1px solid #e5e5e5;
    border-bottom: 2px solid transparent;
    width: calc(100%/3);
    cursor: pointer;

    :last-of-type {
        border: none;
    }
    :hover ${DropdownList} {
        display: block;
    }
        
    }
    
    :hover {
        border-bottom: 2px solid #0361FB;
        :last-of-type {
          border-radius: 0 0 15px 0;
        }
        
        :first-of-type {
          border-radius: 0 0 0 15px;
    
        }
      }
`;

export const DropdownHeader = styled.div`
    outline: none;
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 12px;
    display: flex;
    item-items: center;

    @media screen and (min-width: 980px) {
        padding: 1rem 2rem;
        font-size: 16px;
    }


`;

export const Icon = styled.img`
    margin-right: 1rem;
`;

export const Item = styled.li`
    list-style-type: none;
    padding: 1rem;
    margin: 0;
    font-size: 12px;
    text-transform: capitalize;
    :hover{
        background-color: #e5e5e5;
    }
    @media screen and (min-width: 980px) {
        font-size: 16px;
        padding: 1rem 2rem;
    }
`;
