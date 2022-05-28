import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../img/profile.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>{`Home`}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>{`About`}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>{`Resume`}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>{`Portfolio`}</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>{`<Blogs/>`}</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact >{`Contact`}</NavLink>
                </li>
            </ul>

            <div className="icons">
                <a href="https://www.linkedin.com/in/knowjameskim/" className="icon i-linkedin"><LinkedInIcon /></a>
                <a href="https://github.com/320james" className="icon i-github"><GithubIcon /></a>
            </div>

            {/* <footer className="footer">
                <p>@James_Kim</p>
            </footer> */}
        </NavigationStyled >
    );
}

const NavigationStyled = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 0.5px solid var(--border-color);
    

        .icons {
            position: relative;
            bottom: 2rem;
            display: flex;
            justify-content: center;
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

    .avatar {
        width: 100%;
        border-bottom: 0.5px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img {
            width: 70%;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        margin-bottom: 1.5rem;
        .active-class {
            background-color: var(--primary-color);
            color: white;
        }
        li {
            display: block;
            a {
                text-align: center;
                display: block;
                padding: .55rem 0;
                position: relative;
                z-index: 10;
                //text-transform: uppercase;
                transition: all .6s ease-in-out;
                font-weight: 400;
                letter-spacing: 1.4px;

                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.6s cubic-bezier(1,-0.2,.25,.95);
                    z-index: -1;
                    opacity: 0.21;
                    
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;

            }
        }
    }

    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            padding: 1.3rem 0;
            font-size: .8rem;
            display: block;
            text-align: center;
        }
    }

`;

export default Navigation