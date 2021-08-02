import React from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import styled from 'styled-components';
import projects from '../data/projects';

function PortfoliosPage() {
    return (

        <MainLayout>
            <PortfoliosStyled>
                <Title title={'Portfolio'} span={'Portfolio'} />
                <InnerLayout className={'project'}>
                    {
                        projects.map((project) => {
                            return <div key={project.id} className={'project-item'}>
                                <div className="image">
                                    <a href={project.link}>
                                        <img src={project.image} alt="" />
                                    </a>
                                </div>
                                <div className="title">
                                    <div className="project-title">
                                        <a href={project.link}>
                                            {project.title}
                                        </a>
                                    </div>
                                </div>
                            </div>
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
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        grid-auto-rows: 23rem;
        
        @media screen and (max-width: 770px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
        .project-item {
            background-color: var(--background-dark-grey);   
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 1rem;
            padding-bottom: 3.5rem;
            overflow: hidden;
            box-shadow: 4px 4px 5px rgba(0,0,0, .4);
            
        }
        .image {
            width: 100%;
            height: 100%;
            border-left: 4px solid var(--border-color);
            border-right: 4px solid var(--border-color);
            border-top: 4px solid var(--border-color);
            border-bottom: 4px solid var(--border-color);
            padding-bottom: 0.5rem;
            position: relative;
            
            transition: all .4s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: rotate(1.5deg) scale(1.03);
            }
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                max-height: 95%;
                max-width: 95%;
                transform: translate(-50%, -50%);
            }
            
        }
        .title {
            padding-top: .6rem;
            line-height: 1.2;
            .project-title {
                font-size: 0.9rem;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }

`;

export default PortfoliosPage;