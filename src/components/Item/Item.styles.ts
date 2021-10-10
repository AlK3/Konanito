import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Color } from '../../enums';

export const StyledItem = styled(Link)`
  display: flex;
  margin: 16px;
  border: 2px solid ${Color.ORANGE};
  border-radius: 10px;
  text-decoration: none;
  color: black;
  :link, :visited, :focus {
    background: ${Color.DARK};
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