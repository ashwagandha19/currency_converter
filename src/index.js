import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { countryApi } from './features/countryApi';
import { currencyApi } from './features/currencyApi';
import CurrencyProvider from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      countryApi.middleware,
      currencyApi.middleware,
    ]
  ),
});

root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CurrencyProvider>

  </React.StrictMode>
);