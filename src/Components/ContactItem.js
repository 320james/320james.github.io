import React from 'react';
import styled from 'styled-components';



function ContactItem({ icon, title, cont1, cont2 }) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    );
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    box-shadow: 4px 4px 5px rgba(0,0,0, .4);
    border-radius: 5px;

    &:not(:last-child) {
        margin-bottom: 2.2rem;
    }
    .left-content {
        @media screen and (max-width: 600px) {
            padding: 0.7rem;
        }
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg {
            font-size: 2.3rem;
        }
    }

    .right-content {
        h6 {
            @media screen and (max-width: 600px) {
                font-size: 1rem;
                padding-bottom: 0.2rem;
            }
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: 0.6rem;
        }
        p {
            @media screen and (max-width: 600px) {
                font-size: 0.7rem;
            }
            padding: .1rem 0;
        }
    }

`;

export default ContactItem;