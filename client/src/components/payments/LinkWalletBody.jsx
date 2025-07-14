import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Card,
  CardContent,
  Alert,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axiosInstance from "../../utils/axiosInstance";
import Loading from "../loadingscreen/Loading";

const WalletCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: '0 auto',
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
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
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
  },
  '& .MuiInputLabel-root': {
    color: '#3F72AF',
    fontWeight: 500,
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '14px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  boxShadow: '0 4px 15px rgba(63, 114, 175, 0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #112D4E, #3F72AF)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(63, 114, 175, 0.6)',
  }
}));

const NetworkChip = styled(Chip)(({ selected }) => ({
  borderRadius: '12px',
  padding: '8px 16px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: selected ? 'linear-gradient(45deg, #3F72AF, #112D4E)' : 'rgba(219, 226, 239, 0.5)',
  color: selected ? 'white' : '#112D4E',
  border: selected ? 'none' : '1px solid rgba(63, 114, 175, 0.3)',
  '&:hover': {
    background: selected ? 'linear-gradient(45deg, #112D4E, #3F72AF)' : 'rgba(219, 226, 239, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 15px rgba(63, 114, 175, 0.3)',
  }
}));

export default function LinkWalletBody() {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    walletAddress: "",
    network: "TRC20",
    cryptoType: "USDT",
  });

  // Fetch Wallet Data
  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axiosInstance.get("/api/users/get-wallet");
        setWallet(response.data);
      } catch (err) {
        setWallet(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Network Change
  const handleNetworkChange = (network) => {
    setFormData({ ...formData, network });
  };

  // Handle Crypto Change
  const handleCryptoChange = (cryptoType) => {
    setFormData({ ...formData, cryptoType });
  };

  // Add Wallet Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/users/create-wallet", formData);
      setWallet(response.data);
    } catch (err) {
      console.error("Error adding wallet:", err.response?.data?.message);
    }
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: 400
      }}>
        <Loading />
      </Box>
    );
  }

  return (
    <WalletCard>
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: '#112D4E',
            textAlign: 'center',
            background: wallet ? 'linear-gradient(45deg, #4caf50, #388e3c)' : 'linear-gradient(45deg, #3F72AF, #112D4E)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {wallet ? "Your Linked Wallet 🎉" : "Link Your Crypto Wallet 💰"}
        </Typography>

        {wallet && (
          <Alert 
            severity="success" 
            sx={{ 
              mb: 3, 
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #e8f5e8, #f1f8e9)',
              border: '1px solid #4caf50',
            }}
          >
            Your wallet is linked successfully!
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="First Name"
                name="firstName"
                value={wallet ? wallet.firstName : formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                disabled={!!wallet}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={wallet ? wallet.phone : formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                disabled={!!wallet}
                required
              />
            </Grid>
          </Grid>

          {/* Wallet Address */}
          <Box sx={{ mb: 4 }}>
            <StyledTextField
              fullWidth
              label="Crypto Wallet Address"
              name="walletAddress"
              value={wallet ? wallet.walletAddress : formData.walletAddress}
              onChange={handleChange}
              placeholder="Enter your wallet address"
              disabled={!!wallet}
              required
              multiline
              rows={2}
            />
          </Box>

          {/* Network Selection */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
              Select Network
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {["TRC20", "ERC20", "BTC"].map((network) => (
                <NetworkChip
                  key={network}
                  label={network}
                  selected={wallet ? wallet.network === network : formData.network === network}
                  onClick={() => !wallet && handleNetworkChange(network)}
                  disabled={!!wallet}
                />
              ))}
            </Box>
          </Box>

          {/* Crypto Type Selection */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
              Select Cryptocurrency
            </Typography>
            <Grid container spacing={2}>
              {["USDT", "USDC", "ETH", "BTC"].map((crypto) => (
                <Grid item xs={6} sm={3} key={crypto}>
                  <NetworkChip
                    label={crypto}
                    selected={wallet ? wallet.cryptoType === crypto : formData.cryptoType === crypto}
                    onClick={() => !wallet && handleCryptoChange(crypto)}
                    disabled={!!wallet}
                    sx={{ width: '100%' }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Submit Button */}
          {!wallet && (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <SubmitButton
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              >
                Confirm Wallet Link
              </SubmitButton>
            </Box>
          )}
        </Box>
      </CardContent>
    </WalletCard>
  );
}