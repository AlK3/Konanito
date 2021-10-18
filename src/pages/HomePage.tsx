import React from 'react';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer/Spacer.styles';

export const HomePage: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<Spacer margin={4} />
				<Heading size={18}>Home</Heading>
			</Main>
		</>
	);
}