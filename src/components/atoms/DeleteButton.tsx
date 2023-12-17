import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import deleteIcon from '/icons/deleteIcon.svg';

interface StyledButtonProps {
  isFavoritePage?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #ececec;
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

interface DeleteButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <img src={deleteIcon} alt="SVG Icon" />
  </StyledButton>
);

export default DeleteButton;
