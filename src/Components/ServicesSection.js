import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from '../Components/ServicesCard';
import software from '../img/software-development.svg';
import web from '../img/web-development.svg';
import mobile from '../img/mobile-development.svg';

function ServicesSection() {
    return (
        <div>
            <InnerLayout>
                <ServicesSectionStyled>
                    <Title title={'Interests'} span={'Interests'} />
                    <div className="services">
                        {<ServiceCard
                            image={software}
                            title={'Software Development'}
                            paragraph={'Data Structures & Algorithms, Computer Organization, Software Design & Data Structures, and Computer Systems'} />}
                        {<ServiceCard
                            image={web}
                            title={'Web Development'}
                            paragraph={'Front end and UI/UX web development with HTML, CSS, JavaScript, Angular, and React'} />}
                        {<ServiceCard
                            image={mobile}
                            title={'Mobile Development'}
                            paragraph={'iOS Mobile Software Development with SwiftUI and XCode'} />}
                    </div>
                </ServicesSectionStyled>
            </InnerLayout>
        </div>
    );
}

const ServicesSectionStyled = styled.section`
    .services {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        

        @media screen and (max-width: 1000px) {
            flex-direction: column; 
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }

    }

`;

export default ServicesSection;