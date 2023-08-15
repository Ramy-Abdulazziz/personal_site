import {
  Container,
  Paper,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function MessageInputWindow() {
  const validationSchema = Yup.object().shape({
    userPrompt: Yup.string()
      .max(150, "Maximum 150 characters")
      .required("Please enter a prompt"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = () => {};
  return (
    <Container disableGutters sx={{ mt: 2, pb: 2 }}>
      <Box>
        <Stack direction={"row"}>
          <TextField id="user-input" className="messageInputWindow" />
          <Button variant="contained" sx={{ borderRadius: 5, ml: 2 }}>
            Send
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
