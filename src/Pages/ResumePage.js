import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout } from '../styles/Layouts';
import Resume from '../Components/Resume';
import styled from 'styled-components';


function ResumePage() {
    return (
        <MainLayout>
            <ResumeStyled>
                <Skills />
                <Resume />
            </ResumeStyled>
        </MainLayout>
    );
}

const ResumeStyled = styled.section`
    @media screen and (max-width: 500px) {
        margin-top: 4rem;
    }
`;

export default ResumePage;