import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
//import PrimaryButton from '../Components/PrimaryButton';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationIcon />
    return (
        <MainLayout>
            <ContactPageStyled>
                <Title title={'Contact'} span={'Contact'} />
                <InnerLayout className={'contact-section'}>

                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" action="https://formspree.io/f/mknkrqpq" method="POST" id="my-form">
                            <div className="form-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" />

                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message</label>
                                <textarea className="textarea" name="message" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <button type="submit">Send Messsage</button>
                            </div>
                        </form>

                    </div>

                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'703-678-6883'} />
                        <ContactItem title={'Email'} icon={email} cont1={'320james@gmail.com'} />
                        <ContactItem title={'Location'} icon={location} cont1={'Charlottesville, VA'} />

                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    );
}

const ContactPageStyled = styled.section`
    @media screen and (max-width: 500px) {
        margin-top: 4rem;
    }
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        

        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
            .f-button {
                margin-bottom: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        .right-content {
            display: grid;
            grid-template-columns: repeat(1 1fr);
            @media screen and (max-width: 502px) {
                width: auto;
                justify-content: center;                
            }
        }
        .contact-title {
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
                
            }
        }
        .form {
            width: 100%;
            

            .form-field {
                
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label {
                    position: absolute;
                    font-size: 0.9rem;
                    top: -2rem;
                    display: inline-block;
                    background-color: rgba(0, 0, 0, 0);
                    padding: 0.5rem;
                    color: inherit;
                }
                input {
                    border-radius: 5px;
                    font-size: 0.9rem;
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea {
                    border-radius: 5px;
                    font-size: 0.9rem;

                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                
            }

        }
    }
`;

export default ContactPage;