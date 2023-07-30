import { Switch } from "@mui/material";

export default function ThemeSlider({ setUserTheme, userTheme }) {
  const changeTheme = () => {
    if (userTheme === "light") {
      setUserTheme("dark");
    } else {
      setUserTheme("light");
    }
  };
  return <Switch onClick={changeTheme} className="themeSwitch"></Switch>;
}
