import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Color, SizePX } from '../../enums';

const StyledButton = styled(Button)`
  && {
    margin: .5rem;
    padding: ..1rem;
    font-size: 1rem;
    color: ${Color.DARK};

    @media (max-width: ${SizePX.mobileL}) {
      font-size: .875rem;
    }

    @media (max-width: ${SizePX.mobileM}) {
      font-size: .750rem;
    }

    @media (max-width: ${SizePX.mobileS}) {
      font-size: .625rem;
    }
  }
`;

export const ButtonContained = styled(StyledButton)`
  && {
    background-color: ${Color.BLUE};

    :link, :visited, :focus {
      background-color: ${Color.BLUE};
    }

    :hover {
      background-color: ${Color.DBLUE};
    }
    
    :active {
      background-color: ${Color.DBLUE};
    }
  }
`;

export const ButtonOutlined = styled(StyledButton)`
  && {
    border: .125rem solid #ffffff;
    background-color: #1976d3;
    border-radius: .5rem;

    :link, :visited, :focus {
      background-color: #1976d3;
    }

    :hover {
      background-color: #1871ca;
    }
    
    :active {
      background-color: #1871ca;
    }
  }
`;

export const ButtonText = styled(StyledButton)`
  && {
    color: ${Color.ORANGE};
  }
`;