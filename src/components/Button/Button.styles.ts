import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Color, Size } from '../../enums';

const StyledButton = styled(Button)`
  && {
    margin: .5rem;
    padding: ..1rem;
    font-size: 1rem;
    color: ${Color.BLACK};

    @media (max-width: ${Size.mobileL}) {
      font-size: .875rem;
    }

    @media (max-width: ${Size.mobileM}) {
      font-size: .750rem;
    }

    @media (max-width: ${Size.mobileS}) {
      font-size: .625rem;
    }
  }
`;

export const ButtonContained = styled(StyledButton)`
  && {
    background-color: ${Color.ORANGE};

    :link, :visited, :focus {
      background-color: ${Color.ORANGE};
    }

    :hover {
      background-color: #d65421;
    }
    
    :active {
      background-color: #d65421;
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