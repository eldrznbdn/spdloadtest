import React from 'react';
import Button from '../../atoms/Button.styled';
import logo from '/icons/logo.svg';
import FavoriteButton from '../../atoms/FavoriteButton';
import HeaderLink from '../../atoms/HeaderLink';
import HeaderStyled from './Header.styled';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFavoritePage = location.pathname === '/favoritepage';

  console.log(isFavoritePage);

  return (
    <HeaderStyled>
      <div className='header-container container'>
        <img
          onClick={() => {
            navigate('/');
          }}
          className='logo'
          alt='logo'
          src={logo}
        />
        <ul className='header__menu'>
          <HeaderLink href='/'>HOME</HeaderLink>
          <HeaderLink>TOURS</HeaderLink>
          <HeaderLink>ABOUT</HeaderLink>
          <HeaderLink>HELP</HeaderLink>
        </ul>
        <div className='buttons'>
          <FavoriteButton
            isFavoritePage={isFavoritePage}
            onClick={() => {
              navigate('/favoritepage');
            }}
          />
          <Button>SIGN IN</Button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
