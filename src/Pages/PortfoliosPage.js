import React from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import styled from 'styled-components';
import projects from '../data/projects';
import ItemCard from '../Components/ItemCard';

function PortfoliosPage() {
    return (

        <MainLayout>
            <PortfoliosStyled>
                <Title title={'Portfolio'} span={'Portfolio'} />

                <InnerLayout className={'project'}>
                    {
                        projects.map((project) => {
                            console.log(project.image);
                            return <ItemCard image={project.image} title={project.title} date={project.date} category={project.category} description={project.description} link={project.link} buttonName={project.buttonName} />
                        })
                    }
                </InnerLayout>
            </PortfoliosStyled>
        </MainLayout>
    );
}




const PortfoliosStyled = styled.div`
@media screen and (max-width: 500px) {
    margin-top: 4rem;
}
.project {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 10rem;
        grid-auto-rows: 23rem;
        
        @media screen and (max-width: 770px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
        
        
    }

`;

export default PortfoliosPage;