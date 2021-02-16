import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 90vh;
    justify-content: center;
  
`;
export const Wrapper = styled.div`
    display: flex;
    margin: 0rem 2rem;
    flex-direction: column-reverse;

    @media screen and (min-width: 700px) {
        margin: 4rem;
        flex-direction: row;

    }

`;

export const TextWrapper = styled.div`
    margin: 2rem 0;
    text-align: center;
    width: 100%;
    button{
        margin: 0 auto;  
    }
    a {
        text-decoration: none;
    }
  
    @media screen and (min-width: 700px) {
        min-width: 40%;
        width: 50%;
        text-align: left;

        button{
            margin: 0;
        }
    }

`;

export const Title = styled.h1`
    font-size: 42px;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 2rem;
    width: 100%;

    @media screen and (min-width: 1000px) {
        font-size: 62px;
    }
    @media screen and (min-width: 1340px) {
        font-size: 78px;
    }
`;

export const Subtitle = styled.p`
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    @media screen and (min-width: 940px) {
        letter-spacing: .1rem;
    }
`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1000px) {
       width: 50vw;
    }

`;

export const ImageContainer = styled.div`
    display: none;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: .5rem;
    margin-top: ${props => props.position };
    box-shadow: 0 0 0 0 rgba(3, 97, 251, .7);
    transform: scale(1);
    animation: pulse 3s infinite;
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(3, 97, 251, .7);
        }

    
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 30px rgba(3, 97, 251, .1);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(3, 97, 251, 0);
        }
    }
    @media screen and (min-width: 700px) {
        display: block;
        width: 100px;
        height: 100px;
     }

    @media screen and (min-width: 1000px) {
        display: block;
        width: 150px;
        height: 150px;
     }
    @media screen and (min-width: 1100px) {
        display: block;
        width: 200px;
        height: 200px;
    }


`;
export const MobileImageContainer = styled.div`
    width: 180px;
    height: 180px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin: .5rem;    
    @media screen and (min-width: 700px) {
        display: none;
    }
`;

export const HeroImage = styled.img`
    display: inline;
    margin: 0 auto;
    margin-left: -25%; 
    height: 100%;
    width: auto;
`;

