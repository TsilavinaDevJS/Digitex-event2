import { createTheme } from "@mui/material";

// #FA03B5
const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#03EBFA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#17FA03",
    },
    background: {
      default: " #312A6B",
      paper: "linear-gradient(45deg,  #B33C84 10%, #27215F 90%)",
    },
    divider: "rgba(230,221,221,0.12)",
  },
  typography: {
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg,  #B33C84 30%, #27215F 90%)",
        border: 0,
        borderRadius: 30,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "black",
        height: 48,
        padding: "20px 35px",
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 40,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
};

export const theme = createTheme(themeOptions);
