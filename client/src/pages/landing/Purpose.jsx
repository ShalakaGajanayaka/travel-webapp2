import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const PurposeSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}10 100%)`,
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(25,118,210,0.1) 0%, transparent 70%)',
    zIndex: 0,
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
  zIndex: 1,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(20px)',
  border: '3px solid rgba(255,255,255,0.3)',
  fontSize: '3rem',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  margin: '0 auto',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  maxWidth: 800,
  margin: '0 auto',
}));

export default function Purpose() {
  return (
    <PurposeSection id="introduction">
      <Container maxWidth="lg">
        <IconContainer>
          <StyledAvatar>
            🌍❤️
          </StyledAvatar>
        </IconContainer>

        <ContentBox>
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              mb: 3,
              fontSize: '1rem',
              fontWeight: 600,
              color: 'primary.main',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Small group travel that's good all over
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              mb: 4,
              lineHeight: 1.2,
              color: 'text.primary',
            }}
          >
            We're here to{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #1976d2, #9c27b0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'underline',
                textDecorationColor: '#1976d2',
              }}
            >
              do good
            </Box>
            {' '}by creating{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #9c27b0, #1976d2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'underline',
                textDecorationColor: '#9c27b0',
              }}
            >
              positive change
            </Box>
            {' '}through the joy of travel.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              lineHeight: 1.6,
            }}
          >
            Every journey we create is designed to leave a positive impact on both travelers and the communities they visit.
          </Typography>
        </ContentBox>
      </Container>
    </PurposeSection>
  );
}