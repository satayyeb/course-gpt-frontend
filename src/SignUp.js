import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  // State for form values
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const username = formData.username;
  const email = formData.email;
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  // Update the form data when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(password, confirmPassword);
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post("/signup", {
        username,
        email,
        password,
      });
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
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
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
