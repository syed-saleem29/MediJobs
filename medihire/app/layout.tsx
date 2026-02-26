"use client";

import { ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'remixicon/fonts/remixicon.css';
import theme from './theme'



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box component="main" flexGrow={1} p={3}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
