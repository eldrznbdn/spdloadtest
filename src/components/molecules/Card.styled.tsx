import styled from 'styled-components';

const CardStyled = styled.div`
    box-sizing: border-box;
    width: 411px;
    height: 572px;
    display: flex;
    flex-direction: column;
    align-items: center; 

    .card__image {
        width: inherit;
    }

    .card-with-transition {
        transition: transform 0.3s ease-in-out;
    }

    h1 {
        margin-top: 32px;
        font-family: Syne;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: center;
    }

    p {
        width: 347px;
        height: 58px;
        font-family: Lato;
        font-size: 24px;
        font-weight: 300;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: center;
        color: #556B84;
    }

    .card__buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-top: 64px;
    }
`;

export default CardStyled;
