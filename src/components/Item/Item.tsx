import React from 'react';
import { StyledItem } from './Item.styles';
import { TopListItem } from '../../store/dataReducer';
import { Paragraph } from '../Paragraph/Paragraph';
import { Rating } from '@material-ui/core';

interface IItemProps {
  item: TopListItem;
}

export const Item: React.FC<IItemProps> = ({item}) => {
  
	return (
		<StyledItem to={`/${item.mal_id}`}>
			{item.rank && <Paragraph>{item.rank}</Paragraph>}
			<img src={item.image_url} style={{width: '8rem', padding: '.4rem'}} />
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