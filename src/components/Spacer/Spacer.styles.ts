import styled from 'styled-components';

interface ISpacerProps {
  margin: number;
}

export const Spacer = styled.div<ISpacerProps>`
  margin-top: ${props => props.margin}rem;
`;