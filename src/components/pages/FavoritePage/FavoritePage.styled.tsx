import styled from 'styled-components'

const FavoritePageStyled = styled.div`
    .hero__section{
        height: 440px;
        width: 100%;
        background:url("/frames/frameThree.svg");
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .favorites__heading{
        margin: 0;
        font-family: Syne;
        font-size: 70px;
        font-weight: 800;
        line-height: 48px;
        letter-spacing: 0em;

    }

    .favourites__cards{
        margin-top: 64px;
    }

    .favorite__container {
        display: flex;
        gap: 26px;
        flex-wrap: wrap;
    }
  

    .favorite__container {
        margin-top: 40px;
    }

    .favorites__tours {
        display: flex;
        justify-content: flex-end;
    }

    .clear__button{
        padding: 0;
        border: 0;
        background-color: #fff;
        font-family: Lato;
        font-size: 24px;
        font-weight: 300;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: center;
        color: #556B84;
        cursor: pointer;

    }
`;

export default FavoritePageStyled