import { Container, Paper } from "@mui/material";
import "./App.css";
import NavBar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ChatWindow from "./components/chatWindow";
import LoginModal from "./components/loginModal";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;

  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });

  const [userTheme, setUserTheme] = useState("light");

  const validateTheme = (userTheme) => {
    return userTheme === "dark" ? darkTheme : lightTheme;
  };

  return (
    <ThemeProvider theme={validateTheme(userTheme)}>
      <CssBaseline />
      <Router>
        <NavBar setUserTheme={setUserTheme} userTheme={userTheme} />
        <Container disableGutters sx={{ mt: 5 }}>
          <Routes>
            <Route path="/" element={<LoginModal />} />
            <Route path="/chat" element={<ChatWindow />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
