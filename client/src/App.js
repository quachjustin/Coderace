import React from 'react';
//usually u pullout browser-router and browser router as router but we use router because we will use history object outside from where we usually use it
import { Router,Route,Switch } from 'react-router-dom';
import history from './history';
import GameMenu from './components/GameMenu';


function App() {
  return (
    <Router history = { history }>
      <Switch>
        <Route exact path = "/" component = {GameMenu}/>
      </Switch>
    </Router>
  );
}

export default App;

//installing react-router-dom -> error!! cannot open server