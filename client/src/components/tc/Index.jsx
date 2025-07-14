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
  Avatar,
  Alert
} from '@mui/material';
import {
  ExpandMore,
  Gavel,
  Description,
  Security
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

const TermsContainer = styled(Card)(({ theme }) => ({
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

const IntroAlert = styled(Alert)(({ theme }) => ({
  borderRadius: '16px',
  background: 'linear-gradient(45deg, rgba(63, 114, 175, 0.1), rgba(17, 45, 78, 0.1))',
  border: '1px solid rgba(63, 114, 175, 0.3)',
  marginBottom: '32px',
  '& .MuiAlert-icon': {
    color: '#3F72AF',
  }
}));

const termsData = [
  {
    category: "Registration",
    sections: [
      {
        title: "Account Registration",
        content: [
          "Users must be at least 21 years old to register.",
          "Each phone number can only be linked to one account.",
          "Re-binding the same wallet to multiple accounts is prohibited.",
          "Keep account credentials confidential; unauthorized access is not the platform's liability."
        ]
      }
    ]
  },
  {
    category: "Usage",
    sections: [
      {
        title: "Platform Usage",
        content: [
          "The system randomly allocates Travel Journeys, and once allocated, changes, cancellations, or abandonment of Travel Journeys are strictly prohibited.",
          "Any inappropriate use of the account will result in legal action.",
          "Users must comply with all applicable laws and regulations when using the platform.",
          "The platform may require additional verification steps, such as identity verification or address verification, before allowing users to use certain features.",
          "The platform reserves the right to terminate or suspend user accounts at any time, with or without cause.",
          "Users must provide accurate and up-to-date information when registering an account and using the platform.",
          "Users shall not engage in any fraudulent activity, including the creation of multiple accounts or manipulation of the system to receive more than the permitted quantity of Travel Journeys.",
          "Users must not share their account information, including login credentials and withdrawal codes, with anyone else.",
          "The platform reserves the right to restrict or terminate a user's access to certain features or services if the user violates any of the terms and conditions.",
          "Users must agree to receive communications from the Platform, including messages and notifications regarding their accounts and Travel Journeys.",
          "When completing the account daily Travel Journeys, users can contact live support to claim $1-1000."
        ]
      }
    ]
  },
  {
    category: "Journeys",
    sections: [
      {
        title: "Travel Journeys",
        content: [
          "Ensure that all Travel Journeys are completed before you can withdraw or reset your account.",
          "Accounts with a balance of less than 50 cannot be assigned a Travel Journey. Ensure that you have a balance of at least 50 before accepting any Travel Journeys.",
          "Travel Journeys must be completed within one day of acceptance. If unable to complete within one day, inform customer service immediately.",
          "Each Daily Travel Journey may contain 0-3 set Ultimate Journeys.",
          "Each Ultimate package may contain 1-3 Journeys.",
          "All exchange rates will follow the regulations of the platform's financial department, and there will be different exchange rates every minute.",
          "An upgrade on Member Tier Level will reward Ultimate Journeys.",
          "Any delay in completion must be approved by the Merchant. The platform will calculate the amount of the delay fee to be paid according to the delay fee given by the Merchant. Please contact Customer Service for more information.",
          "Failure to complete the assigned Travel Journey within the given time frame will result in the account being permanently frozen, and the amount in the account may not be withdrawn.",
          "Accounts can only be deleted when they are completed and have a 0 balance.",
          "Each account has the possibility to get a reset assigned order bonus.",
          "Each of the 16 assigned Travel Journeys may include random Ultimate Journeys."
        ]
      }
    ]
  },
  {
    category: "Payments",
    sections: [
      {
        title: "Withdrawal",
        content: [
          "Withdrawal of salary can only be submitted after all assigned Travel Journeys have been completed.",
          "You can withdraw your earned funds on the platform, subject to certain conditions.",
          "All daily Travel Journeys must be assigned before the account is withdrawn or reset.",
          "Before proceeding with withdrawal, ensure that you have bound your withdrawal address on the platform.",
          "Withdraw your funds on the menu page \"Withdrawal\" interface. Click the \"Withdrawal\" button and input the amount you want to withdraw and your Withdrawal pin to proceed with withdrawal.",
          "The Withdrawal duration is within 20 minutes, and the withdrawal time is the same as the platform's operating time.",
          "Withdrawals can only be applied if the credit score is 100. If it is less than 100, please contact live support for details.",
          "New users must verify KYC on their own account before proceeding with withdrawal."
        ]
      }
    ]
  },
  {
    category: "Legal",
    sections: [
      {
        title: "Liability and Disputes",
        content: [
          "The Platform is not responsible for any loss or damage arising from the use of the Platform or any assigned Travel Journeys.",
          "Users are responsible for ensuring that their accounts contain the funds required to complete any assigned Travel Journeys they accept.",
          "The Platform is not responsible for any loss of funds due to the User's failure to complete the assigned Travel Journeys or due to unauthorized access to the User's account.",
          "The platform reserves the right to investigate and take appropriate action against any user suspected of engaging in fraudulent activity.",
          "The platform may collect and use personal information in accordance with its privacy policy.",
          "Only one wallet can be used to transfer funds from one account, and the wallet address must be the same as the account withdrawal address.",
          "Each account will have one opportunity to activate the reserve fund per daily assigned Travel Journey."
        ]
      },
      {
        title: "Modifications and Termination",
        content: [
          "The platform reserves the right to modify or update the terms and conditions at any time without prior notice. It is the user's responsibility to review the terms periodically.",
          "The platform may terminate or suspend user accounts at any time, with or without cause.",
          "The platform may charge fees for certain services or features, and users will be notified of any such fees before they are incurred."
        ]
      },
      {
        title: "Business Losses",
        content: [
          "Loss of profits, sales or contracts;",
          "Loss of income or revenue;",
          "Loss of business opportunity or goodwill or reputation; or",
          "Wasted management or office time."
        ]
      },
      {
        title: "Governing Law and Jurisdiction",
        content: [
          "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where Intrepiid is registered.",
          "Any disputes arising from this Agreement shall be resolved by the courts of the jurisdiction where Intrepiid is registered."
        ]
      }
    ]
  }
];

const getSectionCount = () => {
  return termsData.reduce((total, category) => total + category.sections.length, 0);
};

export default function Index() {
  const categories = termsData.map(cat => cat.category);

  return (
    <TermsContainer>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <IconContainer>
            <Description />
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
            Terms & Conditions
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
            Please read our terms and conditions carefully to understand your rights and obligations
          </Typography>

          <IntroAlert
            severity="info"
            icon={false}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#3F72AF' }}>
              Welcome to <span style={{ color: '#112D4E' }}>Intrepiid</span>
            </Typography>
            <Typography sx={{ mt: 1, color: '#112D4E' }}>
              These terms outline the rules and regulations for using our platform. Please read carefully.
            </Typography>
          </IntroAlert>

          {/* Category Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
            {categories.map((category, index) => (
              <CategoryChip
                key={index}
                label={`${category} (${termsData[index].sections.length})`}
                icon={<Gavel color="inherit" />}
              />
            ))}
          </Box>
        </Box>

        {/* Terms Sections by Category */}
        {termsData.map((categoryData, categoryIndex) => (
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
              <Security sx={{ mr: 1, color: '#3F72AF' }} />
              {categoryData.category} Terms
            </Typography>

            {categoryData.sections.map((section, sectionIndex) => (
              <StyledAccordion key={sectionIndex}>
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
                    {`${categoryIndex + 1}.${sectionIndex + 1} ${section.title}`}
                  </Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  {section.title === "Liability and Disputes" && (
                    <Alert severity="warning" sx={{ mb: 2, borderRadius: '12px' }}>
                      This section of the terms is important and you should read it carefully.
                    </Alert>
                  )}
                  <Box component="ul" sx={{ pl: 2, color: '#3F72AF', lineHeight: 1.7 }}>
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} style={{ marginBottom: '8px' }}>
                        {item}
                      </li>
                    ))}
                  </Box>
                </StyledAccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
        ))}

        {/* Footer Section */}
        <Box sx={{
          mt: 5,
          p: 3,
          background: 'rgba(63, 114, 175, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(63, 114, 175, 0.2)',
          textAlign: 'center'
        }}>
          <Typography variant="h6" fontWeight="bold" color="#112D4E" sx={{ mb: 1 }}>
            Important Notice 📋
          </Typography>
          <Typography variant="body1" color="#3F72AF" sx={{ mb: 2 }}>
            Dear member, kindly read carefully for our Rules Description, thank you for your cooperation.
          </Typography>
          <Typography variant="body2" color="#112D4E" sx={{ fontSize: '0.9rem' }}>
            2025 Business IntrepiidTravel Expert Ltd. All rights reserved.
          </Typography>
        </Box>
      </CardContent>
    </TermsContainer>
  );
}