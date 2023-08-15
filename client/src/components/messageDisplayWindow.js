import { Container, Paper } from "@mui/material";
import ChatMessage from "./chatMessage";

export default function MessageDisplayWindow() {
  return (

    <Container disableGutters >
      <Paper className="chatWindow" elevation={3} sx={{ minHeight: 300, pl: 1, pr: 1, pt: 1, pb: 2 }}>
        <ChatMessage text={"tHIS IS A NEW MESSAGE"} type={'chatPrompt'} />
      </Paper>
    </Container>
  );
}
