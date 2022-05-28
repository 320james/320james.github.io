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
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'C'}
                        width={'45%'}
                        text={'45%'}
                    />
                    <ProgressBar
                        title={'ReactJS'}
                        width={'35%'}
                        text={'35%'}
                    />
                    <ProgressBar
                        title={'Swift'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <ProgressBar
                        title={'HTML5/CSS3'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'MySQL'}
                        width={'35%'}
                        text={'35%'}
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