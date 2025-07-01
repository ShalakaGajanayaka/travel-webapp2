import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { TrendingUp, Public, Groups } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StatsContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(255,255,255,0.8)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  margin: theme.spacing(4, 0),
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&:hover': {
    transform: 'translateY(-5px)',
    transition: 'transform 0.3s ease',
  }
}));

const IconContainer = styled(Box)(({ theme, bgcolor }) => ({
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  backgroundColor: bgcolor,
  color: 'white',
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
  mx: 'auto',
}));

export default function Introduction() {
  const stats = [
    { icon: <Public />, value: '100+', label: 'Countries', color: 'primary' },
    { icon: <Groups />, value: '1000s', label: 'Experiences', color: 'secondary' },
    { icon: <TrendingUp />, value: '50+', label: 'Years Experience', color: 'success' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(135deg, #1976d2, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          1000s of experiences, over 100 countries
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: 700,
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: '1.2rem',
            mb: 2,
          }}
        >
          Small group adventures that bring you the moments only Intrepid can offer.
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontStyle: 'italic',
            color: 'primary.main',
            fontSize: '1.1rem',
            fontWeight: 500,
          }}
        >
          Only here. Only now. Only Intrepid.
        </Typography>
      </Box>

      {/* Stats Section */}
      <StatsContainer>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <IconContainer
                bgcolor={(theme) =>
                  stat.color === 'primary'
                    ? theme.palette.primary.main
                    : stat.color === 'secondary'
                    ? theme.palette.secondary.main
                    : theme.palette.success.main
                }
              >
                {stat.icon}
              </IconContainer>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </StatItem>
          ))}
        </Box>
      </StatsContainer>
    </Container>
  );
}