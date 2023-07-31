import { Container, Paper } from "@mui/material";
import ChatMessage from "./chatMessage";

export default function MessageDisplayWindow() {
  return (
    <Container disableGutters>
      <Paper elevation={3} sx={{ minHeight: 300, pl: 2, pr: 2, pt: 2, pb: 2 }}>
        <ChatMessage />
      </Paper>
    </Container>
  );
}
