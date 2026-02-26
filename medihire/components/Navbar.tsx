"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent", color: "black" }}
    >
      <Toolbar sx={{ px:{ xs: 2, sm: 4, md: 20 }, display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "primary.main" }}
        >
          MediHire
        </Typography>

        {/* Right Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <SmartphoneIcon sx={{ color: "rgb(58,58,58)" }} />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary",
              color: "rgb(255, 255, 255)",
              borderRadius: 2,
              px: 2,
              py: 1,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Login / Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
