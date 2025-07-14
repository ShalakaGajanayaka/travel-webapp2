import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  Button
} from '@mui/material';
import {
  ChevronLeftOutlined,
  ChevronRightOutlined,
  LaunchOutlined,
  AccessTime
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import blogData from '../../data/blog';
import Loading from '../../components/loadingscreen/Loading';

const SectionContainer = styled(Box)({
  marginBottom: '2rem',
});

const SectionHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2rem',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#1a1a1a',
  fontSize: '1.25rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '40px',
    height: '3px',
    background: 'linear-gradient(45deg, #1976d2, #9c27b0)',
    borderRadius: '2px',
  }
}));

const BlogContainer = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  overflow: 'hidden',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  color: '#666666',
  width: 44,
  height: 44,
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': { 
    background: 'linear-gradient(45deg, #1976d2, #1565c0)',
    borderColor: 'transparent',
    color: '#ffffff',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(25,118,210,0.3)',
  }
}));

const BlogCard = styled(Card)(({ theme }) => ({
  minWidth: 340,
  maxWidth: 340,
  borderRadius: '20px',
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    borderColor: 'transparent',
    '& .blog-media': {
      transform: 'scale(1.1)',
    },
    '& .read-more-btn': {
      background: 'linear-gradient(45deg, #1976d2, #1565c0)',
      color: 'white',
      transform: 'translateX(4px)',
    }
  }
}));

const DateChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  fontWeight: 600,
  fontSize: '0.75rem',
  zIndex: 2,
  border: '1px solid rgba(255,255,255,0.3)',
}));

export default function BlogContent() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(prev => prev === 0 ? Math.max(0, blogData.length - 3) : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % Math.max(1, blogData.length - 2));
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Loading />
      </Box>
    );
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle variant="h5">
          Trending Destinations
        </SectionTitle>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <NavigationButton onClick={handlePrevious}>
            <ChevronLeftOutlined />
          </NavigationButton>
          <NavigationButton onClick={handleNext}>
            <ChevronRightOutlined />
          </NavigationButton>
        </Box>
      </SectionHeader>

      <BlogContainer>
        <CardContent sx={{ p: 4 }}>
          <Box
            ref={containerRef}
            sx={{
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
               transform: `translateX(-${currentIndex * (340 + 24)}px)`
             }}
           >
             {blogData.map((product) => (
               <BlogCard key={product.id}>
                 <Box sx={{ position: 'relative' }}>
                   <CardMedia
                     component="img"
                     height="220"
                     image={product.image}
                     alt={product.name}
                     className="blog-media"
                     sx={{
                       objectFit: 'cover',
                       transition: 'transform 0.4s ease',
                     }}
                   />
                   <DateChip
                     icon={<AccessTime sx={{ fontSize: 16 }} />}
                     label="5 min read"
                     size="small"
                   />
                   <Box
                     sx={{
                       position: 'absolute',
                       bottom: 0,
                       left: 0,
                       right: 0,
                       height: '60px',
                       background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                     }}
                   />
                 </Box>
                 <CardContent sx={{ p: 3 }}>
                   <Typography
                     variant="h6"
                     sx={{
                       color: '#1a1a1a',
                       fontWeight: 600,
                       mb: 1,
                       fontSize: '1.1rem',
                       lineHeight: 1.3,
                       display: '-webkit-box',
                       WebkitLineClamp: 2,
                       WebkitBoxOrient: 'vertical',
                       overflow: 'hidden',
                     }}
                   >
                     {product.name}
                   </Typography>
                   <Chip
                     label={product.currency}
                     size="small"
                     sx={{
                       background: 'linear-gradient(45deg, rgba(25,118,210,0.1), rgba(156,39,176,0.1))',
                       color: '#1976d2',
                       fontWeight: 500,
                       mb: 2,
                       border: '1px solid rgba(25,118,210,0.2)',
                     }}
                   />
                   <Button
                     className="read-more-btn"
                     component={Link}
                     to={`/blog-overview/${product.id}`}
                     variant="outlined"
                     size="small"
                     endIcon={<LaunchOutlined />}
                     sx={{
                       borderRadius: '25px',
                       borderColor: 'rgba(255,255,255,0.3)',
                       color: '#666666',
                       textTransform: 'none',
                       fontWeight: 500,
                       px: 2,
                       py: 1,
                       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                       '&:hover': {
                         borderColor: 'transparent',
                       }
                     }}
                   >
                     Learn More
                   </Button>
                 </CardContent>
               </BlogCard>
             ))}
           </Box>
         </Box>
       </CardContent>
     </BlogContainer>
   </SectionContainer>
 );
}