import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './view/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import EditPage from './view/Edit/EditPage';
import NewPage from './view/New/NewPage';
import Auth from './view/Auth/Auth';
import { getUser } from './services/users';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header {...{ user, setUser }} />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/auth'}>
            <Auth {...{ setUser }} />
          </Route>
          <Route exact path={'/dogs/new'}>
            <NewPage />
          </Route>
          <Route exact path={'/dogs/:id'}>
            <DogDetail {...{ user }} />
          </Route>
          <Route exact path={'/dogs/:id/edit'}>
            <EditPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
