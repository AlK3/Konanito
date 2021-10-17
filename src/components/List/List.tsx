import React from 'react';
import { Skeleton } from '@material-ui/core';
import { Color } from '../../enums';
import { Item } from '../Item/Item';
import { TopListItem, SearchItem } from '../../store/dataReducer';

interface IListProps {
  items: TopListItem[] | SearchItem[];
}

export const List: React.FC<IListProps> = ({items}) => {

	return (
		<>
			{items ?
				items.map(item => {
        	return <Item item={item} />;
      	})
				:
				<>
					<Skeleton variant='rectangular'
										style={{background: Color.DARK, borderRadius: '10px', margin: '16px'}}
										height={120} />
					<Skeleton variant='rectangular'
										style={{background: Color.DARK, borderRadius: '10px', margin: '16px'}}
										height={120} />
					<Skeleton variant='rectangular'
										style={{background: Color.DARK, borderRadius: '10px', margin: '16px'}}
										height={120} />
				</>
		}
		</>
	);
}