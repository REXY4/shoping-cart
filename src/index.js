import React from 'react';
import ReactDOM from 'react-dom/client';
//css
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistore, store} from "./redux/stores";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
     <App/>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);
