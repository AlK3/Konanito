import React from 'react';
import { TextField, Toolbar } from '@material-ui/core';
import { StyledHeader } from './Header.styles';
import { ButtonContained } from '../Button/Button.styles';
import { Link } from 'react-router-dom';
import { Size } from '../../enums';
import MediaQuery from 'react-responsive';
import { useDispatch } from 'react-redux';
import { loadSearchData } from '../../store/loadData';
import { useHistory } from "react-router-dom";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();

    const target = event.target as typeof event.target & {
			titleId: { value: string };
		};
    
    history.push('/search');
    
    if (target.titleId.value.trim()) {
      dispatch(loadSearchData(`q=${target.titleId.value}`));
    }
	}

  return (
    <StyledHeader>
      <Toolbar style={{justifyContent: 'space-evenly'}}>
        <div>
          <Link to='/home'>
            <ButtonContained color='primary'>
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
          <MediaQuery maxWidth={Size.laptop}>
            <Link to='/search'>
              <ButtonContained>
                Search
              </ButtonContained>
            </Link>
          </MediaQuery>
        </div>
        <MediaQuery minWidth={Size.laptop}>
          <form onSubmit={submitHandler} style={{display: 'flex', alignItems: 'center'}}>
            <TextField name='titleId' label='Search title' variant='outlined' size='small' />
            <ButtonContained type='submit'>
              Search
            </ButtonContained>
          </form>
        </MediaQuery>
      </Toolbar>
    </StyledHeader>
  );
}