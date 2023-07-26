import React from 'react';
//usually u pullout browser-router and browser router as router but we use router because we will use history object outside from where we usually use it
import { Router,Route, Routes } from 'react-router-dom';
import history from './history';
import GameMenu from './components/GameMenu';


function App() {
  return (
    <Router history = { history }>
      <Routes>
        <Route exact path = "/" component = {GameMenu}/>
      </Routes>
    </Router>
  );
}

export default App;

//installing react-router-dom -> error!! cannot open server