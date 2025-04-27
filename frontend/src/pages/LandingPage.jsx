import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

// Styled Components

// Overall Page Wrapper
const PageWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e0f2f1',
  minHeight: '100vh',
}));

// Top Navbar
const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#00796b',
}));

// Navbar Buttons
const NavButton = styled(Button)(({ theme }) => ({
  marginRight: '1rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#004d40',
  },
}));

// Welcome Text Bar
const TextBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#004d40',
  padding: '1rem 0',
  textAlign: 'center',
}));

const TextBarText = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '2rem',
  fontWeight: 'bold',
}));

// Cards Container
const CardsContainer = styled(Box)(({ theme }) => ({
  padding: '4rem 2rem',
}));

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  borderRadius: '1rem',
}));

// Banner Section
const BannerSection = styled(Box)(({ theme }) => ({
  padding: '4rem 2rem',
  textAlign: 'center',
  marginTop: '3rem',
}));

// Heading of Banner
const BannerHeading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#004d40',
  marginBottom: '3rem',
}));

// Icon Wrapper
const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  color: '#00796b',
  marginBottom: '1rem',
}));

// Feature Title
const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#00796b',
}));

// Feature Description
const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#555',
  marginTop: '0.5rem',
}));

// Kanban Description
const KanbanDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: '#333',
  textAlign: 'center',
  marginTop: '3rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

// Main LandingPage Component
function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
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

      {/* Welcome Text Bar */}
      <TextBar>
        <TextBarText>Welcome to Task Board</TextBarText>
      </TextBar>

      {/* Cards Section */}
      <CardsContainer>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image="/images/nav1.jpeg" 
                alt="Navigation 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Plan Your Tasks
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Organize your daily work and projects visually.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image="/images/nav2.jpeg" 
                alt="Navigation 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Track Your Progress
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monitor task statuses and stay updated easily.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image="/images/nav3.jpeg" // 👈 nav3 image
                alt="Navigation 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Collaborate with Teams
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Assign, share, and complete tasks together.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </CardsContainer>

      {/* Kanban Board Description */}
      <KanbanDescription>
        Our powerful Kanban Board system helps you manage tasks by moving cards across columns representing task stages. From "To-Do" to "In Progress" to "Done," keep everything under control visually and intuitively.
      </KanbanDescription>

      {/* Banner Section */}
      <BannerSection>
        <BannerHeading>
          Trusted by 100,000+ Users and Companies
        </BannerHeading>

        {/* Feature Icons */}
        <Grid container spacing={4} justifyContent="center">
          {/* Feature 1 */}
          <Grid item xs={12} sm={4}>
            <IconWrapper>
              <SpeedIcon fontSize="inherit" />
            </IconWrapper>
            <FeatureTitle>Fast Performance</FeatureTitle>
            <FeatureDescription>
              Speedy task management with smooth user experience.
            </FeatureDescription>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} sm={4}>
            <IconWrapper>
              <SecurityIcon fontSize="inherit" />
            </IconWrapper>
            <FeatureTitle>Secure Data</FeatureTitle>
            <FeatureDescription>
              Your data is encrypted and protected with the best security practices.
            </FeatureDescription>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} sm={4}>
            <IconWrapper>
              <GroupWorkIcon fontSize="inherit" />
            </IconWrapper>
            <FeatureTitle>Easy Collaboration</FeatureTitle>
            <FeatureDescription>
              Share tasks and work together with your team easily and efficiently.
            </FeatureDescription>
          </Grid>
        </Grid>
      </BannerSection>
    </PageWrapper>
  );
}

export default LandingPage;
