import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <UserContainer />
        <Board2 />
        <Board />
        <Game /> */}
        <App />
      </div>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

