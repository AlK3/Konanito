import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../Item/Item';
import { loadTopData } from '../../store/loadData';
import { RootState } from '../../store/store';

export const List: React.FC = () => {
	const dispatch = useDispatch();
  const topPage = useSelector((state: RootState) => state.page.topPage);
	const topData = useSelector((state: RootState) => state.data.topData);
  
  useEffect(() => {
    dispatch(loadTopData(topPage));
  }, []);

	return (
		<>
			{topData.top?.map(item => {
        return <Item item={item} />;
      })}
		</>
	);
}