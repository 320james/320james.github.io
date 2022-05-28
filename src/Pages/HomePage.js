import React, { useEffect, useState } from 'react';
import Particles from '../Components/Particles';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';


function HomePage() {

    const url = 'https://api.kanye.rest/';
    const [quote, setQuote] = useState("");

    useEffect(() => {
        axios.get(url).then(response => setQuote(response.data.quote))
            .catch(error => console.error(error));
    }, [])



    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>James Kim</span></h1>
                <h5>
                    I am a Software Engineer...!
                </h5>
                <p>{quote}</p>
                <p>- Kanye West</p>
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
        
        h5 {
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        p {
            font-size: 0.8rem;
        }

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 1px solid var(--border-color);
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