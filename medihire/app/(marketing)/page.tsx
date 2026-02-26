"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Box>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Connecting Hospitals with Skilled Medical Professionals
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            MediHire helps hospitals hire qualified staff quickly and
            efficiently.
          </Typography>

          {/* Search Field */}
          <Box
            // border={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <TextField
              // variant="standard"
              placeholder="Search jobs"
              fullWidth
              sx={{
                maxWidth: 500,
                bgcolor: "background.paper",
                borderRadius: 5,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "10px",
                        "&:hover": {
                          bgcolor: "primary.dark", 
                        },
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/jobs"
            >
              Find Jobs
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/enterprise/dashboard"
            >
              Post a Job
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ================= FEATURES SECTION ================= */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {[
            {
              title: "Verified Hospitals",
              desc: "Only trusted and verified healthcare institutions.",
            },
            {
              title: "Skilled Professionals",
              desc: "Find experienced doctors, nurses, and medical staff.",
            },
            {
              title: "Fast Hiring",
              desc: "Streamlined hiring process designed for hospitals.",
            },
          ].map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
