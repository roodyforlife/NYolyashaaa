import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DateStore from './store/DateStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    date: new DateStore()
  }}>
      <App />
  </Context.Provider>
);