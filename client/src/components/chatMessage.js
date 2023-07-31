import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ChatMessage() {
  return (
    <Container disableGutters>
      <Box>
        <Paper elevation={5} sx={{ pl: 2, pr: 2, pt: 1, pb: 1 }}>
          <Stack direction={"row"} spacing={3}>
            <AccountCircleIcon />
            <Box sx={{width:450}}>
              <Typography variant="p">This is a chat message</Typography>
            </Box>
            <Box>
                <Typography variant='p'>
                    12:24:36 pm
                </Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}
