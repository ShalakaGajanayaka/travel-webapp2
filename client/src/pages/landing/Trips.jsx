import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Rating,
  IconButton
} from '@mui/material';
import { FavoriteBorder, LocationOn, Schedule, Group } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TripCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    transform: 'translateY(-15px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    '& .card-media': {
      transform: 'scale(1.1)',
    }
  }
}));

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  zIndex: 2,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  fontWeight: 'bold',
  fontSize: '0.8rem',
}));

export default function Trips() {
  const trips = [
    {
      id: 1,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blte6b6c155077638d9/64eff2a2a9c2c320799c5530/CJPH_2024.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
      altText: "Mount Fuji with cherry blossoms in Japan",
      label: "9 Days · Premium",
      title: "Premium Highlights of Japan",
      oldPrice: "$5,550",
      newPrice: "$4,995",
      category: "Premium",
      rating: 4.9,
      reviews: 156,
      duration: "9 days",
      groupSize: "12 max"
    },
    {
      id: 2,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt73c89b1a6a2645be/67610ac1485851692641eb1e/gmda_2022-stylefix.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
     altText: "Scenic view of the Colosseum in Rome, Italy",
     label: "7 Days · Culinary",
     title: "Taste of Italy",
     oldPrice: "$3,200",
     newPrice: "$2,895",
     category: "Culinary",
     rating: 4.8,
     reviews: 203,
     duration: "7 days",
     groupSize: "16 max"
   },
   {
     id: 3,
     href: "javascript:void(0)",
     imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltf6145b948906e3ef/65fcb91459c51080d8dc958d/xmkc-2024.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
     altText: "Eiffel Tower in Paris, France at sunset",
     label: "5 Days · Romantic",
     title: "Parisian Romance",
     oldPrice: "$2,800",
     newPrice: "$2,495",
     category: "Romantic",
     rating: 4.7,
     reviews: 89,
     duration: "5 days",
     groupSize: "8 max"
   },
   {
     id: 4,
     href: "javascript:void(0)",
     imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blta04d62f030bb56fc/66971a15201b8a34bf6dd1a6/GGTA_2025.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
     altText: "Great Wall of China during sunset",
     label: "10 Days · Adventure",
     title: "China Explorer",
     oldPrice: "$4,000",
     newPrice: "$3,750",
     category: "Adventure",
     rating: 4.6,
     reviews: 124,
     duration: "10 days",
     groupSize: "20 max"
   },
   {
     id: 5,
     href: "javascript:void(0)",
     imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltab593005e5033ff8/64f6e435c980d86cdaff53a5/zmrr_2020.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
     altText: "Santorini, Greece with white houses and blue domes",
     label: "6 Days · Luxury",
     title: "Santorini Getaway",
     oldPrice: "$3,500",
     newPrice: "$3,150",
     category: "Luxury",
     rating: 4.8,
     reviews: 92,
     duration: "6 days",
     groupSize: "10 max"
   },
   {
     id: 6,
     href: "javascript:void(0)",
     imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/bltabc034e1ef88e055/66a184fedd0c312a0d910002/uboo_2024.gif?branch=prd&width=480&quality=75&format=pjpg&auto=webp",
     altText: "Machu Picchu, Peru with misty mountains",
     label: "8 Days · Cultural",
     title: "Machu Picchu Adventure",
     oldPrice: "$4,500",
     newPrice: "$4,100",
     category: "Cultural",
     rating: 4.9,
     reviews: 178,
     duration: "8 days",
     groupSize: "14 max"
   }
 ];

 const getCategoryColor = (category) => {
   const colors = {
     Premium: 'primary',
     Culinary: 'secondary',
     Romantic: 'error',
     Adventure: 'success',
     Luxury: 'warning',
     Cultural: 'info'
   };
   return colors[category] || 'default';
 };

 return (
   <Container maxWidth="lg" sx={{ py: 8 }} id="trips">
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
         Our trips
       </Typography>
       <Typography
         variant="h6"
         color="text.secondary"
         sx={{ maxWidth: 600, mx: 'auto' }}
       >
         Handpicked adventures designed for unforgettable experiences
       </Typography>
     </Box>

     <Grid container spacing={4}>
       {trips.map((trip) => (
         <Grid item xs={12} sm={6} lg={4} key={trip.id}>
           <TripCard>
             <Box sx={{ position: 'relative' }}>
               <CardMedia
                 component="img"
                 height="280"
                 image={trip.imageSrc}
                 alt={trip.altText}
                 className="card-media"
                 sx={{ transition: 'transform 0.3s ease' }}
               />
               
               <PriceChip
                 label={`From ${trip.newPrice}`}
                 color="primary"
               />
               
               <IconButton
                 sx={{
                   position: 'absolute',
                   top: 16,
                   right: 16,
                   backgroundColor: 'rgba(255,255,255,0.9)',
                   backdropFilter: 'blur(10px)',
                   '&:hover': {
                     backgroundColor: 'error.main',
                     color: 'white',
                     transform: 'scale(1.1)',
                   }
                 }}
               >
                 <FavoriteBorder />
               </IconButton>
             </Box>

             <CardContent sx={{ p: 3 }}>
               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                 <CategoryChip
                   label={trip.category}
                   color={getCategoryColor(trip.category)}
                   size="small"
                   sx={{ mr: 1 }}
                 />
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Rating
                     value={trip.rating}
                     precision={0.1}
                     size="small"
                     readOnly
                   />
                   <Typography variant="caption" sx={{ ml: 0.5, color: 'text.secondary' }}>
                     ({trip.reviews})
                   </Typography>
                 </Box>
               </Box>

               <Typography
                 variant="h6"
                 fontWeight="bold"
                 sx={{ mb: 2, lineHeight: 1.3 }}
               >
                 {trip.title}
               </Typography>

               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Schedule sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                   <Typography variant="body2" color="text.secondary">
                     {trip.duration}
                   </Typography>
                 </Box>
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <Group sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                   <Typography variant="body2" color="text.secondary">
                     {trip.groupSize}
                   </Typography>
                 </Box>
               </Box>

               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                 <Box>
                   <Typography
                     variant="body2"
                     sx={{
                       textDecoration: 'line-through',
                       color: 'text.secondary',
                       fontSize: '0.9rem'
                     }}
                   >
                     USD {trip.oldPrice}
                   </Typography>
                   <Typography
                     variant="h6"
                     color="primary"
                     fontWeight="bold"
                   >
                     USD {trip.newPrice}
                   </Typography>
                 </Box>
               </Box>
             </CardContent>
           </TripCard>
         </Grid>
       ))}
     </Grid>
   </Container>
 );
}