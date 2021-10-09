import styled from 'styled-components';
import { Size } from '../../enums';


interface IHeadingProps {
  size: number;
}

export const StyledHeading = styled.h6<IHeadingProps>`
  font-size: calc(${props => props.size}px + (32 - 18) * ((100vw - ${Size.mobileS}) / (1600 - 320)));
`;