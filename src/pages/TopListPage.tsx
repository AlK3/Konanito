import React, { useEffect } from 'react';
import { List } from '../components/List/List';
import { Paginator } from '../components/Paginator/Paginator';
import { Heading } from '../components/Heading/Heading';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer/Spacer.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { loadTopData } from '../store/loadData';

export const TopListPage: React.FC = () => {
  const dispatch = useDispatch();
  const topPage = useSelector((state: RootState) => state.page.topPage);
	const topData = useSelector((state: RootState) => state.data.topData);
  
  useEffect(() => {
    dispatch(loadTopData(topPage));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Spacer />
        <Heading size={18}>Top anime</Heading>
        <List items={topData.top} />
        <Paginator />
      </Main>
    </>
  );
}
