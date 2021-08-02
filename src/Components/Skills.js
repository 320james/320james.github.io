import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from '../Components/ProgressBar';


function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'Java'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'C'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'ReactJS'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <ProgressBar
                        title={'Swift'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'35%'}
                        text={'35%'}
                    />
                    <ProgressBar
                        title={'Git'}
                        width={'85%'}
                        text={'85%'}
                    />
                </div>

            </InnerLayout>
        </SkillsStyled>

    );
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills