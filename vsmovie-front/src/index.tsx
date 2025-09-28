import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme1 } from 'styles/theme';
import { GlobalStyles } from 'styles/globalStyles';
import { Navbar } from 'components/navBar/navInd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}>
      <GlobalStyles/>
      <Navbar/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals(console.log)