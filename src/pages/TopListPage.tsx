import React from 'react';
import { List } from '../components/List/List';
import { Paginator } from '../components/Paginator/Paginator';
import { Heading } from '../components/Heading/Heading';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';

export const TopListPage: React.FC = () => {
  
  return (
    <>
      <Header />
      <Main>
				<div style={{marginTop: '4rem'}}></div>
        <Heading size={18}>Top anime</Heading>
        <List />
        <Paginator />
      </Main>
    </>
  );
}
