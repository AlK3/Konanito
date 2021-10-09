import { Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Heading } from '../Heading/Heading';
import { loadTitleData, loadTranslateData } from '../store/loadData';
import { RootState } from '../store/store';
import { setTranslate } from '../store/translateReducer';

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
		dispatch(setTranslate());
	}

	return (
		<>
			<Heading size={18}>{titleData.title_english}</Heading>
			<Typography component='p'>
					{translate ? 
						translateData?.translatedText
						:
						titleData.synopsis
					}
					<Button onClick={() => translateHandler(titleData.synopsis)}>Translate</Button>
				</Typography>
		</>
	);
}