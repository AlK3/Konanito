import React from 'react';
import { List } from '../components/List/List';
import { Paginator } from '../components/Paginator/Paginator';
import { Heading } from '../components/Heading/Heading';
import { Main } from '../components/Main/Main';

export const TopListPage: React.FC = () => {
  
  return (
    <Main>
      <Heading size={18}>Top anime</Heading>
      <List />
      <Paginator />
    </Main>
  );
}
