import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Home from './Pages/Home';
import Game from './components/tic-tac-toe/Game'
import Board from './components/snake-game/Board'
import Board2 from './components/2048/Board'

  const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tic-tac-toe" component={Game} />
            <Route exact path="/snake-game" component={Board} />
            <Route exact path="/2048" component={Board2} />
        </Switch>
    </Router>
    );
  }

  export default Routes;