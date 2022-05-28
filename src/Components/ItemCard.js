import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Button({ buttonName, link }) {


    return (
        <ButtonStyled>
            <a href={link} >
                <button className="button button-primary" style={{ paddingLeft: "0" }}>
                    <ArrowForwardIosIcon sx={{ fontSize: "15px" }} style={{ paddingRight: "4px" }} />
                    {buttonName}
                </button>
            </a>

        </ButtonStyled>

    )
}

const ButtonStyled = styled.div`

    position: absolute;
    bottom: 0.8rem;

    .button-primary {
    border: none;
    box-shadow: none;
    font-family: inherit;
    background-color: transparent;
    color: var(--primary-color);
    transition:.25s;
    font-size: 15px;
    text-align: left;

    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 15px;

        
    }

    &:hover {
        box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
        cursor: pointer;
        
        .button-primary {
        transform: translate(10px, 0);
        }
    }
    

`

function CardBody({ date, title, category, description, link, buttonName }) {
    return (
        <CardBodyStyled>
            <div className="card-body">
                <p className="date">{date}</p>

                <h2 className="title">{title}</h2>

                <p className="category">{category}</p>

                <p className="body-content">{description}</p>

                <Button buttonName={buttonName} link={link} />
            </div>
        </CardBodyStyled>
    )
}

const CardBodyStyled = styled.div`

    .card-body {
    padding: 15px;
    background-color: var(--opposite-dark-color);
    width:100%;
    height: 15rem;
    }

    .title {
        color: var(--white-color);
        margin-bottom: 0.5rem;
    }

    .date {
    font-size: 11px;
    font-weight: 600;
    color: var(--white-color);
    margin-bottom: 0.2rem;
    }

    .category {
        font-size: 13px;
        color: var(--white-color);
        margin-bottom: 0.4rem;
    }

    .body-content {
    font-size: 13px;
    line-height: 1.4;
    color: var(--white-color);
    }
`

function ItemCard({ image, title, date, category, description, buttonName, link }) {


    return (
        <CardStyled>

            <article className="card">
                <header style={{ backgroundImage: `url(${image})` }} id={image} className="card-header">
                </header>
                <CardBody title={title} date={date} category={category} buttonName={buttonName} description={description} link={link} />
            </article>
        </CardStyled>
    )
}

const CardStyled = styled.div`

    

    .card-header {
        
        height: 13rem;
        width: 100%;
        padding: 15px;
        /* background-color: #141414; */
        background-color: var(--background-dark-grey);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        
    }

    .card {
        width: 80%;
        display: block;
        margin: 60px auto;
        box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
        transition: .25s;
        position: relative;

}



`

export default ItemCard
