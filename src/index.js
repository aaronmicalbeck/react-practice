import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import './assets/scss/base.scss';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();