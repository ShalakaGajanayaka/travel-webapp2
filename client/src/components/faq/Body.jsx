import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Chip,
  Avatar
} from '@mui/material';
import {
  ExpandMore,
  HelpOutline,
  QuestionAnswer,
  Search
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

const FAQContainer = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  animation: `${fadeIn} 0.8s ease-out`,
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255,255,255,0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px !important',
  border: '1px solid rgba(63, 114, 175, 0.1)',
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(63, 114, 175, 0.15)',
    border: '1px solid rgba(63, 114, 175, 0.2)',
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: `0 0 ${theme.spacing(2)} 0`,
    background: 'rgba(63, 114, 175, 0.05)',
    border: '1px solid rgba(63, 114, 175, 0.3)',
  }
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '16px',
  padding: theme.spacing(2, 3),
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(1, 0),
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#3F72AF',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
  '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(180deg)',
    color: '#112D4E',
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2, 3, 3),
  borderTop: '1px solid rgba(63, 114, 175, 0.1)',
  background: 'rgba(255,255,255,0.5)',
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  fontWeight: 600,
  margin: theme.spacing(0.5),
  background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #112D4E, #3F72AF)',
    transform: 'scale(1.05)',
  }
}));

const IconContainer = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto 1rem',
  background: 'linear-gradient(135deg, #3F72AF, #112D4E)',
  boxShadow: '0 8px 25px rgba(63, 114, 175, 0.3)',
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: 'white',
  }
}));

const faqs = [
  { 
    question: "How can I withdraw or reset my account?", 
    answer: "To withdraw or reset your account, you must ensure that all assigned journeys are completed. Once completed, you will be eligible to withdraw or reset your account.",
    category: "Account"
  },
  { 
    question: "Can I register multiple accounts with the same phone number?", 
    answer: "No, each phone number can only be registered to one account.",
    category: "Registration"
  },
  { 
    question: "Can I bind the same wallet to another platform account?", 
    answer: "No, re-binding the same wallet to another platform account is not allowed. Appropriate action will be taken.",
    category: "Wallet"
  },
  { 
    question: "How can I ensure the security of my account and withdrawal passwords?", 
    answer: "It is important to keep your account and withdrawal passwords confidential. The platform will not be liable for any damages caused due to negligence in protecting your passwords.",
    category: "Security"
  },
  { 
    question: "Can changes or cancellations be made after accepting an assigned journey?", 
    answer: "No. Once an assigned journey has been accepted, changes, cancellations, or abandonment are strictly prohibited.",
    category: "Journeys"
  },
  { 
    question: "What are the consequences of inappropriate use of the account?", 
    answer: "Any inappropriate use of the account will result in legal action.",
    category: "Policy"
  },
  { 
    question: "Do I need to verify the deposit address before making a funds transfer?", 
    answer: "Yes, it is advised to verify the deposit address with customer service before making any funds transfer.",
    category: "Payments"
  },
  { 
    question: "Will Intrepid be responsible for errors in transferring funds to the wrong deposit address?", 
    answer: "No, Intrepid will not be held responsible for any errors resulting from transferring funds to the wrong deposit address.",
    category: "Payments"
  },
  { 
    question: "What is the time limit to complete an assigned journey deal?", 
    answer: "Assigned journey deals must be completed within one day of acceptance. If unable to complete within one day, inform customer service immediately.",
    category: "Journeys"
  },
  { 
    question: "How many Ultimate Journeys can a Daily assign contain?", 
    answer: "Daily assigns may contain 0-3 Ultimate Journeys.",
    category: "Journeys"
  },
  { 
    question: "How can I withdraw my funds?", 
    answer: "Before proceeding with withdrawal, please ensure that you have bound your withdrawal address on the platform. To withdraw your funds, go to the 'Withdrawal' section in the menu interface. Click the 'Withdrawal' button, enter the desired amount and your withdrawal password, then proceed with the withdrawal. The withdrawal duration is within 20 minutes and follows the platform's operating hours.",
    category: "Payments"
  },
  { 
    question: "What is the Platform Agent Mode?", 
    answer: "Users of this platform have the opportunity to earn additional dynamic commissions by referring new users. By becoming an agent, you can enjoy a 30% commission from the earnings of your referred users. The system will automatically provide you with this commission advantage.",
    category: "Earnings"
  },
  { 
    question: "What are the platform's operating hours?", 
    answer: "The platform operates from 10:00 to 22:00. During this time, users can accept assigned journeys and access the platform's features.",
    category: "General"
  }
];

// Group FAQs by category
const groupedFAQs = faqs.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = [];
  }
  acc[faq.category].push(faq);
  return acc;
}, {});

export default function Body() {
  const categories = Object.keys(groupedFAQs);

  return (
    <FAQContainer>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <IconContainer>
            <QuestionAnswer />
          </IconContainer>
          
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(45deg, #3F72AF, #112D4E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Frequently Asked Questions
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: '#3F72AF',
              mb: 3,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Find answers to common questions about our platform and services
          </Typography>

          {/* Category Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
            {categories.map((category, index) => (
              <CategoryChip
                key={index}
                label={`${category} (${groupedFAQs[category].length})`}
                icon={<HelpOutline />}
              />
            ))}
          </Box>
        </Box>

        {/* FAQ Sections by Category */}
        {categories.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#112D4E',
                mb: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search sx={{ mr: 1, color: '#3F72AF' }} />
              {category} Questions
            </Typography>

            {groupedFAQs[category].map((faq, index) => (
              <StyledAccordion key={index}>
                <StyledAccordionSummary expandIcon={<ExpandMore />}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#112D4E',
                      fontSize: '1.1rem',
                      lineHeight: 1.4
                    }}
                  >
                    {faq.question}
                  </Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#3F72AF',
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
        ))}

        {/* Help Section */}
        <Box sx={{ 
          mt: 5, 
          p: 3, 
          background: 'rgba(63, 114, 175, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(63, 114, 175, 0.2)',
          textAlign: 'center'
        }}>
          <Typography variant="h6" fontWeight="bold" color="#112D4E" sx={{ mb: 1 }}>
            Still have questions? 🤔
          </Typography>
          <Typography variant="body1" color="#3F72AF" sx={{ mb: 2 }}>
            Our support team is here to help you 24/7
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip 
              label="📧 support@intrepid.com" 
              clickable 
              sx={{ 
                background: 'rgba(63, 114, 175, 0.1)',
                color: '#3F72AF',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(63, 114, 175, 0.2)',
                }
              }}
            />
            <Chip 
              label="💬 Live Chat" 
              clickable 
              sx={{ 
                background: 'rgba(76, 175, 80, 0.1)',
                color: '#4caf50',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(76, 175, 80, 0.2)',
                }
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </FAQContainer>
  );
}