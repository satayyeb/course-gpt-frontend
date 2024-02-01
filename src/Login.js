import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // login logic
    console.log('Login button clicked!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Username or Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
              Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
