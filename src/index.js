import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/homepage';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Homepage/>
  </ThemeProvider>,
  document.getElementById('root')
);
