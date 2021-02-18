import styled from 'styled-components';

export const Container = styled.section`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .65);
    overflow-y: hidden;
    display: flex;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    background-color: #fff;
    overflow: auto;
    max-height: 100vh;
    transform; translate(-50%, -50%);
    @media screen and (min-width: 980px) {
        width: 60%;
        max-height: 85vh;
    }
`;

export const Header = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin: 0;
    width: 100vw;
    padding: 1rem 0;
    border-bottom: 1px solid var(--light-gray);

    @media screen and (min-width: 980px) {
        max-width: 60%;
        padding: 0;
    }
    
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (min-width: 980px) {
        padding: 2rem 3rem;
    }
`;

export const CompanyInfo = styled.div`
    margin-left: 2rem;
`;

export const JobTitle = styled.h3`
    margin: 0;
    padding: 0;
`;

export const Name = styled.p`
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: .1rem;
`;

export const Description = styled.div`
    padding: 5rem 3rem;
    margin-top: 11%;
`;