import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Badge,
  Avatar
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  FavoriteBorder,
  PersonOutline,
  Close
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ModernNavbar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  color: theme.palette.text.primary,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  borderRadius: '20px',
  padding: '8px 16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transform: 'translateY(-1px)',
  },
  transition: 'all 0.3s ease',
}));

const ModernButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 24px',
  fontWeight: 600,
  textTransform: 'none',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
  transition: 'all 0.3s ease',
}));

const UtilityButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '12px',
  padding: '8px',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main + '10',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease',
}));

export default function TopNav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const navItems = [
    { label: 'Destinations', id: 'top' },
    { label: 'Ways to travel', id: 'waystotravel' },
    { label: 'Deals', id: 'deals' },
    { label: 'About', id: 'footer' }
  ];

  // Smooth scroll handler
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'footer') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ModernNavbar position="fixed" elevation={0}>
      <Toolbar sx={{ px: { xs: 2, md: 4 }, justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: { xs: '1.5rem', md: '2rem' },
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          🌍 Intrepid
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                onClick={handleNavClick(item.id)}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>
        )}

        {/* Right Side Utilities */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Search */}
          <UtilityButton size="small">
            <SearchIcon />
          </UtilityButton>

          {/* Wishlist */}
          {!isMobile && (
            <Button
              startIcon={<FavoriteBorder />}
              sx={{
                color: 'text.primary',
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'primary.main', color: 'white' }
              }}
            >
              My Wishlist
              <Badge badgeContent={0} color="primary" sx={{ ml: 1 }} />
            </Button>
          )}

          {/* Profile/Login */}
          {!isMobile && (
            <Button
              startIcon={<PersonOutline />}
              sx={{
                color: 'text.primary',
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'primary.main', color: 'white' }
              }}
            >
              My Booking
            </Button>
          )}

          {/* Login Button */}
          <ModernButton
            size={isMobile ? 'small' : 'medium'}
            onClick={() => navigate('/login')}
          >
            Login
          </ModernButton>

          {/* Mobile Menu */}
          {isMobile && (
            <UtilityButton
              onClick={(e) => setMenuAnchorEl(e.currentTarget)}
            >
              <MenuIcon />
            </UtilityButton>
          )}
        </Box>

        {/* Mobile Menu Dropdown */}
        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={() => setMenuAnchorEl(null)}
          PaperProps={{
            sx: {
              borderRadius: 3,
              mt: 1,
              minWidth: 200,
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.id}
              onClick={(e) => {
                handleNavClick(item.id)(e);
                setMenuAnchorEl(null);
              }}
              sx={{
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                }
              }}
            >
              {item.label}
            </MenuItem>
          ))}
          <MenuItem onClick={() => setMenuAnchorEl(null)}>My Wishlist</MenuItem>
          <MenuItem onClick={() => setMenuAnchorEl(null)}>My Booking</MenuItem>
        </Menu>
      </Toolbar>
    </ModernNavbar>
  );
}