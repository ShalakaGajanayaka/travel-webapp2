'use client'

import { useState } from 'react'
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  Typography,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Home,
  Assignment,
  History,
  HelpOutline,
  People,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import UserMenu from './UserMenu';
import UserMenuMobile from './UserMenuMobile';
import logo from '../assets/images/intrepid-logo.svg';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Assign Post', href: '/tasks', icon: Assignment },
  { name: 'Assign History', href: '/history', icon: History },
  { name: 'FAQ', href: '/faq', icon: HelpOutline },
  { name: 'Invites', href: '/invites', icon: People },
];

const SidebarContainer = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
  backdropFilter: 'blur(20px)',
  border: 'none',
  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
  height: '100vh',
  position: 'fixed',
  width: 256,
  zIndex: theme.zIndex.drawer,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  textAlign: 'center',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
}));

const NavItem = styled(ListItemButton)(({ theme, active }) => ({
  borderRadius: '12px',
  margin: theme.spacing(0.5, 1),
  padding: theme.spacing(1.5, 2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  color: active ? '#ffffff' : 'rgba(255,255,255,0.8)',
  backgroundColor: active ? 'rgba(255,255,255,0.15)' : 'transparent',
  backdropFilter: active ? 'blur(10px)' : 'none',
  border: active ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.2)',
    transform: 'translateX(4px)',
    color: '#ffffff',
  }
}));

const MobileHeader = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 10,
  display: 'flex',
  height: 64,
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  }
}));

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const updatedNavigation = navigation.map(item => ({
    ...item,
    current: location.pathname === item.href,
  }));

  const SidebarContent = () => (
    <SidebarContainer elevation={0}>
      <LogoContainer>
        <Box
          component="img"
          src={logo}
          alt="Intrepid Logo"
          sx={{
            height: 48,
            width: 'auto',
            filter: 'brightness(0) invert(1)',
            mb: 1
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          {/* Dashboard */}
        </Typography>
      </LogoContainer>

      <Box sx={{ width: '100%' }}>
        <UserMenu />
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mx: 2 }} />

      <List sx={{ px: 1, py: 2 }}>
        {updatedNavigation.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavItem
              active={item.current}
              onClick={() => {
                navigate(item.href);
                if (isMobile) setSidebarOpen(false);
              }}
            >
              <ListItemIcon>
                <item.icon 
                  sx={{ 
                    color: item.current ? '#ffffff' : 'rgba(255,255,255,0.8)',
                    fontSize: 22
                  }} 
                />
              </ListItemIcon>
              <ListItemText 
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: item.current ? 600 : 500
                }}
              />
            </NavItem>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );

  return (
    <>
      {/* Mobile Header */}
      <MobileHeader>
        <IconButton
          onClick={() => setSidebarOpen(true)}
          sx={{
            color: '#1976d2',
            '&:hover': {
              backgroundColor: 'rgba(25,118,210,0.1)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        <UserMenuMobile />
      </MobileHeader>

      {/* Desktop Sidebar */}
      {!isMobile && <SidebarContent />}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        PaperProps={{
          sx: {
            width: 256,
            background: 'transparent',
            boxShadow: 'none',
          }
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setSidebarOpen(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1001,
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <SidebarContent />
        </Box>
      </Drawer>
    </>
  );
}