import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import WatchListPage from './WatchListPage';
import { logout } from './services/fetch-utils'; 

function App() {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <Router>
      <div>
        {
          currentUser &&
          <ul>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist">Watchlist</NavLink>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        }
        <Switch>
          <Route exact path="/">
            {
              currentUser
                ? <Redirect to="/search"/>
                : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route exact path="/search">
            {
              currentUser
                ? <SearchPage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/watchlist">
            {
              currentUser
                ? <WatchListPage />
                : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
