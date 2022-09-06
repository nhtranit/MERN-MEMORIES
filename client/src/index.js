import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import stores from './redux-stores/index.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
);
