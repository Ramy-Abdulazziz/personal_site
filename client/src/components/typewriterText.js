import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypewriterText({ text }) {
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [cursor]);

  useEffect(() => {
    if (charIndex >= text.length) {
      setCursor(false);
      return;
    }

    const textTimeout = setTimeout(() => {
      setCharIndex((prev) => ++prev);
      setDisplayText(text.substring(0, charIndex + 1));
    }, 100);

    return () => clearTimeout(textTimeout);
  }, [charIndex, cursor]);

  return (
    <Typography
      className="welcomeText"
      variant="h2"
      sx={{ textAlign: "center" }}
    >
      {`${displayText}${cursor ? "|" : ""}`}{" "}
    </Typography>
  );
}
