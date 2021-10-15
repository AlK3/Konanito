import React from 'react';
import { Main } from '../components/Main/Main';
import { Heading } from '../components/Heading/Heading';
import { Header } from '../components/Header/Header';
import { Spacer } from '../components/Spacer/Spacer.styles';
import { Autocomplete, Grid, TextField } from '@material-ui/core';
import { ButtonContained } from '../components/Button/Button.styles';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchData } from '../store/loadData';
import { RootState } from '../store/store';
import { List } from '../components/List/List';

export const SearchPage: React.FC = () => {
	const dispatch = useDispatch();
	const searchData = useSelector((state: RootState) => state.data.searchData);
	
	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		
		const target = event.target as typeof event.target & {
			title: { value: string };
			page: { value: number };
			genre: { value: string };
			type: { value: string };
			status: { value: string };
			sort: { value: string };
			rated: { value: string };
		};

		if (target.title.value.trim()) {
			let request = `q=${target.title.value}`;

			if (target.page.value)
				request += `page=${target.page.value}`;
			if (target.genre.value.trim())
				request += `genre=${target.genre.value}`;
			if (target.type.value.trim())
				request += `type=${target.type.value}`;
			if (target.status.value.trim())
				request += `status=${target.status.value}`;
			if (target.sort.value.trim())
				request += `sort=${target.sort.value}`;
			if (target.rated.value.trim())
				request += `rated=${target.rated.value}`;

			dispatch(loadSearchData(request));
		}
	}

	const type = [
		{ label: 'tv' },
		{ label: 'ova' },
		{ label: 'movie' },
		{ label: 'special' },
		{ label: 'ona' },
		{ label: 'music' },
	];

	const status = [
		{ label: 'airing' },
		{ label: 'completed' },
	];

	const sort = [
		{ label: 'ascending' },
		{ label: 'descending' },
	];

	const rated = [
		{ label: 'g' },
		{ label: 'pg' },
		{ label: 'pg13' },
		{ label: 'r17' },
		{ label: 'r' },
		{ label: 'rx' },
	];

	const genre = [
		{ label: 'Action' },
		{ label: 'Adventure' },
		{ label: 'Cars' },
		{ label: 'Comedy' },
		{ label: 'Avante Garde' },
		{ label: 'Demons' },
		{ label: 'Mystery' },
		{ label: 'Drama' },
		{ label: 'Ecchi' },
		{ label: 'Fantasy' },
		{ label: 'Game' },
		{ label: 'Hentai' },
		{ label: 'Historical' },
		{ label: 'Horror' },
		{ label: 'Kids' },
		{ label: 'Martial Arts' },
		{ label: 'Mecha' },
		{ label: 'Music' },
		{ label: 'Parody' },
		{ label: 'Samurai' },
		{ label: 'Romance' },
		{ label: 'School' },
		{ label: 'Sci Fi' },
		{ label: 'Shoujo' },
		{ label: 'Girls Love' },
		{ label: 'Shounen' },
		{ label: 'Boys Love' },
		{ label: 'Space' },
		{ label: 'Sports' },
		{ label: 'Super Power' },
		{ label: 'Vampire' },
		{ label: 'Harem' },
		{ label: 'Slice Of Life' },
		{ label: 'Supernatural' },
		{ label: 'Military' },
		{ label: 'Police' },
		{ label: 'Psychological' },
		{ label: 'Suspense' },
		{ label: 'Seinen' },
		{ label: 'Josei' },
		{ label: 'Award Winning' },
		{ label: 'Gourmet' },
		{ label: 'Work Life' },
		{ label: 'Erotica' },
	];

	return (
		<>
			<Header />
			<Main>
				<Spacer />
				<Heading size={18}>Search</Heading>
				<form onSubmit={submitHandler}>
					<Grid container spacing={2} alignItems='center' justifyContent='center' >
						<Grid item>
							<TextField
								sx={{ width: 250, margin: '.5rem' }}
								name='title'
								label='Search title'
								variant='outlined'
								size='small'
								/>
						</Grid>

						<Grid item>
							<TextField
								sx={{ width: 250, margin: '.5rem' }}
								name="page"
								label="Page"
								type="number"
								size='small'
								/>
						</Grid>

						<Grid item>
							<Autocomplete
								disablePortal
								options={genre}
								sx={{ width: 250, margin: '.5rem' }}
								renderInput={(params) => <TextField {...params} name='genre' size='small' label="Genre" />}
								/>
						</Grid>

						<Grid item>
							<Autocomplete
								disablePortal
								options={type}
								sx={{ width: 250, margin: '.5rem' }}
								renderInput={(params) => <TextField {...params} name='type' size='small' label="Type" />}
								/>
						</Grid>

						<Grid item>
							<Autocomplete
								disablePortal
								options={status}
								sx={{ width: 250, margin: '.5rem' }}
								renderInput={(params) => <TextField {...params} name='status' size='small' label="Status" />}
								/>
						</Grid>

						<Grid item>
							<Autocomplete
								disablePortal
								options={sort}
								sx={{ width: 250, margin: '.5rem' }}
								renderInput={(params) => <TextField {...params} name='sort' size='small' label="Sort" />}
								/>
						</Grid>

						<Grid item>
							<Autocomplete
								disablePortal
								options={rated}
								sx={{ width: 250, margin: '.5rem' }}
								renderInput={(params) => <TextField {...params} name='rated' size='small' label="Rated" />}
								/>
						</Grid>

						<Grid item>
							<ButtonContained sx={{ width: 250 }} type='submit'>Seacrh</ButtonContained>
						</Grid>
					</Grid>
				</form>
				<List items={searchData.results} />
			</Main>
		</>
	);
}