import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#00796b', // MUI teal color
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginRight: '1rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#004d40', // Darker teal on hover
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '5rem 0',
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#333', // Dark text for better readability
}));

const LandingImage = styled('img')({
  width: '80%', // Adjust size of the image
  maxWidth: '600px',
  marginTop: '2rem',
  borderRadius: '8px', // Optional styling for rounded corners
});

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <Navbar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Task Board
          </Typography>
          <NavButton onClick={() => navigate('/login')}>Sign In</NavButton>
          <NavButton onClick={() => navigate('/register')}>Sign Up</NavButton>
        </Toolbar>
      </Navbar>

      {/* Content */}
      <ContentContainer>
        <WelcomeText>
          Welcome to Task Board
        </WelcomeText>
        <Typography variant="body1" style={{ fontSize: '1.2rem', color: '#666' }}>
          Your tasks, organized in one place. Sign up or sign in to start managing your tasks.
        </Typography>

        {/* Image */}
        <LandingImage src="/images/nav.JPG" alt="Task Board" />
      </ContentContainer>
    </div>
  );
}

export default LandingPage;
