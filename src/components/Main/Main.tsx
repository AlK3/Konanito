import React from 'react';
import { StyledMain } from './Main.styles';

interface IMainProps {
  children: React.ReactNode;
}

export const Main: React.FC<IMainProps> = (props) => {

	return (
    <StyledMain {...props} />
	);
}