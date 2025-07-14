import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import {
  Info,
  TravelExplore,
  DataObject,
  Business,
  Groups,
  Star,
  Verified,
  Public
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
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

const AboutCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(219, 226, 239, 0.8) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  position: 'relative',
  animation: `${fadeIn} 0.8s ease-out`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-50%',
    width: '200%',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, rgba(63, 114, 175, 0.6), transparent)',
    animation: 'shimmer 3s infinite',
    '@keyframes shimmer': {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    }
  }
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(3),
  textAlign: 'center',
  border: '1px solid rgba(255,255,255,0.3)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 40px rgba(63, 114, 175, 0.2)',
    background: 'rgba(255,255,255,0.9)',
  }
}));

const IconContainer = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto 1rem',
  background: 'linear-gradient(135deg, #3F72AF, #112D4E)',
  animation: `${float} 4s ease-in-out infinite`,
  boxShadow: '0 8px 25px rgba(63, 114, 175, 0.3)',
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: 'white',
  }
}));

const BrandText = styled('span')(({ theme }) => ({
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold',
}));

const StatsBox = styled(Box)(({ theme }) => ({
  background: 'rgba(219, 226, 239, 0.5)',
  borderRadius: '16px',
  padding: theme.spacing(2),
  textAlign: 'center',
  border: '1px solid rgba(63, 114, 175, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(219, 226, 239, 0.8)',
    transform: 'scale(1.05)',
  }
}));

export default function Index() {
  const features = [
    {
      icon: <TravelExplore />,
      title: "Travel Marketing",
      description: "Comprehensive travel marketing solutions to boost your business growth and reach."
    },
    {
      icon: <DataObject />,
      title: "Data Entry Solutions",
      description: "Accurate and efficient data entry services with the highest standards of quality."
    },
    {
      icon: <Business />,
      title: "Enterprise Solutions",
      description: "Scalable solutions for businesses of all sizes, from startups to large enterprises."
    },
    {
      icon: <Groups />,
      title: "Global Community",
      description: "Join our worldwide community of professionals and grow your network."
    }
  ];

  const stats = [
    { icon: <Public />, value: "100+", label: "Countries" },
    { icon: <Groups />, value: "10K+", label: "Users" },
    { icon: <Star />, value: "4.9", label: "Rating" },
    { icon: <Verified />, value: "99%", label: "Success Rate" }
  ];

  return (
    <Box sx={{ animation: `${fadeIn} 0.8s ease-out` }}>
      {/* Hero Section */}
      <AboutCard sx={{ mb: 6 }}>
        <CardContent sx={{ p: 6 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <IconContainer sx={{ animationDelay: '0.2s' }}>
              <Info />
            </IconContainer>
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                background: 'linear-gradient(45deg, #112D4E, #3F72AF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              About Intrepid
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#3F72AF',
                mb: 4,
                fontSize: '1.2rem',
                lineHeight: 1.6,
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              Welcome to <BrandText>Intrepid</BrandText>, your trusted platform for travel marketing and data entry solutions. 
              We are committed to providing high-quality services that empower businesses and individuals to achieve their goals 
              in the evolving digital landscape.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Chip 
                label="Travel Experts" 
                color="primary" 
                variant="filled"
                sx={{ fontWeight: 600 }}
              />
              <Chip 
                label="Data Specialists" 
                color="secondary" 
                variant="filled"
                sx={{ fontWeight: 600 }}
              />
              <Chip 
                label="Global Reach" 
                color="success" 
                variant="filled"
                sx={{ fontWeight: 600 }}
              />
            </Box>
          </Box>

          {/* Stats Section */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatsBox>
                  <Box sx={{ color: '#3F72AF', mb: 1 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" fontWeight="bold" color="#112D4E">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="#3F72AF" fontWeight={500}>
                    {stat.label}
                  </Typography>
                </StatsBox>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </AboutCard>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <FeatureCard>
              <IconContainer sx={{ animationDelay: `${index * 0.2}s` }}>
                {feature.icon}
              </IconContainer>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#112D4E"
                sx={{ mb: 2 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                color="#3F72AF"
                sx={{ lineHeight: 1.6 }}
              >
                {feature.description}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>

      {/* Content Section */}
      <AboutCard>
        <CardContent sx={{ p: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="#112D4E" sx={{ mb: 4, textAlign: 'center' }}>
            Our Mission & Vision
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="#3F72AF" sx={{ mb: 2 }}>
                  🎯 Our Mission
                </Typography>
                <Typography variant="body1" color="#112D4E" sx={{ lineHeight: 1.8, mb: 3 }}>
                  At <BrandText>Intrepid</BrandText>, we believe in seamless and user-friendly experiences. 
                  Whether you are looking to optimize your marketing strategies, enhance customer engagement, 
                  or streamline data entry tasks, our platform offers the tools and resources necessary for success.
                </Typography>
                <Typography variant="body1" color="#112D4E" sx={{ lineHeight: 1.8 }}>
                  Our team of professionals is dedicated to maintaining the highest standards of accuracy and reliability, 
                  ensuring that every project is handled with precision.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" color="#3F72AF" sx={{ mb: 2 }}>
                  🚀 Our Vision
                </Typography>
                <Typography variant="body1" color="#112D4E" sx={{ lineHeight: 1.8, mb: 3 }}>
                  As a globally recognized platform, we continuously evolve to meet the ever-changing demands 
                  of the digital world. Our commitment to excellence is reflected in our customer-centric approach, 
                  cutting-edge technology, and comprehensive service offerings.
                </Typography>
                <Typography variant="body1" color="#112D4E" sx={{ lineHeight: 1.8 }}>
                  Whether you are an individual freelancer or a large enterprise, <BrandText>Intrepid</BrandText> is 
                  here to support your journey toward efficiency and growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'rgba(63, 114, 175, 0.2)' }} />

          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#112D4E',
                mb: 2,
              }}
            >
              🌟 Join Our Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#3F72AF',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Join us and explore new possibilities in travel marketing and data management with <BrandText>Intrepid</BrandText>. 
              Together, we can achieve extraordinary results and build a better future.
            </Typography>
          </Box>
        </CardContent>
      </AboutCard>
    </Box>
  );
}