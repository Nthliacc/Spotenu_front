import React from "react";
import {Router} from "./components/Router/router";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import styled from 'styled-components';
import teemu from './components/images/teemu.jpg';

const meuTema = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: "#044704"
    },
    secondary: {
      main: "#259311"
    },
    thirty: {
      main: "#040e04"
    }
  }
});
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url(${teemu});
  background-position: center;
`;

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <AppContainer>
        <Router />
      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
