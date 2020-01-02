import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Header from "./components/Topbar/Header"
import Intro from "./sections/Intro"
import Welcome from "./sections/Welcome"
import Services from "./sections/Services"
import PayrollLoans from "./sections/PayrollLoans"
import Compliance from "./sections/Compliance"
import FinancialKnowledge from "./sections/FinancialKnowledge"
import Courses from "./sections/Courses"
import CTA from "./sections/CTA"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#005D7C",
      light: "#007B95",
      lighter: "#70B9CA",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#97999C",
      light: "#F5F5F5"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Intro />
      <Welcome />
      <Services />
      <PayrollLoans />
      <Compliance />
      <FinancialKnowledge />
      <Courses />
      <CTA />
    </ThemeProvider>
  );
}

export default App;
