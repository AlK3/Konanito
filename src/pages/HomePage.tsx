import React from 'react';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { Header } from '../components/Header/Header';

export const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<div style={{marginTop: '4rem'}}></div>
				<Heading size={18}>Home</Heading>
			</Main>
		</>
	);
}