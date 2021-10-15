import styled from 'styled-components';
import { SizePX } from '../../enums';
import { Color } from '../../enums';

interface IHeadingProps {
  size: number;
}

export const StyledHeading = styled.h6<IHeadingProps>`
  font-size: calc(${props => props.size}px + (32 - 18) * ((100vw - ${SizePX.mobileS}) / (1600 - 320)));
  color: ${Color.DARK};
`;