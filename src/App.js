import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './view/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogForm from './components/DogForm/DogForm';
import EditPage from './view/Edit/EditPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/dogs/new'}>
            <div>new dog</div>
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
