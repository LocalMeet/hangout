import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HangoutShowcase from '../components/HangoutShowcase';
import PersonDetailCard from '../components/PersonDetailCard';
import GroupChatPreview from '../components/GroupChatPreview';

// Import form preview image
import formPreview from '../assets/images/form_preview.png';

const HomePage: React.FC = () => {
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const footerCTA = document.querySelector('footer');
      const mainContent = document.querySelector('main');
      
      if (heroSection && footerCTA && mainContent) {
        const heroBottom = heroSection.getBoundingClientRect().bottom - 500;
        const footerTop = footerCTA.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show sticky footer when scrolling through main content
        setShowStickyFooter(heroBottom < 0 && footerTop > windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageContainer>
      <Header />
      
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroHeader>
            <HeroQuestion>
              Hangout,
              <br />
              <EmphasisPrimary>New Friends</EmphasisPrimary>
            </HeroQuestion>
            <HeroSubtitle>
              <i>Join Hangout to meet new people and make new friends</i>
            </HeroSubtitle>
          </HeroHeader>
        </HeroContent>
        <HowItWorks>
          <HowItWorksText>How does Hangout work?</HowItWorksText>
          <ChevronDown onClick={() => window.scrollTo({ top: document.getElementById('categories')?.offsetTop, behavior: 'smooth' })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '-12px' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </ChevronDown>
        </HowItWorks>
      </HeroSection>

      {/* Main Content */}
      <MainContent>
        {/* Form Section */}
        <ContentBlock>
          <SectionTitle>
            Sign Up Our Form to Participate
          </SectionTitle>
          <FormImageContainer>
            <FormImage src={formPreview} alt="Hangout signup form preview" />
          </FormImageContainer>
          <SectionSubtitle>
            When you sign up using our form, we'll email you a list of hangouts on various interests, group sizes, dates, and locations, posted by other people nearby you.
          </SectionSubtitle>
        </ContentBlock>

        {/* Categories Section */}
        <ContentBlock>
          <SectionTitle>
            What is Hangout?
          </SectionTitle>
          <HangoutShowcase />
          <SectionSubtitle>
            Hangout is a one-time event where everyone meets for the first time. Join or host activities you enjoy, and meet new people as a plus.
          </SectionSubtitle>
        </ContentBlock>

        {/* Hangouts Section */}
        <ContentBlock>
          <SectionTitle>
            Check Who's In!
          </SectionTitle>
          <PersonDetailCard />
          <SectionSubtitle>
            See who's joining the hangout before you jump in. You can see member profiles that include interests, age, and gender, so you know who you'll meet.
            <br />
            <br />
            If you're hosting a hangout, you're in more control! Set more detailed criteria, like culture, language, and more, to find your perfect first meets.
          </SectionSubtitle>
        </ContentBlock>

        {/* Chat Section */}
        <ContentBlock>
          <SectionTitle>
            Group Chat on Instagram
          </SectionTitle>
          <GroupChatPreview />
          <SectionSubtitle>
            We'll invite you to an Instagram group chat once you join a hangout. You can keep the conversation going before and after!
          </SectionSubtitle>
        </ContentBlock>
      </MainContent>

      {/* Footer CTA */}
      <FooterCTA>
        <CTAContent>
          <CTATitle>Ready to find exciting hangouts?</CTATitle>
          <CTAButton href="https://form.typeform.com/to/Cp6lYX6v" target="_blank" rel="noopener noreferrer">Sign Up Our Form</CTAButton>
        </CTAContent>
      </FooterCTA>

      {/* Sticky Footer */}
      {showStickyFooter && (
        <StickyFooter>
          <CTAButton href="https://form.typeform.com/to/Cp6lYX6v" target="_blank" rel="noopener noreferrer">
            Sign Up Our Form
          </CTAButton>
        </StickyFooter>
      )}
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f43630 0%, #ff8674 100%);
  color: #ffffff;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: left;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }
`;

const HeroHeader = styled.div`
  margin-bottom: 3rem;
`;

const HeroQuestion = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  word-wrap: break-word;
  max-width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 767px) {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 0rem;
  }
`;

const EmphasisPrimary = styled.span`
  color: white;
  font-size: 1.2em;
  font-weight: 900;
  position: relative;
  display: inline-block;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  max-width: 600px;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const HowItWorks = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HowItWorksText = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const ChevronDown = styled.div`
  cursor: pointer;
  animation: bounce 2s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
`;

const ContentBlock = styled.div<{ $alternate?: boolean; $cta?: boolean }>`
  padding: 2rem 2rem;
  background: ${props => props.$cta ? 'linear-gradient(135deg, #f43630 0%, #ff8674 100%)' : 'white'};
  color: ${props => props.$cta ? 'white' : '#1a1a1a'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$cta ? 'center' : 'flex-start'};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  align-self: flex-start;
  color: #333;
  font-size: 2.5rem;
  line-height: 1.4;
  margin: 0 0 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin: 0 0 1rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: left;
  color: #555;
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 2rem 0 4rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.5rem 0 3rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAButton = styled.a`
  background: white;
  color: #f43630;
  border: none;
  border-radius: 9999px;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.25rem 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
  }
`;

const FormImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  border: 1px solid #555;
  
  /* Sketchy border effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 12px;
    pointer-events: none;
    transform: rotate(0.1deg);
  }
`;

const FormImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const FooterCTA = styled.footer`
  min-height: 50vh;
  width: 100%;
  background: linear-gradient(135deg, #f43630 0%, #ff8674 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTAContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export default HomePage; 