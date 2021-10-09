import styled from 'styled-components';
import { Size } from '../enums';

interface IHeadingProps {
  size: number;
}

export const StyledHeading = styled.h6<IHeadingProps>`
  font-size: calc(${props => props.size}px + (28 - 18) * ((100vw - ${Size.mobileS}) / (1200 - 320)));
`;