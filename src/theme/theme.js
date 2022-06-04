import { createTheme } from "@material-ui/core";
import "../font/dana.css"

let theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#35b851",
      main: "#35b851",
      dark: "#35b851",
      contrastText: "#fff",
    },
  },
  typography: {
      fontFamily:"dana", 
  },

  shape: {
      borderRadius: 30
  },
  
});

export {theme} ;