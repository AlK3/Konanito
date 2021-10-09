import React from 'react';
import { StyledParagraph } from './Paragraph.styles';

interface IParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: React.FC<IParagraphProps> = (props) => {


	return (
    <StyledParagraph {...props} />
	);
}