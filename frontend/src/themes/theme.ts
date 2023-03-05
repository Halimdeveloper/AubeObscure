import { darkScrollbar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeOptions } from "@mui/material/styles";

/**
 * Thème créé grâce au MUI generator : https://zenoo.github.io/mui-theme-creator/
 */

export const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar({
            track: "#1a1a1a",
            thumb: "#3e3e47",
            active: "#2E2E33",
          }),
          //scrollbarWidth for Firefox
          scrollbarWidth: "thin",
        }
      },
    }
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
    primary: {
      main: "#ba6c1a",
      dark: "#8c3b00",
      light: "#ff9c4d",
    },
    secondary: {
      main: "#bf7e1a",
      dark: "#8f4e00",
      light: "#ffc04d",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "Oswald",
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.16,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: "Open Sans",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
      fontFamily: "Open Sans",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 500,
      letterSpacing: "0.08333em",
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
  },
};
