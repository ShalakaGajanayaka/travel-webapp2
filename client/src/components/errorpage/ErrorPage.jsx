import React from "react";
import { 
  Box, 
  Typography, 
  Card, 
  CardContent,
  Button,
  Avatar 
} from '@mui/material';
import { 
  Support, 
  HelpOutline, 
  Email,
  Phone,
  Chat
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ErrorCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: '24px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(219, 226, 239, 0.8) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const IconContainer = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto 2rem',
  background: 'linear-gradient(135deg, rgba(63, 114, 175, 0.1), rgba(17, 45, 78, 0.1))',
  border: '3px solid rgba(63, 114, 175, 0.2)',
  animation: `${float} 4s ease-in-out infinite`,
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    color: '#3F72AF',
  }
}));

const SupportButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  margin: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(63, 114, 175, 0.3)',
  }
}));

const PrimaryButton = styled(SupportButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #112D4E, #3F72AF)',
  }
}));

const SecondaryButton = styled(SupportButton)(({ theme }) => ({
  border: '2px solid #3F72AF',
  color: '#3F72AF',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#3F72AF',
    color: 'white',
  }
}));

const ContactGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

const ContactCard = styled(Box)(({ theme }) => ({
  background: 'rgba(219, 226, 239, 0.5)',
  borderRadius: '16px',
  padding: theme.spacing(2),
  textAlign: 'center',
  border: '1px solid rgba(63, 114, 175, 0.2)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(219, 226, 239, 0.8)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(63, 114, 175, 0.2)',
  }
}));

const ErrorPage = ({ errorMessage, errorDesc }) => {
  const contactOptions = [
    {
      icon: <Email />,
      title: 'Email Support',
      description: 'support@intrepid.com',
      action: () => window.open('mailto:support@intrepid.com')
    },
    {
      icon: <Phone />,
      title: 'Phone Support',
      description: '+1 (555) 123-4567',
      action: () => window.open('tel:+15551234567')
    },
    {
      icon: <Chat />,
      title: 'Live Chat',
      description: 'Chat with us now',
      action: () => console.log('Open chat')
    }
  ];

  return (
    <ErrorCard>
      <CardContent sx={{ p: 5 }}>
        {/* Icon */}
        <IconContainer>
          <Support />
        </IconContainer>

        {/* Main Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#112D4E',
            mb: 2,
            background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {errorMessage}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#3F72AF',
            mb: 4,
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          {errorDesc}
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ mb: 4 }}>
          <PrimaryButton
            startIcon={<HelpOutline />}
            onClick={() => console.log('Get help')}
          >
            Get Help Now
          </PrimaryButton>
          <SecondaryButton
            startIcon={<Support />}
            onClick={() => console.log('Contact support')}
          >
            Contact Support
          </SecondaryButton>
        </Box>

        {/* Contact Options */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: '#112D4E',
              mb: 2,
              fontWeight: 600,
            }}
          >
            Need immediate assistance?
          </Typography>

          <ContactGrid>
            {contactOptions.map((option, index) => (
              <ContactCard key={index} onClick={option.action}>
                <Box sx={{ color: '#3F72AF', mb: 1 }}>
                  {option.icon}
                </Box>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="#112D4E"
                  sx={{ mb: 0.5 }}
                >
                  {option.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="#3F72AF"
                >
                  {option.description}
                </Typography>
              </ContactCard>
            ))}
          </ContactGrid>
        </Box>

        {/* Help Text */}
        <Box sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: '1px solid rgba(63, 114, 175, 0.2)' 
        }}>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
            }}
          >
            Our support team is available 24/7 to help you with any questions or issues.
          </Typography>
        </Box>
      </CardContent>
    </ErrorCard>
  );
};

export default ErrorPage;