import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Chip,
  Grid,
  InputAdornment,
  Avatar
} from '@mui/material';
import {
  AccountBalanceWallet,
  AttachMoney,
  TrendingUp,
  Support,
  Add
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import { useAuth } from '../../context/AuthContext';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const DepositCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
}));

const BalanceCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
  borderRadius: '20px',
  padding: theme.spacing(3),
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-50%',
    width: '200%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
    animation: `${shimmer} 2s infinite`,
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.9)',
      transform: 'translateY(-1px)',
    },
    '&.Mui-focused': {
      backgroundColor: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(63, 114, 175, 0.15)',
    }
  },
  '& .MuiInputLabel-root': {
    color: '#3F72AF',
    fontWeight: 500,
  }
}));

const AmountButton = styled(Button)(({ theme, selected }) => ({
  borderRadius: '12px',
  padding: '12px 16px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  background: selected 
    ? 'linear-gradient(45deg, #3F72AF, #112D4E)' 
    : 'rgba(219, 226, 239, 0.5)',
  color: selected ? 'white' : '#112D4E',
  border: selected ? 'none' : '1px solid rgba(63, 114, 175, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: selected 
      ? 'linear-gradient(45deg, #112D4E, #3F72AF)' 
      : 'rgba(219, 226, 239, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(63, 114, 175, 0.3)',
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '14px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: 'linear-gradient(45deg, #4caf50, #388e3c)',
  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #388e3c, #2e7d32)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(76, 175, 80, 0.6)',
  }
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  background: 'rgba(76, 175, 80, 0.1)',
  color: '#388e3c',
  fontWeight: 600,
  border: '1px solid rgba(76, 175, 80, 0.3)',
  animation: `${float} 3s ease-in-out infinite`,
  '&:hover': {
    background: 'rgba(76, 175, 80, 0.2)',
    transform: 'scale(1.05)',
  }
}));

export default function DepositBody() {
  const { user } = useAuth();
  const [value, setValue] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [alert, setAlert] = useState(null);

  const predefinedAmounts = [50, 100, 300, 1000, 3000, 5000];

  // Auto hide alert after 5 seconds
  useEffect(() => {
    if (alert?.open) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleAmountSelect = (amount) => {
    setValue(amount.toString());
    setSelectedAmount(amount);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setSelectedAmount(null); // Clear selection when manually typing
  };

  const handleSubmit = () => {
    if (!value || parseFloat(value) <= 0) {
      setAlert({ 
        open: true, 
        message: "Please enter a valid deposit amount", 
        severity: "error" 
      });
      return;
    }
    
    setAlert({ 
      open: true, 
      message: "Contact our live agent to complete your deposit. We'll assist you with the payment process! 💬", 
      severity: "info" 
    });
  };

  return (
    <DepositCard>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: '#112D4E',
            textAlign: 'center',
            background: 'linear-gradient(45deg, #4caf50, #388e3c)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          💳 Make a Deposit
        </Typography>

        {/* Balance Card */}
        <BalanceCard>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <TrendingUp sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight={500}>
              Current Balance
            </Typography>
          </Box>
          <Typography variant="h3" fontWeight="bold" sx={{ position: 'relative', zIndex: 1 }}>
            ${user?.totalEarnings || '0.00'}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <FeatureChip icon={<AccountBalanceWallet />} label="Secure Payments" size="small" />
            <FeatureChip icon={<Support />} label="24/7 Support" size="small" />
          </Box>
        </BalanceCard>

        {/* Alert */}
        {alert?.open && (
          <Alert 
            severity={alert.severity || "info"}
            onClose={() => setAlert(null)}
            sx={{ 
              mb: 3, 
              borderRadius: '12px',
              '& .MuiAlert-message': {
                fontWeight: 500
              }
            }}
          >
            {alert.message}
          </Alert>
        )}

        {/* Amount Input */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
            Deposit Amount
          </Typography>
          <StyledTextField
            fullWidth
            label="Enter Amount"
            value={value}
            onChange={handleInputChange}
            placeholder="0.00"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoney sx={{ color: '#4caf50' }} />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Minimum deposit amount: $10
          </Typography>
        </Box>

        {/* Quick Amount Selection */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
            Quick Select
          </Typography>
          <Grid container spacing={2}>
            {predefinedAmounts.map((amount) => (
              <Grid item xs={4} sm={4} key={amount}>
                <AmountButton
                  fullWidth
                  selected={selectedAmount === amount}
                  onClick={() => handleAmountSelect(amount)}
                  startIcon={<Add />}
                >
                  ${amount}
                </AmountButton>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Payment Methods Info */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
            💡 Payment Information
          </Typography>
          <Box sx={{ 
            background: 'rgba(76, 175, 80, 0.1)', 
            borderRadius: '12px', 
            p: 2,
            border: '1px solid rgba(76, 175, 80, 0.3)'
          }}>
            <Typography variant="body2" color="#388e3c" sx={{ mb: 1, fontWeight: 500 }}>
              🔒 Secure Payment Methods Available:
            </Typography>
            <Typography variant="body2" color="#2e7d32" sx={{ lineHeight: 1.6 }}>
              • Bank Transfer • Credit/Debit Cards • Digital Wallets • Cryptocurrency
            </Typography>
            <Typography variant="body2" color="#2e7d32" sx={{ mt: 1, fontStyle: 'italic' }}>
              Our live agent will guide you through the secure payment process.
            </Typography>
          </Box>
        </Box>

        {/* Submit Button */}
        <SubmitButton
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          startIcon={<Support />}
        >
          Contact Live Agent
        </SubmitButton>

        {/* Help Text */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            💬 Our agents are available 24/7 to assist with your deposit
          </Typography>
        </Box>
      </CardContent>
    </DepositCard>
  );
}