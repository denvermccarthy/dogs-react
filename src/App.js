import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './view/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import EditPage from './view/Edit/EditPage';
import NewPage from './view/New/NewPage';
import Auth from './view/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/auth'}>
            <Auth />
          </Route>
          <Route exact path={'/dogs/new'}>
            <NewPage />
          </Route>
          <Route exact path={'/dogs/:id'}>
            <DogDetail />
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
