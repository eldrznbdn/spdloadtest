import styled from 'styled-components'

const CarouselStyled = styled.div`
.carousel-container {
    overflow: hidden;
}

.carousel-track {
    display: flex;
    gap: 26px;
    transition: transform 1s ease-in-out;
}

.back-btn,
.forward-btn {
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    padding: 10px;
    text-align: center;
    background: #ECECEC;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tours__section-heading {
    margin-top: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.tours__heading {
    font-family: Syne;
    font-size: 32px;
    font-weight: 800;
    line-height: 38px;
    letter-spacing: 0em;
}


.tours__buttons {
    display: flex;
    gap: 16px;
}

.back-btn {
    float: left;
}

.forward-btn {
    float: right;
}

.section {
    display: flex;
    flex-direction: column;
}

.carousel-indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 8px;
}

.carousel-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
}

.carousel-filled {
    position: absolute;
    width: 12px;
    height: 12px;
    background: black;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`

export default CarouselStyled;