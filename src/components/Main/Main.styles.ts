import styled from 'styled-components';
import { SizePX } from '../../enums';

export const StyledMain = styled.main`
  padding: calc(16px + (22 - 8) * ((100vw - ${SizePX.mobileS}) / (1600 - 320)));
  padding-top: 26px;
  margin:0 auto;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1600px;
  width: 100vw;
`;