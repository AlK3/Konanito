import React from 'react';
import { List } from '../components/List/List';
import { Paginator } from '../Paginator/Paginator';
import { Heading } from '../Heading/Heading';

export const TopListPage: React.FC = () => {
  
  return (
    <>
      <Heading size={18}>Top anime</Heading>
      <List />
      <Paginator />
    </>
  );
}
