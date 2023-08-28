import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById('root')
);
