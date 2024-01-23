import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './userContext';
import App from './App';
import { ThemeProvider } from './ThemeContext';

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

