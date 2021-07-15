import React from 'react';
import Particles from '../Components/Particles';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>James Kim</span></h1>
                <p>
                    I am a Computer Science student at Virginia Tech.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/knowjameskim/" className="icon i-linkedin"><LinkedInIcon /></a>
                    <a href="https://github.com/320james" className="icon i-github"><GithubIcon /></a>
                </div>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-y: hidden;

    .p-particles-js {
        position: absolute;
        left: 0;
        right: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;

                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                    
                }
                svg {
                    margin: .5rem;
                }

                .i-github {
                    &:hover {
                        border: 2px solid #5F4687;
                        color: #5F4687;
                    }
                }


            }
        }
    }

`;

export default HomePage;