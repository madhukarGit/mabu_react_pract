import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const arcBlue = "##fbfcfc";
const Theme = createTheme({
  palette: {
    primary: {
      main: `${arcBlue}`,
      light: "#FEFFFF",
    },
    secondary: {
      main: purple[500],
      light: "#3AAFA9",
    },
  },
});
export default Theme;
