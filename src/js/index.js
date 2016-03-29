// Javascript Entry Point

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


ReactDOM.render(
  <App className="my-app" secret="React is cool"/>
  , document.querySelector('.app')
);
