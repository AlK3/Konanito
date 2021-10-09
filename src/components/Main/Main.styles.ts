import styled from 'styled-components';
import { Size } from '../../enums';

export const StyledMain = styled.main`
  padding: calc(16px + (22 - 8) * ((100vw - ${Size.mobileS}) / (1600 - 320)));
  margin:0 auto;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1600px;
  width: 100vw;
`;