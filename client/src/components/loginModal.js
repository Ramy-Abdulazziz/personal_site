import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TypewriterText from "./typewriterText";
import { useNavigate } from "react-router";


export default function LoginModal() {
  const [welcomeText, setWelcomeText] = useState("Welcome, what is your name?");
  const navigate = useNavigate(); 

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(30, "Maximum 30 characters")
      .required("Please enter a user name to continue"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:8000/login", data).then((response) => {
        if (response.status === 200) {
          reset();
          setWelcomeText(`Welcome ${data.username}`);
          console.log("secure user session created");
          console.log(response);
          navigate('/chat')
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Box>
          <Stack direction={"column"} spacing={5}>
            <Container>
              <TypewriterText text={welcomeText} />
            </Container>
            <Stack direction={"row"} spacing={5}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={errors.username}
                    helperText={errors.username?.message}
                    className="usernameField"
                    variant="outlined"
                  />
                )}
              />
              <Button variant="contained" type="submit">
                Enter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </form>
    </Container>
  );
}
