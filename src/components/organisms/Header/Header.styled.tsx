import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: black;
  .header-container {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  ul{
    display: flex;
    gap: 32px;
  }

  .buttons{
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .logo{
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .header__menu {
      display: none;
    }
}
`;

export default HeaderStyled;