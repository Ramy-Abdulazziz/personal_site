import "./App.css";
import Toolbar from "./components/toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const validateTheme = (userTheme) => {
  return userTheme === "dark" ? darkTheme : lightTheme;
};


function App() {
  const [setUserTheme, userTheme] = useState("light");

  return (
    <ThemeProvider theme={validateTheme(userTheme)}>
      <Toolbar setUserTheme={setUserTheme} userTheme={userTheme} />
    </ThemeProvider>
  );
}

export default App;
