import React from 'react';
import { StyledItem } from './Item.styles';
import { TopListItem } from '../../store/dataReducer';
import { Paragraph } from '../Paragraph/Paragraph';
import { Rating } from '@material-ui/core';

interface IItemProps {
  item: TopListItem;
}

export const Item: React.FC<IItemProps> = ({item}) => {
  const url = item.url.replace('https://myanimelist.net/', '');
  const link = url.split('/');

	return (
		<StyledItem to={`/${link[1]}`}>
			{item.rank && <Paragraph>{item.rank}</Paragraph>}
			<img src={item.image_url} width='80rem' />
      <div>
        <Paragraph>
          {item.title}
        </Paragraph>
        <Paragraph>
          {item.type + ' ' + item.episodes + ' episodes'}
        </Paragraph>
        <Rating name="no-value" value={item.score/2} />
      </div>
		</StyledItem>
	);
}