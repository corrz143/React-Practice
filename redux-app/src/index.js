import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render} from 'react-dom';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import store from './redux/store';


render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

