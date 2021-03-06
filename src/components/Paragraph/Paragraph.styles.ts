import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SizePX } from '../../enums';
import { Color } from '../../enums';

export const StyledParagraph = styled(Typography)`
  && {
    font-size: calc(14px + (16 - 10) * ((100vw - ${SizePX.mobileS}) / (1600 - 320)));
    margin: 6px;
    color: ${Color.DARK};
  }
`;