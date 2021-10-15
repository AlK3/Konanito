import React from 'react';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer/Spacer.styles';

export const AboutPage: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<Spacer />
				<Heading size={18}>About</Heading>
			</Main>
		</>
	);
}