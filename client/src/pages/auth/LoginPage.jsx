import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  IconButton,
  InputAdornment,
  Fade,
  Backdrop,
  CircularProgress,
  Container
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  ArrowBack
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import axiosInstance from "../../utils/axiosInstance";
import { checkAuth } from "../../utils/auth";
import logo from '../../assets/images/intrepid-logo.svg';
import bgImage from '../../assets/images/bg-image.jpg';

// Modern animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Styled components
const LoginContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(3px)',
  }
});

const ModernCard = styled(Card)(({ theme }) => ({
  maxWidth: 440,
  width: '100%',
  margin: theme.spacing(2),
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
  position: 'relative',
  zIndex: 1,
  animation: `${fadeInUp} 0.6s ease-out`,
}));

const LogoContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: '2rem',
  animation: `${float} 3s ease-in-out infinite`,
});

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
      boxShadow: '0 8px 25px rgba(25,118,210,0.15)',
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
  }
}));

const ModernButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '14px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: 'linear-gradient(45deg, #1976d2, #1565c0)',
  boxShadow: '0 4px 15px rgba(25,118,210,0.4)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #1565c0, #0d47a1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(25,118,210,0.6)',
  },
  '&:disabled': {
    background: 'linear-gradient(45deg, #ccc, #999)',
    transform: 'none',
    boxShadow: 'none',
  }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: '14px 24px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  border: '2px solid #1976d2',
  color: '#1976d2',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1976d2',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(25,118,210,0.3)',
  }
}));

const LoginPage = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });
  const navigate = useNavigate();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage(
      "Password reset requested successfully. Please check your inbox for further instructions."
    );
    console.log("Password reset requested for", forgotEmail);
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setErrorMessage("");
    setSuccessMessage("");
    if (!isForgotPassword && userName) setForgotEmail(userName);
  };

  useEffect(() => {
    const checkUserAuth = async () => {
      const result = await checkAuth();
      if (result) {
        navigate("/dashboard");
      }
    };
    checkUserAuth();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        userName,
        password,
      });

      if (response.status === 200) {
        setAlert({ open: true, message: "Login successful!", severity: "success" });
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setAlert({ open: true, message: "Invalid credentials", severity: "error" });
      }
    } catch (error) {
      setAlert({ open: true, message: "Login failed. Please try again.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Container maxWidth="sm">
        <ModernCard>
          <CardContent sx={{ p: 4 }}>
            {/* Logo Section */}
            <LogoContainer>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'text.secondary',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  mb: 2,
                  display: 'block'
                }}
              >
                {isForgotPassword ? "Reset Password" : "Welcome Back"}
              </Typography>
              <Box
                component="img"
                src={logo}
                alt="Intrepid Logo"
                sx={{
                  height: 60,
                  width: 'auto',
                  mx: 'auto',
                  mb: 1,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 3
                }}
              >
                {isForgotPassword ? "Forgot Password" : "Sign In"}
              </Typography>
            </LogoContainer>

            {/* Alert Messages */}
            <Fade in={alert.open || !!errorMessage || !!successMessage}>
              <Box sx={{ mb: 3 }}>
                {alert.open && (
                  <Alert 
                    severity={alert.severity}
                    sx={{ 
                      borderRadius: '12px',
                      mb: 2,
                      '& .MuiAlert-message': {
                        fontWeight: 500
                      }
                    }}
                  >
                    {alert.message}
                  </Alert>
                )}
                {errorMessage && (
                  <Alert 
                    severity="error"
                    sx={{ 
                      borderRadius: '12px',
                      mb: 2,
                      '& .MuiAlert-message': {
                        fontWeight: 500
                      }
                    }}
                  >
                    {errorMessage}
                  </Alert>
                )}
                {successMessage && (
                  <Alert 
                    severity="success"
                    sx={{ 
                      borderRadius: '12px',
                      mb: 2,
                      '& .MuiAlert-message': {
                        fontWeight: 500
                      }
                    }}
                  >
                    {successMessage}
                  </Alert>
                )}
              </Box>
            </Fade>

            {/* Forms */}
            {isForgotPassword ? (
              <Box component="form" onSubmit={handleForgotPassword} sx={{ space: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <StyledTextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <ModernButton
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Send Reset Email
                  </ModernButton>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    startIcon={<ArrowBack />}
                    onClick={toggleForgotPassword}
                    sx={{
                      textTransform: 'none',
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    Back to Login
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleLogin} sx={{ space: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <StyledTextField
                    fullWidth
                    label="Username"
                    value={userName}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your username"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <StyledTextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white'
                              }
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box sx={{ textAlign: 'right', mb: 3 }}>
                  <Link
                    component="button"
                    type="button"
                    onClick={toggleForgotPassword}
                    sx={{
                      textDecoration: 'none',
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <ModernButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </ModernButton>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Don't have an account?
                  </Typography>
                  <SecondaryButton
                    onClick={() => navigate("/register")}
                    variant="outlined"
                  >
                    Create Account
                  </SecondaryButton>
                </Box>
              </Box>
            )}
          </CardContent>
        </ModernCard>
      </Container>

      {/* Loading Backdrop */}
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(10px)'
        }}
        open={loading}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress color="inherit" size={60} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Authenticating...
          </Typography>
        </Box>
      </Backdrop>
    </LoginContainer>
  );
};

export default LoginPage;