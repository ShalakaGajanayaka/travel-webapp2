import React from 'react';
import { Box, Container, Typography, Button, Fab } from '@mui/material';
import { PlayArrow, ArrowForward } from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main}15 0%, 
    ${theme.palette.secondary.main}10 100%)`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  marginTop: '80px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blte6b6c155077638d9/64eff2a2a9c2c320799c5530/CJPH_2024.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: -1,
  }
}));

const FloatingIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  animation: `${float} 6s ease-in-out infinite`,
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  border: '1px solid rgba(255,255,255,0.3)',
}));

const GradientButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '15px 40px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 3s ease infinite`,
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1.1rem',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
  }
}));

export default function HomeBanner() {
  return (
    <HeroSection>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.1,
            }}
          >
            1000s of experiences
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 3,
              color: 'text.primary',
            }}
          >
            over 100 countries
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: 600,
              fontSize: '1.2rem',
              lineHeight: 1.6,
            }}
          >
            Small group adventures that bring you the moments only Intrepid can offer.
            <br />
            <Box component="em" sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Only here. Only now. Only Intrepid.
            </Box>
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mb: 4,
            }}
          >
            <GradientButton
              size="large"
              endIcon={<ArrowForward />}
              href="#trips"
            >
              Explore Adventures
            </GradientButton>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                borderRadius: '50px',
                px: 4,
                py: 2,
                borderColor: 'primary.main',
                color: 'primary.main',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Watch Story
            </Button>
          </Box>
        </Box>

        {/* Floating Elements */}
        {[
          { icon: '🎒', top: '20%', left: '70%', delay: '0s' },
          { icon: '🗺️', top: '40%', left: '80%', delay: '1s' },
          { icon: '📸', top: '60%', left: '75%', delay: '2s' },
          { icon: '🧭', top: '30%', left: '85%', delay: '1.5s' },
          { icon: '⛰️', top: '70%', left: '85%', delay: '0.5s' }
        ].map((item, index) => (
          <FloatingIcon
            key={index}
            sx={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {item.icon}
          </FloatingIcon>
        ))}
      </Container>
    </HeroSection>
  );
}