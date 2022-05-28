import React from 'react';
import styled from 'styled-components';
import about from '../img/about_me_pic.jpg';
//import PrimaButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={about} alt="" />
            </div>
            <div className="right-content">
                <h4>I am... <span>James!</span></h4>
                <p className="paragraph">
                    I was born in Seoul, South Korea and began my life here in the United States at nine years old. I received my Bachelor's degree in Computer Science at Virginia Tech and I am currently a junior-level software engineer. I'm passionate about weight-lifting, fishing, camping, and exploring about what the world has to offer! It's nice to see you here :)
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name:</p>
                        <p>Date of Birth:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Education:</p>
                        <p>Location:</p>
                    </div>
                    <div className="info">
                        <p>Geun Hyoung Kim</p>
                        <p>03.20.1999</p>
                        <p>Korean-American</p>
                        <p>English, Korean</p>
                        <p>C.S @ Virginia Tech</p>
                        <p>Charlottesville, VA</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1hYJA6wKsFDncF1RMFhw_Nyjw-MeRnrdC/view?usp=sharing">View Resume</a>
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin-top: 2rem;
        .left-content {
            margin-bottom: 2rem;
        }
    }
    
    .left-content{ 
        width: 100%;

        img {
            @media screen and (max-width: 500px) {
                width: 100%;
            }

            border-radius: 5px;
            width: 93%;
            object-fit: cover;
            background-color: var(--background-dark-grey);
            border-left: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
            transition: all .4s ease-in-out;
            box-shadow: 4px 4px 5px rgba(0,0,0, .3);

            &:hover {
                cursor: pointer;
                transform: rotate(0.4deg) scale(1.01);
            }
        }
    }
    .right-content {
        width: 100%;
        @media screen and (max-width: 500px) {
            text-align: center;
        }
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            @media screen and (max-width: 700px) {
                justify-content: center;
                align-items: center
            }
            .info-title {
                padding-right: 3.2rem;
                p {
                    font-weight: 400;
                    @media screen and (max-width: 500px) {
                        font-size: 17px;
                    }
                }
            }
            .info-title, .info {
                p {
                    padding: 0.3rem 0;
                    @media screen and (max-width: 500px) {
                        font-size: 17px;
                    }
                }
            }
        }
        a {
            @media screen and (max-width: 500px) {
            }
            background-color: var(--primary-color);
            padding: .8rem 2.5rem;
            color: white;
            cursor: pointer;
            display: inline-block;
            font-size: inherit;
            text-transform: uppercase;
            position: relative;
            transition: all .4s ease-in-out;
            &::after {
                content: "";
                position: absolute;
                width: 0%;
                height: .2rem;
                transition: all .4s ease-in-out;
                left: 0;
                bottom: 0;
                opacity: 0.7;
            }
            &:hover::after {
                content: "";
                position: absolute;
                width: 100%;
                height: .2rem;
                background-color: var(--white-color);
                transition: all .4s ease-in-out;
                left: 0;
                bottom: 0;
            }
        }
    }

`;

export default ImageSection;