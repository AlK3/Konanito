import React from 'react';
import { StyledHeading } from './Heading.styles';

interface IHeadingProps {
  children: React.ReactNode;
  size: number;
}

export const Heading: React.FC<IHeadingProps> = (props) => {


	return (
    <StyledHeading {...props} />
	);
}