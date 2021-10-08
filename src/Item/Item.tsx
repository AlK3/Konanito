import React from 'react';
import { TopListItem } from '../store/dataReducer';
import { StyledItem } from './Item.styles';
import { Typography } from '@material-ui/core';

interface IItemProps {
  item: TopListItem;
}

export const Item: React.FC<IItemProps> = ({item}) => {
  const url = item.url.replace('https://myanimelist.net/', '');
  const link = url.split('/');

	return (
		<StyledItem to={`/${link[1]}`}>
			<Typography>{item.rank}</Typography>
			<img src={item.image_url} width='80rem' />
      <div>
        <Typography>
          {item.title}
        </Typography>
        <Typography>
          {item.type + ' ' + item.episodes + ' episodes'}
        </Typography>
      </div>
		</StyledItem>
	);
}