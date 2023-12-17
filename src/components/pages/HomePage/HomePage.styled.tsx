import styled from 'styled-components'

const HomePageStyled = styled.div`
margin-bottom: 160px;
.hero__section {
    text-align: center;
    position: relative;
    height: 660px;
    width: 100%;
    background: url(${(props) => props.backgroundImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: background-image 0.5s ease;
 }

.hero__heading{
    margin: 0;
    text-transform: uppercase;
    font-family: Syne;
    font-size: 48px;
    font-weight: 800;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
}

.span__text{
    font-family: Syne;
    font-size: 310px;
    font-weight: 800;
    line-height: 372px;
    letter-spacing: 0em;
    text-align: center;
 }

a {
    font-family: Lato;
    font-size: 32px;
    font-weight: 300;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
    .arrow__down-btn{
     width: 40px;
     height: 40px;
    }

    .image-circles {
    position: absolute;
    right: calc(50%);
    display: flex;
    justify-content: space-between;
    width: 88px;
    margin-top: 20px;
  }

  .circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #fff;
    cursor: pointer;
    position: relative; 
  }

  .filled {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}



    .arrow__down-btn{
        z-index: 1000;
        color: #fff;
    }

@media (max-width: 1280px) {
  .span__text {
    font-size: 250px;
  }
  .hero__heading{
    font-size: 38px;
}
}

@media (max-width: 1024px) {
.span__text {
    font-size: 200px;
  }
  .hero__heading{
    font-size: 30px;
}

.image-circles {
    right: calc(49%);
  }
  
}


`;

export default HomePageStyled