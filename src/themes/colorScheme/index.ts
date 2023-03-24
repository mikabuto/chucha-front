import { createTheme, ThemeOptions } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

export const colorTheme = createTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#E76F51",
    },
    background: {
      paper: "#333333",
      default: "#1e1e1e",
    },
    // background: {
    //   default: "#264653",
    //   paper: "FFF",
    // },
    // primary: {
    //   main: "#264653",
    //   contrastText: "#FFF",
    // },
    // secondary: {
    //   main: "#2A9D8F",
    //   contrastText: "#000",
    // },
    // error: {
    //   main: "#E76F51",
    // },
    // warning: {
    //   main: "#E9C46A",
    //   // main: '#F4A261',
    // },
    // info: PaletteColorOptions,
    // success: PaletteColorOptions,
  },
});
