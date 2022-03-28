import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './view/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/dogs/:id'}>
            <DogDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
