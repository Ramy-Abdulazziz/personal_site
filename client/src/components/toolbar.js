import { AppBar, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ThemeSlider from "./themeSlider";

export default function Toolbar({ setUserTheme, userTheme }) {
  return (
    <AppBar>
      <Container>
        <Stack Direction={"row"}>
          <Typography variant="h6" component="a" href="/" sx={{maxWidth:'20px'}}>
            Ramy Abdulazziz
          </Typography>
          <ThemeSlider setUserTheme={setUserTheme} userTheme={userTheme} />
        </Stack>
      </Container>
    </AppBar>
  );
}
