"use client";

import { ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "remixicon/fonts/remixicon.css";
import theme from "./theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "radial-gradient(circle at 10% 20%, rgba(0, 161, 67, 0.1) 0%, rgba(255, 255, 255, 1) 90%)",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box component="main" flexGrow={1} >
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
