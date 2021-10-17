import React from 'react';
import { StyledPaginator } from './Paginator.styles';
import { ButtonText } from '../Button/Button.styles';
import { Paragraph } from '../Paragraph/Paragraph';

interface IonClickPageHandler {
  (page: number): void;
}

interface IPaginatorProps {
  page: number;
  onClickPageHandler: IonClickPageHandler;
}

export const Paginator: React.FC<IPaginatorProps> = ({ page, onClickPageHandler }) => {

	return (
		<StyledPaginator>
        <ButtonText onClick={() => 1 < page ? onClickPageHandler(page - 1) : null}>Prev</ButtonText>
        <Paragraph>{page}</Paragraph>
        <ButtonText onClick={() => onClickPageHandler(page + 1)}>Next</ButtonText>
    </StyledPaginator>
	);
}