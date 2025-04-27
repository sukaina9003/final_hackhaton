import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        formData
      );
      console.log('User registered successfully', response.data);
      alert('Registration successful! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        console.error('Backend returned error:', error.response.data);
        alert(`Registration failed: ${error.response.data.message || 'Bad Request'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error setting up request:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card sx={{ width: '100%', padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
              Let's Create Your Account
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Register
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegisterForm;
