import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Chip
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
    '& .card-overlay': {
      opacity: 1,
    },
    '& .card-media': {
      transform: 'scale(1.1)',
    }
  }
}));

const CardOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  display: 'flex',
  alignItems: 'flex-end',
  padding: '20px',
  color: 'white',
});

const SeeAllCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  border: `2px dashed ${theme.palette.primary.main}`,
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 300,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transform: 'scale(1.05)',
    '& .MuiButton-root': {
      color: 'white',
    }
  }
}));

export default function WaysToTravel() {
  const travelTypes = [
    {
      id: 1,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blte825aa50135ff401/66f26155f9cb26477843cb1b/Pakistan-nangma-valley-hiking-campsite-PANO_IMG_9086-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Panorama of Nangma Valley campsite with river flowing by backed by huge craggy mountains with snow",
      label: "Walking & trekking",
      icon: "🥾",
      description: "Explore on foot"
    },
    {
      id: 2,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt7d21300317b14536/661e044236f462242844f551/Intrepid-Travel-Canada_Jasper_Athabasca-River_Cycling_01-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Intrepid travellers cycling the Athabasca River near Jasper in Canada",
      label: "Cycling",
      icon: "🚴",
      description: "Pedal powered adventures"
    },
    {
      id: 3,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt7236919cd24d71e7/665d53aea3c3fe5d6e4d1081/Intrepid-Travel-morocco-family_marrakech-8599(1)-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Family of Intrepid travellers group shot in Marrakech",
      label: "Family",
      icon: "👨‍👩‍👧‍👦",
      description: "Perfect for all ages"
    },
    {
      id: 4,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltb649acaf91240f60/660ce96dc8592e87646f325e/Intrepid_Travel-Antarctica_2020-21_group_walk_049A3524-adjustments_2-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Travellers on shore in Antarctica with penguins in background",
      label: "Polar",
      icon: "🐧",
      description: "Extreme adventures"
    },
    {
      id: 5,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt67539caf0cc48ea2/661dee18b1717a7a3f104524/Intrepid-Travel-Turkey_Kas_July2019-8124-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Travellers with fresh ice cream in Kas, Turkey",
      label: "Food",
      icon: "🍽️",
      description: "Culinary journeys"
    },
    {
      id: 6,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt2c70ae01849dfad9/664acc970b508a406cdcff01/Intrepid-Travel-Ecquador-Galapagos-Bartolome-Island-Queen-B-sunrise-01-720.jpg?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Intrepid cruise ship Grand Queen Beatriz at sunrise in off the coast of Isla Bartolome in Galapagos",
      label: "Cruises",
      icon: "🚢",
      description: "Ocean adventures"
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="waystotravel">
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
          Ways to travel
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Choose your adventure style and discover the world your way
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {travelTypes.map((travel) => (
          <Grid item xs={12} sm={6} md={4} key={travel.id}>
            <ModernCard>
              <CardMedia
                component="img"
                height="250"
                image={travel.imageSrc}
                alt={travel.altText}
                className="card-media"
                sx={{ transition: 'transform 0.3s ease' }}
              />
              
              <CardOverlay className="card-overlay">
                <Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {travel.icon}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
                    {travel.label}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {travel.description}
                  </Typography>
                </Box>
              </CardOverlay>

              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h5" sx={{ mr: 1 }}>
                    {travel.icon}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {travel.label}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {travel.description}
                </Typography>
              </CardContent>
            </ModernCard>
          </Grid>
        ))}

        {/* See All Card */}
        <Grid item xs={12} sm={6} md={4}>
          <SeeAllCard>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                ✨
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForward />}
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                See all themes
              </Button>
            </Box>
          </SeeAllCard>
        </Grid>
      </Grid>
    </Container>
  );
}