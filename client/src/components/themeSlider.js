import { Switch } from "@mui/material";

const changeTheme = (setUserTheme, userTheme) => {
  if (userTheme === "light") {
    setUserTheme("light");
  } else {
    setUserTheme("dark");
  }
};

export default function ThemeSlider({ setUserTheme, userTheme }) {
  return (
    <Switch
      onClick={() => changeTheme(setUserTheme, userTheme)}
      className="themeSwitch"
    ></Switch>
  );
}
