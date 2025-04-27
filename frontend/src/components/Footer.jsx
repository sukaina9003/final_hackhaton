import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#004d40',
        color: 'white',
        textAlign: 'center',
        py: 4,
        mt: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Subscribe to our Newsletter
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ backgroundColor: 'white', borderRadius: 1, width: 300 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubscribe}>
          Subscribe
        </Button>
      </Box>

      <Typography variant="body2">
        © {new Date().getFullYear()} MyTaskBoard. All rights reserved.
      </Typography>
    </Box>
  );
}
