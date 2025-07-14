import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip
} from '@mui/material';
import {
  PersonOutline,
  SupportAgentOutlined,
  LogoutOutlined,
  TrendingUpOutlined
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../context/AuthContext';

const EarningsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  cursor: 'pointer',
  padding: theme.spacing(1, 1.5),
  borderRadius: '12px',
  background: 'linear-gradient(45deg, rgba(46,125,50,0.1), rgba(76,175,80,0.1))',
  border: '1px solid rgba(46,125,50,0.2)',
  color: '#2e7d32',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #2e7d32, #4caf50)',
    color: 'white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 15px rgba(46,125,50,0.3)',
  }
}));

const ProfileButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  padding: 4,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
  },
  '&:hover::after': {
    opacity: 1,
  }
}));

export default function UserMenuMobile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    handleClose(); // Added missing function call and closing bracket
  };

  const handleSupport = () => {
    navigate("/support");
    handleClose();
  };

  const handleProfile = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <>
      {/* Earnings Display */}
      <EarningsContainer onClick={() => navigate('/earnings')}>
        <TrendingUpOutlined sx={{ fontSize: 20, mr: 1 }} />
        <Typography variant="body2" fontWeight="inherit">
          ${user.totalEarnings}
        </Typography>
      </EarningsContainer>

      {/* Profile Menu */}
      <ProfileButton onClick={handleClick}>
        <Avatar
          src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"
          sx={{
            width: 36,
            height: 36,
            border: '2px solid rgba(255,255,255,0.8)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />
      </ProfileButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        PaperProps={{
          sx: {
            width: 200,
            mt: 1,
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            '& .MuiMenuItem-root': {
              py: 1.5,
              px: 2,
              borderRadius: '8px',
              mx: 1,
              my: 0.5,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(45deg, rgba(25,118,210,0.1), rgba(156,39,176,0.1))',
                transform: 'translateX(4px)',
              }
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <PersonOutline sx={{ color: '#1976d2' }} />
          </ListItemIcon>
          <ListItemText 
            primary="View Profile" 
            primaryTypographyProps={{ 
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#1a1a1a'
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem onClick={handleSupport}>
          <ListItemIcon>
            <SupportAgentOutlined sx={{ color: '#1976d2' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Support" 
            primaryTypographyProps={{ 
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#1a1a1a'
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutOutlined sx={{ color: '#d32f2f' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Sign Out" 
            primaryTypographyProps={{ 
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#d32f2f'
            }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}