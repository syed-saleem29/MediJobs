import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A143',   
    //   #219999// Your green
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default theme