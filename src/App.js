import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Header from "./components/Topbar/Header"

const theme = createMuiTheme({
  palette: {
    primary: {
      main : "#005D7C",
      light: "#007B95",
      lighter: "#70B9CA",
      contrastText: "#ffffff"
    },
    secondary : {
      main: "#97999C",
      light : "#F5F5F5"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Header />
    </ThemeProvider>
  );
}

export default App;
