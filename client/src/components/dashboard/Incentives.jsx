import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper
} from '@mui/material';
import {
  EventAvailableOutlined,
  RefreshOutlined,
  LocalShippingOutlined
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)({
  marginBottom: '3rem',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: theme.spacing(3),
  fontSize: '1.25rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '40px',
    height: '3px',
    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
    borderRadius: '2px',
  }
}));

const BenefitsCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  overflow: 'hidden',
}));

const BenefitItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(2.5),
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    background: 'linear-gradient(45deg, rgba(25,118,210,0.05), rgba(156,39,176,0.05))',
    transform: 'translateY(-2px)',
    '& .benefit-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      boxShadow: (props) => `0 8px 25px ${props.color}30`,
    }
  }
}));

const IconContainer = styled(Paper)(({ theme, color }) => ({
  width: 56,
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  background: `${color}15`,
  border: `2px solid ${color}30`,
  flexShrink: 0,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 4px 15px ${color}20`,
}));

const perks = [
  { 
    name: '10-Year Warranty', 
    description: 'Complete coverage and replacement guarantee for peace of mind', 
    icon: EventAvailableOutlined,
    color: '#2e7d32'
  },
  { 
    name: 'Free Returns', 
    description: 'Hassle-free return shipping at no additional cost to you', 
    icon: RefreshOutlined,
    color: '#1976d2'
  },
  { 
    name: 'Express Delivery', 
    description: 'Fast, secure, and contactless delivery to your doorstep', 
    icon: LocalShippingOutlined,
    color: '#ed6c02'
  },
];

export default function Incentives() {
  return (
    <SectionContainer>
      <SectionTitle variant="h5">
        Service Benefits
      </SectionTitle>
      
      <BenefitsCard>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {perks.map((perk, index) => (
              <Grid item xs={12} md={4} key={index}>
                <BenefitItem color={perk.color}>
                  <IconContainer
                    className="benefit-icon"
                    elevation={0}
                    color={perk.color}
                  >
                    <perk.icon sx={{ fontSize: 26, color: perk.color }} />
                  </IconContainer>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#1a1a1a',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        mb: 0.5,
                        lineHeight: 1.3
                      }}
                    >
                      {perk.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666666',
                        fontSize: '0.9rem',
                        lineHeight: 1.5
                      }}
                    >
                      {perk.description}
                    </Typography>
                  </Box>
                </BenefitItem>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </BenefitsCard>
    </SectionContainer>
  );
}