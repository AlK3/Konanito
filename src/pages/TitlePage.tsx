import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { loadReviewsData, loadTitleData, loadTranslateData } from '../store/loadData';
import { RootState } from '../store/store';
import { setTranslate } from '../store/translateReducer';
import { Header } from '../components/Header/Header';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Spacer } from '../components/Spacer/Spacer.styles';
import { Box } from '@material-ui/system';
import { ButtonText } from '../components/Button/Button.styles';
import { Paper } from '@material-ui/core';
import { updateReviewsPage } from '../store/pageReducer';
import { Paginator } from '../components/Paginator/Paginator';

export const TitlePage: React.FC = () => {
	const dispatch = useDispatch();
	const titleData = useSelector((state: RootState) => state.data.titleData);
	const reviewsData = useSelector((state: RootState) => state.data.reviewsData);
	const reviewsPage = useSelector((state: RootState) => state.page.reviewsPage);
	const translateData = useSelector((state: RootState) => state.data.translateData);
	const translate = useSelector((state: RootState) => state.translate.translate);
	const { titleId } = useParams<{titleId?: string}>();
	
	useEffect(() => {
    dispatch(loadTitleData(titleId as string));
		dispatch(loadReviewsData(reviewsPage, titleId as string));
  }, []);

	useEffect(() => {
    window.scrollTo(0, 0)
  }, [reviewsPage]);

	function translateHandler(text: string): void {
		if (!translateData?.translatedText?.trim())
			dispatch(loadTranslateData(text));
		dispatch(setTranslate(!translate));
	}

	const onClickPageHandler = (page: number) => {
    dispatch(updateReviewsPage(page));
		dispatch(loadReviewsData(page, titleId as string));
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
									<Heading size={14}>
										{titleData.rank + ' rank'}
									</Heading>
									<Heading size={12}>
										{titleData.score + ' score'}
									</Heading>
									<Heading size={10}>
										{titleData.popularity + ' popularity'}
									</Heading>
									<Heading size={10}>
										{titleData.members + ' members'}
									</Heading>
								</Paper>
								<iframe
										width='25%'
										height='100%'
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
							<Paper style={{flexGrow: 1}} elevation={0}>
								{reviewsData.reviews?.map(review => {
									return (
										<div key={review.date}>
											<Heading size={6}>{review.reviewer.username}</Heading>
											<Paragraph>{review.content}</Paragraph>
										</div>
									);
								})}
								<Paginator page={reviewsPage} onClickPageHandler={onClickPageHandler} />
							</Paper>
						</Box>
					</Box>
			</Main>
		</>
	);
}