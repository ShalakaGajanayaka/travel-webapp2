import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Divider,
  Link
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`,
  color: 'white',
  padding: theme.spacing(6, 0, 4),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: 'white',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
  },
  transition: 'all 0.3s ease',
}));

const BCorp = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: { xs: 'center', md: 'flex-start' },
  marginBottom: theme.spacing(3),
}));

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook', href: 'javascript:void(0)' },
    { icon: <Instagram />, label: 'Instagram', href: 'javascript:void(0)' },
    { icon: <Twitter />, label: 'Twitter', href: 'javascript:void(0)' },
    { icon: <YouTube />, label: 'YouTube', href: 'javascript:void(0)' },
    { icon: <LinkedIn />, label: 'LinkedIn', href: 'javascript:void(0)' },
  ];

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* B Corp Logo */}
          <Grid item xs={12} md={5}>
            <BCorp>
              <Link href="javascript:void(0)" target="_blank" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  src="https://www.intrepidtravel.com/files/images/logos/b-corp-logo.svg"
                  alt="B Corp Logo"
                  sx={{
                    width: 60,
                    height: 'auto',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.9,
                  }}
                />
              </Link>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Certified B Corp
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Business as a force for good
                </Typography>
              </Box>
            </BCorp>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Typography variant="body2" sx={{ mr: 2, opacity: 0.8 }}>
                Follow us:
              </Typography>
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.label}
                  size="small"
                >
                  {social.icon}
                </SocialButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Footer Bottom */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              © 2025 Intrepid Travel. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
             Small group travel that's good all over the world.
           </Typography>
         </Grid>
         
         <Grid item xs={12} md={6}>
           <Box
             sx={{
               display: 'flex',
               justifyContent: { xs: 'center', md: 'flex-end' },
               alignItems: 'center',
               flexWrap: 'wrap',
               gap: 3,
             }}
           >
             <Link
               href="javascript:void(0)"
               color="inherit"
               sx={{
                 textDecoration: 'none',
                 opacity: 0.8,
                 '&:hover': { opacity: 1, color: 'primary.light' },
                 transition: 'all 0.3s ease',
               }}
             >
               Privacy Policy
             </Link>
             <Link
               href="javascript:void(0)"
               color="inherit"
               sx={{
                 textDecoration: 'none',
                 opacity: 0.8,
                 '&:hover': { opacity: 1, color: 'primary.light' },
                 transition: 'all 0.3s ease',
               }}
             >
               Terms & Conditions
             </Link>
             <Link
               href="javascript:void(0)"
               color="inherit"
               sx={{
                 textDecoration: 'none',
                 opacity: 0.8,
                 '&:hover': { opacity: 1, color: 'primary.light' },
                 transition: 'all 0.3s ease',
               }}
             >
               Contact Us
             </Link>
           </Box>
         </Grid>
       </Grid>

       {/* Additional Footer Info */}
       <Box sx={{ mt: 4, textAlign: 'center' }}>
         <Typography variant="body2" sx={{ opacity: 0.6, fontSize: '0.875rem' }}>
           Intrepid Travel is committed to sustainable tourism and responsible travel practices.
           <br />
           We are carbon neutral and support local communities worldwide.
         </Typography>
       </Box>
     </Container>
   </FooterSection>
 );
}