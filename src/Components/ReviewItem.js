import React from 'react';
import styled from 'styled-components';


function ReviewItem({ text }) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    );
}

const ReviewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;

    @media screen and (max-width: 600px) {
        padding: 0.6rem 1rem;
    } 

    &::after {
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        bottom: 0%;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
        border-style: solid;
    }
    p {
        padding: 1rem 0;
    }
`;

export default ReviewItem;