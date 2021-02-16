import React from 'react';
import {Container, TextWrapper , Title, Wrapper, Subtitle, HeroImage, HeroImageContainer, ImageContainer,MobileImageContainer} from './styles/landing';
import { PrimaryBtn } from '../styles/buttons';
import {Link } from 'react-router-dom';


export default function Landing() {
    const gradient = "linear-gradient(90deg, rgba(3,97,251,1) 0%, rgba(36,139,228,1) 35%, rgba(0,200,255,0.87527352297593) 100%)";
    return (
        <Container>
            <Wrapper>
                <TextWrapper>
                    <Subtitle> hundreds of jobs for junior developers </Subtitle>
                    <Title> Find Your Dream Job </Title>
                    <Link to="/jobs">
                        <PrimaryBtn style={{textDecoration: 'none'}} font="1.2rem" width="250px" bgGradient={gradient}> 
                            Find Jobs 
                            <img src="/assets/arrow.svg" alt="arrow"/>
                        </PrimaryBtn>
                    </Link>
                </TextWrapper>
                <HeroImageContainer>
                    <ImageContainer position="2rem">
                        <HeroImage src="/assets/woman-on-computer.jpg" alt="person working on laptop"/>
                    </ImageContainer>
                    <ImageContainer position="16rem">
                        <HeroImage src="/assets/woman-on-computer-2.jpg" alt="person working on laptop" />
                    </ImageContainer>
                    <ImageContainer position="4rem;">
                    <HeroImage src="/assets/code-laptop.jpg" alt="programming script on laptop display" />
                </ImageContainer>
                <MobileImageContainer>
                <HeroImage src="/assets/work-from-home.svg" alt="illustration of person working on a computer" />
            </MobileImageContainer>
                </HeroImageContainer>
            </Wrapper>
        </Container>
    )
}
