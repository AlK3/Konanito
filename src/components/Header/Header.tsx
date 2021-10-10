import React from 'react';
import { Toolbar } from '@material-ui/core';
import { StyledHeader } from './Header.styles';
import { ButtonContained } from '../Button/Button.styles';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  
  return (
    <StyledHeader>
      <Toolbar style={{justifyContent: 'space-evenly'}}>
        <div>
          <Link to='/home'>
            <ButtonContained>
              Home
            </ButtonContained>
          </Link>
          <Link to='/about'>
            <ButtonContained>
              About
            </ButtonContained>
          </Link>
          <Link to='/top'>
            <ButtonContained>
              Top
            </ButtonContained>
          </Link>
        </div>
      </Toolbar>
    </StyledHeader>
  );
}