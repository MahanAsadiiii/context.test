import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider,UserProvider } from './GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);

