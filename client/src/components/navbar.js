import { AppBar, Container, Stack, Typography, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ThemeSlider from "./themeSlider";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";

export default function NavBar({ setUserTheme, userTheme }) {
  return (
    <AppBar position="static" sx={{}}>
      <Container disableGutters sx={{ mt: 2 }}>
        <Toolbar disableGutters>
          <Container disableGutters>
            <Stack direction={"row"}>
              <Box sx={{ mr: 2 }}>
                <DeviceHubIcon />
              </Box>
              <Typography variant="h6" component="p" href="/">
                Ramy Abdulazziz
              </Typography>
            </Stack>
          </Container>
          <ThemeSlider setUserTheme={setUserTheme} userTheme={userTheme} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
