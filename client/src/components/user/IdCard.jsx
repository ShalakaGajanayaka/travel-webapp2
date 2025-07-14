import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Chip,
  Box,
  Divider,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Share,
  ContentCopy,
  Badge,
  Group,
  Star
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import { useAuth } from '../../context/AuthContext';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const ModernIdCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  borderRadius: '24px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(219, 226, 239, 0.8) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 80px rgba(63, 114, 175, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-50%',
    width: '200%',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, rgba(63, 114, 175, 0.6), transparent)',
    animation: `${shimmer} 2s infinite`,
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto',
  border: '4px solid rgba(63, 114, 175, 0.3)',
  boxShadow: '0 12px 30px rgba(63, 114, 175, 0.2)',
  animation: `${float} 4s ease-in-out infinite`,
  background: 'linear-gradient(135deg, #3F72AF, #112D4E)',
}));

const ReferralChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '20px',
  border: '2px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 25px rgba(63, 114, 175, 0.3)',
  '& .MuiChip-icon': {
    color: 'white',
  }
}));

const ShareButton = styled(Button)(({ theme, copied }) => ({
  borderRadius: '16px',
  padding: '12px 24px',
  fontWeight: 600,
  textTransform: 'none',
  background: copied 
    ? 'linear-gradient(45deg, #4caf50, #388e3c)' 
    : 'linear-gradient(45deg, #3F72AF, #112D4E)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(63, 114, 175, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: copied 
      ? 'linear-gradient(45deg, #388e3c, #2e7d32)' 
      : 'linear-gradient(45deg, #112D4E, #3F72AF)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(63, 114, 175, 0.6)',
  }
}));

const InfoBox = styled(Box)(({ theme }) => ({
  background: 'rgba(219, 226, 239, 0.5)',
  borderRadius: '16px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: '1px solid rgba(63, 114, 175, 0.2)',
  textAlign: 'center',
}));

export default function IdCard() {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      const invitationMessage = `Hey! Join me on Intrepid and get started with amazing features. Use my referral code: ${user.referralNo} to sign up and enjoy exclusive benefits!`;

      navigator.clipboard.writeText(invitationMessage)
        .then(() => {
          setCopied(true);
          setSnackbarOpen(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    } else {
      console.error('Clipboard API is not supported in this environment.');
    }
  };

  return (
    <>
      <ModernIdCard>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          {/* Profile Section */}
          <Box sx={{ mb: 3 }}>
            <ProfileAvatar
              src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg"
              alt="User Avatar"
            >
              <Badge />
            </ProfileAvatar>
          </Box>

          {/* User Info */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#112D4E',
              mb: 1,
            }}
          >
            {user?.name || user?.userName || 'Employee'}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#3F72AF',
              mb: 2,
              fontWeight: 500,
            }}
          >
            Intrepid Team Member
          </Typography>

          {/* Info Boxes */}
          <InfoBox>
            <Typography variant="body2" color="#3F72AF" fontWeight={600}>
              🎯 Invite your friends now
            </Typography>
          </InfoBox>

          <InfoBox>
            <Typography variant="body2" color="#3F72AF" fontWeight={600}>
              💫 Stay connected and earn with us!
            </Typography>
          </InfoBox>

          {/* Referral Code */}
          <Box sx={{ my: 3 }}>
            <Typography
              variant="body2"
              sx={{ color: '#3F72AF', mb: 2, fontWeight: 600 }}
            >
              Your Referral Code
            </Typography>
            <ReferralChip
              icon={<Star />}
              label={user?.referralNumber || user?.referralNo || 'REF123'}
            />
          </Box>

          <Divider sx={{ my: 3, borderColor: 'rgba(63, 114, 175, 0.2)' }} />

          {/* Share Button */}
          <ShareButton
            variant="contained"
            fullWidth
            startIcon={copied ? <ContentCopy /> : <Share />}
            onClick={handleCopy}
            copied={copied}
          >
            {copied ? '✅ Copied to Clipboard!' : '📤 Copy & Share Invitation'}
          </ShareButton>

          {/* Additional Stats */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            mt: 3,
            pt: 2,
            borderTop: '1px solid rgba(63, 114, 175, 0.2)'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {user?.totalEarnings || '0'}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Earnings
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                5⭐
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Rating
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                Active
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Status
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </ModernIdCard>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          sx={{ 
            borderRadius: '12px',
            background: 'linear-gradient(45deg, #4caf50, #388e3c)',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white'
            }
          }}
        >
          Invitation message copied successfully! 🎉
        </Alert>
      </Snackbar>
    </>
  );
}