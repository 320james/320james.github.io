import React from 'react';
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title'
import { MainLayout } from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';


function AboutPage() {
    return (

        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
            </AboutStyled>
        </MainLayout>
    );
}

const AboutStyled = styled.section`
    @media screen and (max-width: 500px) {
        margin-top: 4rem;
    }
`;

export default AboutPage;