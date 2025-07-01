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
  Button
} from '@mui/material';
import { ArrowForward, AccessTime } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Card)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    '& .blog-media': {
      transform: 'scale(1.05)',
    }
  }
}));

const DateChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  zIndex: 2,
}));

export default function Blog() {
  const blogPosts = [
    {
      title: '25 totally new trips for 2025',
      date: '10 Dec 2024',
      imageUrl: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2023/11/Intrepid-Travel-Intrepid_Vietnam23_Ninh-BInh-walking-group-leader_agp_0896.jpg',
      link: 'javascript:void(0)',
      excerpt: 'Discover our newest adventures across the globe, from hidden gems to bucket-list destinations.',
      readTime: '5 min read',
      category: 'New Trips'
    },
    {
      title: 'Sustainable Travel: Making a Difference',
      date: '12 Dec 2024',
      imageUrl: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2025/01/Intrepid-Travel-Peru-Aguas-Calientes-Machu-Picchu-lookout-group-perspective-569019.jpg',
      link: 'javascript:void(0)',
      excerpt: 'Learn how your travel choices can create positive impact for local communities.',
      readTime: '8 min read',
      category: 'Sustainability'
    },
    {
      title: 'Photography Tips for Travelers',
      date: '15 Dec 2024',
      imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500',
      link: 'javascript:void(0)',
      excerpt: 'Capture stunning memories with these expert photography techniques.',
      readTime: '6 min read',
      category: 'Tips & Guides'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'New Trips': 'primary',
      'Sustainability': 'success',
      'Tips & Guides': 'secondary'
    };
    return colors[category] || 'default';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
          Get inspired on The Good Times
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Stories, tips, and insights from the world of adventure travel
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <BlogCard>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={post.imageUrl}
                  alt={post.title}
                  className="blog-media"
                  sx={{ transition: 'transform 0.3s ease' }}
                />
                <DateChip
                  icon={<AccessTime />}
                  label={post.readTime}
                  size="small"
                />
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={post.category}
                    color={getCategoryColor(post.category)}
                    size="small"
                    sx={{ mb: 2 }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, lineHeight: 1.3 }}
                >
                  {post.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  {post.excerpt}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: '20px',
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            borderRadius: '25px',
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: 'none',
            borderColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
              transform: 'translateY(-2px)',
            }
          }}
        >
          View All Articles
        </Button>
      </Box>
    </Container>
  );
}