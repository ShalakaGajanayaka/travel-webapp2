import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  Chip,
  Paper
} from '@mui/material';
import {
  PersonOutline,
  SupportAgentOutlined,
  LogoutOutlined,
  KeyboardArrowDownOutlined
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`;

const UserMenuContainer = styled(Paper)(({ theme }) => ({
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  margin: theme.spacing(2),
}));

const UserButton = styled(ButtonBase)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '20px',
  '&:hover': {
    background: 'rgba(25, 118, 210, 0.05)',
    transform: 'translateY(-1px)',
  }
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 44,
  height: 44,
  border: '2px solid rgba(255, 255, 255, 0.8)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  animation: `${float} 3s ease-in-out infinite`,
}));

const EarningsChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2e7d32, #4caf50)',
  color: 'white',
  fontSize: '0.75rem',
  height: 22,
  fontWeight: 600,
  boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
  '& .MuiChip-label': {
    padding: '0 8px',
  }
}));

export default function UserMenu() {
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
    handleClose();
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
    <Box sx={{ px: 2, py: 1 }}>
      <UserMenuContainer elevation={0}>
        <UserButton onClick={handleClick}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <StyledAvatar
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#1a1a1a', 
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  mb: 0.5
                }}
              >
                {user.userName}
              </Typography>
              <EarningsChip
                label={`$${user.totalEarnings}`}
                size="small"
              />
            </Box>
          </Box>
          <KeyboardArrowDownOutlined 
            sx={{ 
              color: '#666666',
              transition: 'transform 0.3s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
            }} 
          />
        </UserButton>
      </UserMenuContainer>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        PaperProps={{
          sx: {
            width: 240,
            mt: 1,
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            '& .MuiMenuItem-root': {
              py: 1.5,
              px: 2.5,
              borderRadius: '12px',
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
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <PersonOutline sx={{ color: '#1976d2' }} />
          </ListItemIcon>
          <ListItemText 
            primary="View Profile" 
            primaryTypographyProps={{ 
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#1a1a1a'
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 1, mx: 1 }} />
        <MenuItem onClick={handleSupport}>
          <ListItemIcon>
            <SupportAgentOutlined sx={{ color: '#1976d2' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Support" 
            primaryTypographyProps={{ 
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#1a1a1a'
            }}
          />
        </MenuItem>
        <Divider sx={{ my: 1, mx: 1 }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutOutlined sx={{ color: '#d32f2f' }} />
          </ListItemIcon>
          <ListItemText 
            primary="Sign Out" 
            primaryTypographyProps={{ 
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#d32f2f'
            }}
          />
        </MenuItem>
      </Menu>
    </Box>
  );
}