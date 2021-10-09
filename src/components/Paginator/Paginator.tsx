import React, { useEffect } from 'react';
import { StyledPaginator } from './Paginator.styles';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopData } from '../../store/loadData';
import { updatePage } from '../../store/pageReducer';
import { RootState } from '../../store/store';

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
        <Button onClick={() => 1 < topPage ? onClickPageHandler(topPage - 1) : null}>Prev 50</Button>
        <Typography>{topPage}</Typography>
        <Button onClick={() => onClickPageHandler(topPage + 1)}>Next 50</Button>
    </StyledPaginator>
	);
}