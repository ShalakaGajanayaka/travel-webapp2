import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import Blog from '../blog/Blog';
import Buttons from '../../components/dashboard/Buttons';
import Incentives from '../../components/dashboard/Incentives';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const DashboardContainer = styled(Box)({
  minHeight: '100vh',
  background: '#fafafa',
});

const HeaderSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fafafa 0%,rgba(255,255,255,0.95) 100%)',
  backgroundSize: '100% 100%',
  borderBottom: '1px solid #e0e0e0',
  animation: `${gradientShift} 8s ease infinite`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
    animation: `${gradientShift} 6s ease infinite`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    animation: 'float 20s linear infinite',
    '@keyframes float': {
      '0%': { transform: 'translateX(-50px) translateY(-50px)' },
      '100%': { transform: 'translateX(0px) translateY(0px)' },
    }
  }
}));

export default function Dashboard() {
  return (
    <DashboardContainer>
      <HeaderSection>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ py: 2 }}>
            <Typography
              variant="h3"
              sx={{
                color: '#1565c0',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' },
                // mb: 1,
                // textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                textShadow: 'none'
              }}
            >
              Dashboard
            </Typography>
          </Box>
        </Container>
      </HeaderSection>




      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Buttons />
          <Incentives />
          <Blog />
        </Box>
      </Container>
    </DashboardContainer>
  );
}