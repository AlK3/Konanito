import React from 'react';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';

export const HomePage: React.FC = () => {
	return (
		<Main>
			<Heading size={18}>Home</Heading>
		</Main>
	);
}