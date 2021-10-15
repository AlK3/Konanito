import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { Color } from '../../enums';

export const StyledHeader = styled(AppBar)`
  && {
    position: fixed;
    width: 100%;
    background-color: ${Color.WHITE};
  }
`;