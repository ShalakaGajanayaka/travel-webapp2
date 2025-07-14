import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  CircularProgress,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {
  AccountBalanceWallet,
  AttachMoney,
  Security,
  SelectAll,
  Person,
  CreditCard
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

const WithdrawalCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
}));

const BalanceCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3F72AF 0%, #112D4E 100%)',
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
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)',
    transform: 'translateX(-100%)',
    animation: 'shimmer 2s infinite',
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    }
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

const AllButton = styled(Button)(({ theme }) => ({
  borderRadius: '0 12px 12px 0',
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  color: 'white',
  fontWeight: 600,
  textTransform: 'none',
  minWidth: 80,
  height: '56px',
  '&:hover': {
    background: 'linear-gradient(45deg, #112D4E, #3F72AF)',
    transform: 'scale(1.05)',
  }
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
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
  },
  '&:disabled': {
    background: 'linear-gradient(45deg, #ccc, #999)',
    transform: 'none',
    boxShadow: 'none',
  }
}));

const WalletInfoCard = styled(Box)(({ theme }) => ({
  background: 'rgba(219, 226, 239, 0.5)',
  borderRadius: '16px',
  padding: theme.spacing(2),
  border: '1px solid rgba(63, 114, 175, 0.2)',
  marginTop: theme.spacing(2),
}));

export default function WithdrawelBody() {
    const { user, setUser } = useAuth();
    const [wallet, setWallet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");
    const [pin, setPin] = useState("");
    const [alert, setAlert] = useState(null);

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

    // Auto hide alert after 5 seconds
    useEffect(() => {
        if (alert?.open) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    // Fetch the latest user data
    const fetchLatestUserData = async () => {
        try {
            const response = await axiosInstance.get(`/api/users/${user._id}`);
            setUser(response.data);
            return response.data.totalEarnings;
        } catch (err) {
            console.error("Error fetching user data:", err.response?.data?.message);
            return user.totalEarnings;
        }
    };

    const handleAllButtonClick = async () => {
        const latestTotalEarnings = await fetchLatestUserData();
        setValue(latestTotalEarnings.toString());
    };

    const withdraw = async (e) => {
        e.preventDefault();
        
        if (!wallet) {
            setAlert({ open: true, message: "Link a wallet first", severity: "error" });
            return;
        }
        if (!value) {
            setAlert({ open: true, message: "Amount is required", severity: "error" });
            return;
        }
        if (!pin) {
            setAlert({ open: true, message: "PIN is required", severity: "error" });
            return;
        }
        if (String(pin) !== String(user.pin)) {
            setAlert({ open: true, message: "PIN is incorrect", severity: "error" });
            return;
        }
        if (!user.permissions.withdraw) {
            setAlert({ open: true, message: "You do not have permission to withdraw", severity: "error" });
            return;
        }
        if (parseFloat(value) < 100) {
            setAlert({ open: true, message: "Minimum withdrawal amount is $100", severity: "error" });
            return;
        }
        if (user.totalEarnings < 100) {
            setAlert({ open: true, message: "Need $100+ to withdraw", severity: "error" });
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post(`/api/users/withdraw/${user._id}`, {
                amount: value,
            });

            if (response.status === 201) {
                // Record the transaction
                const transaction = {
                    userId: user._id,
                    createdBy: user._id,
                    transaction: parseFloat(value),
                    type: '-'
                };

                try {
                    await axiosInstance.post(`/api/transactions`, transaction);
                } catch (transactionErr) {
                    console.error("Error recording transaction:", transactionErr.response?.data?.message);
                }

                setAlert({ open: true, message: "Withdrawal successful! 🎉", severity: "success" });
                setValue("");
                setPin("");
                await fetchLatestUserData();
            }

        } catch (err) {
            setAlert({ 
                open: true, 
                message: err.response?.data?.message || "An error occurred during withdrawal", 
                severity: "error" 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <WithdrawalCard>
            <CardContent sx={{ p: 4 }}>
                {/* Header */}
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: '#112D4E',
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    💰 Withdraw Funds
                </Typography>

                {/* Balance Card */}
                <BalanceCard>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <AccountBalanceWallet sx={{ mr: 1 }} />
                        <Typography variant="h6" fontWeight={500}>
                            Total Balance
                        </Typography>
                    </Box>
                    <Typography variant="h3" fontWeight="bold" sx={{ position: 'relative', zIndex: 1 }}>
                        ${user?.totalEarnings || '0.00'}
                    </Typography>
                    <Chip 
                        label="Available for withdrawal" 
                        sx={{ 
                            mt: 1, 
                            background: 'rgba(255,255,255,0.2)', 
                            color: 'white',
                            fontWeight: 500
                        }} 
                    />
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
                        Withdrawal Amount
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                        <StyledTextField
                            fullWidth
                            label="Amount"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="0.00"
                            type="number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AttachMoney sx={{ color: '#3F72AF' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '12px 0 0 12px',
                                }
                            }}
                        />
                        <AllButton
                            onClick={handleAllButtonClick}
                            startIcon={<SelectAll />}
                        >
                            All
                        </AllButton>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                        Minimum withdrawal amount: $100
                    </Typography>
                </Box>

                {/* PIN Input */}
                <Box sx={{ mb: 4 }}>
                    <StyledTextField
                        fullWidth
                        label="Withdrawal PIN"
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter your withdrawal PIN"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Security sx={{ color: '#3F72AF' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Wallet Information */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#3F72AF', fontWeight: 600 }}>
                        Wallet Information
                    </Typography>
                    <WalletInfoCard>
                        <List disablePadding>
                            <ListItem disablePadding sx={{ py: 1 }}>
                                <ListItemText 
                                    primary={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Person sx={{ mr: 1, color: '#3F72AF' }} />
                                            <Typography variant="body2" color="#3F72AF" fontWeight={600}>
                                                Account Holder
                                            </Typography>
                                        </Box>
                                    }
                                    secondary={
                                        <Typography variant="body1" color="#112D4E" fontWeight={500}>
                                            {wallet?.firstName || "Not linked"}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider sx={{ my: 1 }} />
                            <ListItem disablePadding sx={{ py: 1 }}>
                                <ListItemText 
                                    primary={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CreditCard sx={{ mr: 1, color: '#3F72AF' }} />
                                            <Typography variant="body2" color="#3F72AF" fontWeight={600}>
                                                Wallet Address
                                            </Typography>
                                        </Box>
                                    }
                                    secondary={
                                        <Typography 
                                            variant="body2" 
                                            color="#112D4E" 
                                            fontWeight={500}
                                            sx={{ 
                                                wordBreak: 'break-all',
                                                fontFamily: 'monospace',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            {wallet?.walletAddress || "Not linked"}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </WalletInfoCard>
                </Box>

                {/* Confirm Button */}
                <ConfirmButton
                    fullWidth
                    variant="contained"
                    onClick={withdraw}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AccountBalanceWallet />}
                >
                    {loading ? "Processing Withdrawal..." : "Confirm Withdrawal"}
                </ConfirmButton>

                {/* Help Text */}
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                        💡 Withdrawals are processed within 24-48 hours
                    </Typography>
                </Box>
            </CardContent>
        </WithdrawalCard>
    );
}