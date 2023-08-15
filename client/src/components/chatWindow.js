import { Container, Paper } from "@mui/material";
import MessageDisplayWindow from "./messageDisplayWindow";
import MessageInputWindow from "./messageInputWindow";

export default function ChatWindow() {
  return (
    <Container disableGutters sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          minHeight: 500,
          pt: 2,
          pl: 2,
          pr: 2,
          ml: 2,
          mr: 2,
          borderRadius: 3,
        }}
      >
        <MessageDisplayWindow />
        <MessageInputWindow/>
      </Paper>
    </Container>
  );
}
