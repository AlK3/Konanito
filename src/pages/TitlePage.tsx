import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { loadEpisodesData, loadRecommendationsData, loadReviewsData, loadTitleData, loadTranslateData } from '../store/actions/loadData';
import { RootState } from '../store/store';
import { setTranslate } from '../store/reducers/translateReducer';
import { Header } from '../components/Header/Header';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Spacer } from '../components/Spacer/Spacer.styles';
import { Box } from '@material-ui/system';
import { ButtonText } from '../components/Button/Button.styles';
import { Paper } from '@material-ui/core';
import { updateReviewsPage } from '../store/reducers/pageReducer';
import { Paginator } from '../components/Paginator/Paginator';
import { Color, SizePX } from '../enums';
import styled from 'styled-components';

export const TitlePage: React.FC = () => {
	const dispatch = useDispatch();
	const titleData = useSelector((state: RootState) => state.data.titleData);
	const reviewsData = useSelector((state: RootState) => state.data.reviewsData);
	const reviewsPage = useSelector((state: RootState) => state.page.reviewsPage);
	const episodesData = useSelector((state: RootState) => state.data.episodesData);
	const translateData = useSelector((state: RootState) => state.data.translateData);
	const recommendationsData = useSelector((state: RootState) => state.data.recommendationsData);
	const translate = useSelector((state: RootState) => state.translate.translate);
	const { titleId } = useParams<{titleId?: string}>();
	
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(updateReviewsPage(1));
    dispatch(loadTitleData(titleId as string));
		dispatch(loadEpisodesData(titleId as string));
		dispatch(loadReviewsData(reviewsPage, titleId as string));
		dispatch(loadRecommendationsData(titleId as string));
  }, [titleId]);

	useEffect(() => {
    window.scrollTo(0, 0);
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

	const MainBox = styled(Box)`
		&& {
			display: flex;
			@media (max-width: ${SizePX.mobileL}) {
				flex-direction: column;
			}
		}
	`;

	const ImageBox = styled(Box)`
		&& {
			display: flex;
			flex-direction: column;
			width: 20vw;
			align-items: center;
			max-width: 320px;
			@media (max-width: ${SizePX.mobileL}) {
				width: 100vw;
				max-width: 100vw;
			}
		}
	`;

	const TitleImage = styled.img`
		width: 20vw;
		margin: 8px;
		max-width: 12rem;
		@media (max-width: ${SizePX.mobileL}) {
			width: 30vw;
			max-width: 30vw;
		}
		@media (min-width: ${SizePX.laptopL}) {
			position: fixed;
		}
	`;

	const ContentBox = styled(Box)`
		&& {
			display: flex;
			flex-direction: column;
			width: 80vw;
			max-width: 1280px;
			@media (max-width: ${SizePX.mobileL}) {
				width: 90vw;
			}
		}
	`;

	const Image = styled.img`
		width: 20vw;
		max-width: 12rem;
		margin: 4px;
		padding: 4px;
		background: ${Color.ORANGE};
		border-radius: 4px;
	`;

	const Recommendation = styled.div`
		display: flex;
		width: 100%;
		overflow: auto;
		white-space: nowrap;
	`;

	const Episodes = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
	`;

	return (
		<>
			<Header />
			<Main>
				<Spacer margin={4} />
				<Heading size={18}>{titleData.title_english}</Heading>
				<MainBox style={{display: 'flex',}}>
					<ImageBox>
						<TitleImage src={titleData.image_url} />
					</ImageBox>
					<ContentBox>
						<div style={{display: 'flex'}}>
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
						</div>
						<Spacer margin={1} />
						<Heading size={12}>Synopsis</Heading>
						<div>
							{translate ? 
								<Paragraph>{translateData?.translatedText}</Paragraph>
								:
								<Paragraph>{titleData.synopsis}</Paragraph>
							}			
							<ButtonText onClick={() => translateHandler(titleData.synopsis)}>Translate</ButtonText>
							<Spacer margin={1} />
							<Recommendation>
								{recommendationsData.recommendations?.map(recommendation => {
									return (
										<div key={recommendation.mal_id}>
											<Link to={`/${recommendation.mal_id}`}>
												<Image src={recommendation.image_url} />
											</Link>
										</div>
									);
								})}
							</Recommendation>
							<Spacer margin={1} />
							<Episodes>
								{episodesData.episodes?.map(episode => {
									return (
										<Paper key={episode.episode_id} elevation={0} style={{margin: '1px'}}>
											{episode.episode_id + ' '}
											<a href={episode.forum_url}>{episode.title}</a>
										</Paper>
									);
								})}
							</Episodes>
							<Spacer margin={1} />
							<Paragraph>{titleData.background}</Paragraph>
							<Spacer margin={1} />
							{reviewsData.reviews?.map(review => {
								return (
									<Paper key={review.date} elevation={0}>
										<Heading size={9}>{review.reviewer.username}</Heading>
										<Paragraph>{review.content}</Paragraph>
									</Paper>
								);
							})}
							{reviewsData.reviews?.length === 0 && 1 === reviewsPage ?
								null
								:
								<Paginator page={reviewsPage} onClickPageHandler={onClickPageHandler} />
							}
						</div>
					</ContentBox>
				</MainBox>
			</Main>
		</>
	);
}