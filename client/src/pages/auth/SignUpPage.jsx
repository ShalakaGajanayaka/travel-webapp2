import React, { useState, useEffect } from "react";
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
  Container,
  Grid,
  Chip
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Person,
  Lock,
  Phone,
  Pin,
  Badge,
  GroupAdd,
  ArrowBack,
  CheckCircle
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import axiosInstance from "../../utils/axiosInstance";
import bgImage from '../../assets/images/bg-image.jpg';
import logo from '../../assets/images/intrepid-logo.svg';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled components
const SignUpContainer = styled(Box)({
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
  maxWidth: 500,
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
  },
  marginBottom: theme.spacing(2),
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
  padding: '12px 24px',
  fontSize: '0.9rem',
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

const EmployeeChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  background: 'linear-gradient(45deg, #4caf50, #388e3c)',
  color: 'white',
  fontWeight: 'bold',
  animation: `${slideIn} 0.5s ease-out`,
  '& .MuiChip-icon': {
    color: 'white',
  }
}));

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    phone: "",
    pin: "",
    employeeNo: "",
    referralNo: "",
    role: "user"
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const navigate = useNavigate();

  // Auto generate employee number
  useEffect(() => {
    const generateEmployeeNo = () => {
      return 'EMPU' + Math.floor(10000 + Math.random() * 90000);
    };
    setFormData((prevData) => ({ ...prevData, employeeNo: generateEmployeeNo() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/auth/register", formData);
      if (response.status === 201) {
        setAlert({ open: true, message: "User registered successfully!", severity: "success" });
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setAlert({ open: true, message: "Registration failed. Please try again.", severity: "error" });
      }
    } catch (error) {
      setAlert({
        open: true,
        message: error.response?.data?.error || "An error occurred. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpContainer>
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
                Join Intrepid
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
                  mb: 1
                }}
              >
                Create Account
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Start your adventure with us today
              </Typography>
            </LogoContainer>

            {/* Employee Number Display */}
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <EmployeeChip
                icon={<CheckCircle />}
                label={`Employee ID: ${formData.employeeNo}`}
                variant="filled"
              />
            </Box>

            {/* Alert Messages */}
            <Fade in={alert.open}>
              <Box sx={{ mb: 3 }}>
                {alert.open && (
                  <Alert 
                    severity={alert.severity}
                    sx={{ 
                      borderRadius: '12px',
                      '& .MuiAlert-message': {
                        fontWeight: 500
                      }
                    }}
                  >
                    {alert.message}
                  </Alert>
                )}
              </Box>
            </Fade>

            {/* Registration Form */}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Choose a unique username"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
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
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    inputProps={{ pattern: "[0-9]*" }}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    type={showPin ? 'text' : 'password'}
                    label="Withdrawal PIN"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    placeholder="Create a 4-digit PIN"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Pin color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPin(!showPin)}
                            edge="end"
                            sx={{
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white'
                              }
                            }}
                          >
                            {showPin ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label="Referral Number"
                    name="referralNo"
                    value={formData.referralNo}
                    onChange={handleChange}
                    placeholder="Enter referral code (optional)"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GroupAdd color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, mb: 3 }}>
                <ModernButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Badge />}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </ModernButton>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Already have an account?
                </Typography>
                <SecondaryButton
                  onClick={() => navigate("/login")}
                  startIcon={<ArrowBack />}
                >
                  Sign In Instead
                </SecondaryButton>
              </Box>
            </Box>
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
            Creating your account...
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
            Welcome to the adventure!
          </Typography>
        </Box>
      </Backdrop>
    </SignUpContainer>
  );
};

export default SignUpPage;