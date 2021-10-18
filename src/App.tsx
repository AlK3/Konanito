import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { TopListPage } from './pages/TopListPage';
import { TitlePage } from './pages/TitlePage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';

export const App: React.FC = () => {
  
  return (
    <Router>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/top' component={TopListPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/:titleId' component={TitlePage} />
          <Redirect to='/top' />
        </Switch>
    </Router>
  );
}
