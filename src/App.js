import React from "react";
import Router from "./components/Router/router";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#071504"
    },
    secondary: {
      main: "#040d04"
    },
    error: {
      main: "#849404"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
        <Router />
    </MuiThemeProvider>
  );
}

export default App;
