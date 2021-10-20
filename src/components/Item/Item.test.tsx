import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchItem, TopListItem } from '../../store/reducers/dataReducer';

import { Item } from './Item';

const itemTopList: TopListItem = {
  mal_id: 28977,
  rank: 2,
  title: "Gintama°",
  url: "https://myanimelist.net/anime/28977/Gintama°",
  image_url: "https://cdn.myanimelist.net/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209",
  type: "TV",
  episodes: 51,
  start_date: "Apr 2015",
  end_date: "Mar 2016",
  members: 478506,
  score: 9.09
};

const itemSearch: SearchItem  = {
  mal_id: 356,
  url: "https://myanimelist.net/anime/356/Fate_stay_night",
  image_url: "https://cdn.myanimelist.net/images/anime/4/30327.jpg?s=83d26b95fcc7fc4297332ebc4497e91a",
  title: "Fate/stay night",
  airing: false,
  synopsis: "After a mysterious inferno kills his family, Shirou is saved and adopted by Kiritsugu Emiya, who teaches him the ways of magic and justice. One night, years after Kiritsugu's death, Shirou is cleaning...",
  type: "TV",
  episodes: 24,
  score: 7.3,
  start_date: "2006-01-07T00:00:00+00:00",
  end_date: "2006-06-17T00:00:00+00:00",
  members: 821703,
  rated: "R"
};


describe('Item component', () => {
  it('Item render with top list item', () => {
    render(<BrowserRouter><Item item={itemTopList} /></BrowserRouter>);
  });
  it('Item render with search item', () => {
    render(<BrowserRouter><Item item={itemSearch} /></BrowserRouter>);
  });
  it('Item render without data', () => {
    render(<BrowserRouter><Item /></BrowserRouter>);
  });
});