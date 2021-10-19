import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './assets/styles/globalStyles';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
