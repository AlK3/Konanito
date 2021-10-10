import React, { useEffect } from 'react';
import { StyledPaginator } from './Paginator.styles';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopData } from '../../store/loadData';
import { updatePage } from '../../store/pageReducer';
import { RootState } from '../../store/store';
import { ButtonText } from '../Button/Button.styles';
import { Paragraph } from '../Paragraph/Paragraph';

export const Paginator: React.FC = () => {
  const dispatch = useDispatch();
  const topPage = useSelector((state: RootState) => state.page.topPage);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [topPage]);

  const onClickPageHandler = (page: number) => {
    dispatch(loadTopData(page));
    dispatch(updatePage(page));
  }

	return (
		<StyledPaginator>
        <ButtonText onClick={() => 1 < topPage ? onClickPageHandler(topPage - 1) : null}>Prev 50</ButtonText>
        <Paragraph>{topPage}</Paragraph>
        <ButtonText onClick={() => onClickPageHandler(topPage + 1)}>Next 50</ButtonText>
    </StyledPaginator>
	);
}