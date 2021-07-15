import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas eos velit vero praesentium reprehenderit ipsa sapiente placeat temporibus, id iure, soluta quis corrupti doloremque voluptatum cupiditate, labore magni exercitationem!'} />
                    <ReviewItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas eos velit vero praesentium reprehenderit ipsa sapiente placeat temporibus, id iure, soluta quis corrupti doloremque voluptatum cupiditate, labore magni exercitationem!'} />
                </div>
            </InnerLayout>
        </ReviewsStyled>
    );
}
const ReviewsStyled = styled.section`
    .reviews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 3rem;
        }
    }
`;

export default ReviewsSection;