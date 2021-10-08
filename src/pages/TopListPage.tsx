import React, { useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { loadTopData } from '../store/loadData';
import { updatePage } from '../store/pageReducer';
import { Box } from '@material-ui/system';

export const TopListPage: React.FC = () => {
  const dispatch = useDispatch();
  const topPage = useSelector((state: RootState) => state.page.topPage);
  const topData = useSelector((state: RootState) => state.data.topData);
  
  useEffect(() => {
    dispatch(loadTopData(topPage));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [topPage]);

  const onClickPageHandler = (page: number) => {
    dispatch(loadTopData(page));
    dispatch(updatePage(page));
  }
  
  return (
    <>
      <Typography variant='h6'>Top anime</Typography>
      {topData.top?.map(item => {
        return (
          <Box style={{display: 'flex', margin: '1rem'}} component={Link} to={`/${item.title}`}>
            <Typography>{item.rank}</Typography>
            <img src={item.image_url} width='80rem' />
            <div>
              <Typography>
                {item.title}
              </Typography>
              <Typography>
                {item.type + ' ' + item.episodes + ' episodes'}
              </Typography>
            </div>
          </Box>
        );
      })}
      <Box style={{display: 'flex'}}>
        <Button onClick={() => 1 < topPage ? onClickPageHandler(topPage - 1) : null}>Prev 50</Button>
        <Typography>{topPage}</Typography>
        <Button onClick={() => onClickPageHandler(topPage + 1)}>Next 50</Button>
      </Box>
    </>
  );
}
