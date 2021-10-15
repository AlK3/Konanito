import { Skeleton } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../../enums';
import { loadTopData } from '../../store/loadData';
import { RootState } from '../../store/store';
import { Item } from '../Item/Item';

export const List: React.FC = () => {
	const dispatch = useDispatch();
  const topPage = useSelector((state: RootState) => state.page.topPage);
	const topData = useSelector((state: RootState) => state.data.topData);
  
  useEffect(() => {
    dispatch(loadTopData(topPage));
  }, []);

	return (
		<>
			{topData.top?
				topData.top.map(item => {
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