import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { loadTitleData, loadTranslateData } from '../store/loadData';
import { RootState } from '../store/store';
import { setTranslate } from '../store/translateReducer';
import { Header } from '../components/Header/Header';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Spacer } from '../components/Spacer/Spacer.styles';
import { Box } from '@material-ui/system';
import { ButtonText } from '../components/Button/Button.styles';
import { Paper } from '@material-ui/core';

export const TitlePage: React.FC = () => {
	const dispatch = useDispatch();
	const titleData = useSelector((state: RootState) => state.data.titleData);
	const translateData = useSelector((state: RootState) => state.data.translateData);
	const translate = useSelector((state: RootState) => state.translate.translate);
	const { titleId } = useParams<{titleId?: string}>();
	
	useEffect(() => {
    dispatch(loadTitleData(titleId as string));
  }, []);

	function translateHandler(text: string): void {
		if (!translateData?.translatedText?.trim())
			dispatch(loadTranslateData(text));
		dispatch(setTranslate(!translate));
	}

	return (
		<>
			<Header />
			<Main>
				<Spacer />
				<Heading size={18}>{titleData.title_english}</Heading>
					<Box style={{display: 'flex'}}>
						<Box style={{display: 'flex', flexDirection: 'column'}}>
							<img src={titleData.image_url} style={{width: '12rem', padding: '.4rem'}} />
						</Box>
						<Box style={{display: 'flex', flexDirection: 'column'}}>
							<Box style={{display: 'flex'}}>
								<Paper style={{flexGrow: 1}} elevation={0}>
									{titleData.score + ' score ' + titleData.rank + ' rank ' + titleData.popularity + ' popularity ' + titleData.members + ' members'}
								</Paper>
								<iframe
										width='240'
										height='160'
										src={titleData.trailer_url?.replace('autoplay=1', 'autoplay=0')}		
										/>
							</Box>
							<Heading size={12}>Synopsis</Heading>
							<Paragraph>
								{translate ? 
									translateData?.translatedText
									:
									titleData.synopsis
								}			
								<ButtonText onClick={() => translateHandler(titleData.synopsis)}>Translate</ButtonText>
							</Paragraph>
						</Box>
					</Box>
			</Main>
		</>
	);
}