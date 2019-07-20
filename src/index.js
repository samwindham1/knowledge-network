import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';

import App from './app/app.js';
import './style/index.css';
import './style/imports.css';

ReactDOM.render(<App />, document.getElementById('app'))
