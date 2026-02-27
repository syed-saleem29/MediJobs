// app/theme.ts

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#00A143",
      light: "#E6FAF3",
      dark: "#007A32",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#0EA5E9",
    },

    background: {
      default: "radial-gradient(circle at 10% 20%, rgba(0, 161, 67, 0.03) 0%, rgba(255, 255, 255, 1) 90%)",
      paper: "#ffffff",
    },

    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },

    divider: "#e2e8f0",
  },

  shape: {
    borderRadius: 14,
  },

  typography: {
    fontFamily: `"Inter", "Plus Jakarta Sans", sans-serif`,
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme;