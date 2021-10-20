import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchItem, TopListItem } from '../../store/reducers/dataReducer';

import { List } from './List';

const dataTopList: TopListItem[] = [
  {
    mal_id: 5114,
    rank: 1,
    title: "Fullmetal Alchemist: Brotherhood",
    url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
    image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
    type: "TV",
    episodes: 64,
    start_date: "Apr 2009",
    end_date: "Jul 2010",
    members: 2649743,
    score: 9.16
  },
  {
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
  },
];

const dataSearch: SearchItem[]  = [
  {
    mal_id: 10087,
    url: "https://myanimelist.net/anime/10087/Fate_Zero",
    image_url: "https://cdn.myanimelist.net/images/anime/2/73249.jpg?s=0ddd3d84549e11eda144df33626f97ae",
    title: "Fate/Zero",
    airing: false,
    synopsis: "With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confide...",
    type: "TV",
    episodes: 13,
    score: 8.31,
    start_date: "2011-10-02T00:00:00+00:00",
    end_date: "2011-12-25T00:00:00+00:00",
    members: 1259161,
    rated: "R"
  },
  {
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
  },
];

describe('List component', () => {
  it('List render with top list data', () => {
    render(<BrowserRouter><List items={dataTopList} /></BrowserRouter>);
  });
  it('List render with search data', () => {
    render(<BrowserRouter><List items={dataSearch} /></BrowserRouter>);
  });
  it('List render without data', () => {
    render(<List />);
  });
});