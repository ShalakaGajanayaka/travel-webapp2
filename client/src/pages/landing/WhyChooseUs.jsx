import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import {
  Schedule,
  Groups,
  TrendingUp,
  Star,
  Security,
  EmojiEvents
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  border: '1px solid rgba(255,255,255,0.3)',
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    borderColor: theme.palette.primary.main,
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.primary.main,
    }
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem',
  transition: 'all 0.3s ease',
}));

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: "Flexible bookings",
      description: "Travel plans change. We get it – and we're here to help! Learn all about our flexible booking options.",
      link: "/en/flexible-bookings",
      stats: "24/7 Support"
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "Like-minded travellers",
      description: "Connect and share experiences with a community of spirited explorers who care about the planet.",
      link: "/community",
      stats: "50+ Years"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: "The right trip for you",
      description: "Whether near or far from home, your trip will be local led and full of unforgettable experiences, with everything taken care of.",
      link: "/find-trip",
      stats: "1000+ Trips"
    },
    {
      icon: <Star sx={{ fontSize: 40 }} />,
      title: "Award-winning service",
      description: "Recognized globally for our commitment to sustainable travel and exceptional customer experiences.",
      link: "/awards",
      stats: "4.8/5 Rating"
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Travel with confidence",
      description: "Comprehensive travel insurance and 24/7 support ensure you're covered every step of the way.",
      link: "/travel-insurance",
      stats: "100% Secured"
    },
    {
      icon: <EmojiEvents sx={{ fontSize: 40 }} />,
      title: "Local expertise",
      description: "Our local guides and partners provide authentic insights and experiences you won't find anywhere else.",
      link: "/local-guides",
      stats: "Local Led"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="deals">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(135deg, #1976d2, #9c27b0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Why choose us
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Discover what makes Intrepid the trusted choice for adventure travelers worldwide
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <FeatureCard>
              <CardContent sx={{ p: 0 }}>
                <IconContainer>
                  <Box className="feature-icon" sx={{ transition: 'all 0.3s ease' }}>
                    {feature.icon}
                  </Box>
                </IconContainer>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, color: 'text.primary' }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                  >
                    {feature.stats}
                  </Typography>
                </Box>

                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '20px',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}