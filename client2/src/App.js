import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography, Container } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* CSS reset */}
      <Container>
        <Typography variant="h1" component="h2" gutterBottom>
          Hello MUI!
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;