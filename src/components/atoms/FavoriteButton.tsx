import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import favoriteSvg from '/icons/favorite.svg';
import favoriteWhiteSvg from '/icons/favorite-white.svg';

interface StyledButtonProps {
  isFavoritePage?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.isFavoritePage ? '#DD377D' : '#fff')};
  width: 53px;
  height: 53px;
  padding: 17px 16.5px;
  border: none;
  cursor: pointer;
  color: #fff;

  img {
    fill: ${(props) => (props.isFavoritePage ? '#fff' : '#000')};
    width: 20px;
    height: 19px;
  }
`;

interface FavoriteButtonProps {
  onClick?: () => void;
  isFavoritePage?: boolean;
  children: ReactNode;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ onClick, isFavoritePage, children }) => (
  <StyledButton onClick={onClick} isFavoritePage={isFavoritePage}>
    <img src={isFavoritePage ? favoriteWhiteSvg : favoriteSvg} alt="SVG Icon" />
    {children}
  </StyledButton>
);

export default FavoriteButton;
