import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Color } from '../consts';

export const StyledItem = styled(Link)`
  display: flex;
  margin: 1rem;
  border: .1rem solid ${Color.ORANGE};
  border-radius: .625rem;
  text-decoration: none;
  color: black;
  :link, :visited, :focus {
    background: #ddd;
  }
  :hover {
    background: ${Color.ORANGE};
    color: white;
  }
  
  :active {
    background: ${Color.ORANGE};
    color: white;
  }
`;