import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={AllMeetupsPage} />
          <Route path="/new-meetups" component={NewMeetupsPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
