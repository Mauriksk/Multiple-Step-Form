import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
      primary: {
        //main:"#F0950E"
        main: red[500],
      },
      secondary: {
        main: purple[500],
      }
    },
  });