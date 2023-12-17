import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

interface StyledButtonProps {
  width?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width || '163px'};
  height: 53px;
  border: 0px;
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  background-color: #d3eaff;
  cursor: pointer;
  transition: background-color 0.5s ease; 

  &:hover {
    background-color: #a8d7ff; 
  }
  &:active {
    background-color: #21303c; 
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  width?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, width }) => (
  <StyledButton onClick={onClick} width={width}>
    {children}
  </StyledButton>
);

export default Button;
