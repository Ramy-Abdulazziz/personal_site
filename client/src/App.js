import { Container, Paper } from "@mui/material";
import "./App.css";
import NavBar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import { useState } from "react";

function App() {
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });

  const [userTheme, setUserTheme] = useState("light");

  const validateTheme = (userTheme) => {
    return userTheme === "dark" ? darkTheme : lightTheme;
  };

  return (
    <ThemeProvider theme={validateTheme(userTheme)}>
      <CssBaseline/>
      <NavBar setUserTheme={setUserTheme} userTheme={userTheme} />
      <Container disableGutters sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ minHeight: 500, pt: 10, pl: 5, pr: 5 }}>
          <Paper elevation={6} sx={{ pt: 10 }}>
            This is content
          </Paper>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
