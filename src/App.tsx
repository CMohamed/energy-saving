import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
}

export default App;
