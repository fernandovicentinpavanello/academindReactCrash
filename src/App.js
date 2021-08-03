import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <>
      <MainNavigation />    
      <Switch>
        <Route path='/' exact component={AllMeetupsPage} />
        <Route path='/new-meetups' component={NewMeetupsPage} />
        <Route path='/favorites' component={FavoritesPage} />
      </Switch>
    </>
  );
}

export default App;
