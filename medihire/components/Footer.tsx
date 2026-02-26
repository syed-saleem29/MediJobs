'use client'

import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      textAlign="center"
      py={0.8}
      bgcolor="#929292"
    >
      <Typography variant="body2">
        © 2026 MediHire. All rights reserved.
      </Typography>
    </Box>
  )
}