import { Container, Paper } from "@mui/material";
import MessageDisplayWindow from "./messageDisplayWindow";
import MessageInputWindow from "./messageInputWindow";

export default function ChatWindow() {
  return (
    <Container disableGutters sx={{ mt: 5 }}>
      <Paper
        elevation={2}
        sx={{
          minHeight: 500,
          pt: 5,
          pl: 5,
          pr: 5,
          ml: 5,
          mr: 5,
          borderRadius: 3,
        }}
      >
        <MessageDisplayWindow />
        <MessageInputWindow/>
      </Paper>
    </Container>
  );
}
