import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper
} from '@mui/material';
import {
  FileDownloadOutlined,
  FileUploadOutlined,
  AccountBalanceWalletOutlined,
  PersonOutline,
  SecurityOutlined,
  HelpOutlineOutlined,
  DescriptionOutlined,
  BadgeOutlined
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

const ModernActionCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    borderColor: 'transparent',
    '& .action-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      background: (props) => `linear-gradient(45deg, ${props.color}, ${props.color}dd)`,
      '& .MuiSvgIcon-root': {
        color: '#ffffff'
      }
    },
    '& .card-content': {
      transform: 'translateY(-2px)',
    }
  }
}));

const IconContainer = styled(Paper)(({ theme, color }) => ({
  width: 64,
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  background: `${color}15`,
  border: `2px solid ${color}30`,
  marginBottom: theme.spacing(2),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 4px 20px ${color}20`,
}));

const ActionTitle = styled(Typography)({
  fontWeight: 600,
  color: '#1a1a1a',
  textAlign: 'center',
  fontSize: '0.95rem',
  lineHeight: 1.3,
  transition: 'color 0.3s ease',
});

const stats = [
  { id: 3, name: 'Link Wallet', icon: AccountBalanceWalletOutlined, nav: '/linkWallet', color: '#2e7d32' },
  { id: 4, name: 'Employee ID', icon: BadgeOutlined, nav: '/empId', color: '#ed6c02' },
  { id: 5, name: 'Support', icon: PersonOutline, nav: '/support', color: '#1976d2' },
  { id: 6, name: 'About Us', icon: SecurityOutlined, nav: '/about', color: '#9c27b0' },
  { id: 2, name: 'Withdrawal', icon: FileUploadOutlined, nav: '/withdrawal', color: '#d32f2f' },
  { id: 1, name: 'Deposit', icon: FileDownloadOutlined, nav: '/deposit', color: '#2e7d32' },
  { id: 7, name: 'FAQs', icon: HelpOutlineOutlined, nav: '/faq', color: '#ed6c02' },
  { id: 8, name: 'Terms & Conditions', icon: DescriptionOutlined, nav: '/tc', color: '#666666' },
];

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      <SectionTitle variant="h5">
        Quick Actions
      </SectionTitle>
      
      <Grid container spacing={3}>
        {stats.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.id}>
            <ModernActionCard 
              color={item.color}
              onClick={() => navigate(item.nav)}
            >
              <CardContent
                className="card-content"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 3.5,
                  px: 2.5,
                  transition: 'transform 0.3s ease',
                }}
              >
                <IconContainer
                  className="action-icon"
                  elevation={0}
                  color={item.color}
                >
                  <item.icon sx={{ fontSize: 28, color: item.color }} />
                </IconContainer>
                <ActionTitle>
                  {item.name}
                </ActionTitle>
              </CardContent>
            </ModernActionCard>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}