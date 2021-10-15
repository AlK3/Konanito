import React from 'react';
import { List } from '../components/List/List';
import { Paginator } from '../components/Paginator/Paginator';
import { Heading } from '../components/Heading/Heading';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer/Spacer.styles';

export const TopListPage: React.FC = () => {
  
  return (
    <>
      <Header />
      <Main>
        <Spacer />
        <Heading size={18}>Top anime</Heading>
        <List />
        <Paginator />
      </Main>
    </>
  );
}
