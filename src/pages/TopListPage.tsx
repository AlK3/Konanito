import React from 'react';
import { Typography } from '@material-ui/core';
import { List } from '../components/List/List';
import { Paginator } from '../Paginator/Paginator';

export const TopListPage: React.FC = () => {
  
  return (
    <>
      <Typography variant='h6'>Top anime</Typography>
      <List />
      <Paginator />
    </>
  );
}
