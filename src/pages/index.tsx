import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HangoutShowcase from '../components/HangoutShowcase';
import PersonDetailCard from '../components/PersonDetailCard';
import GroupChatPreview from '../components/GroupChatPreview';
import HangoutDetail from '../components/HangoutDetail';

const HomePage: React.FC = () => {
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
        {/* Categories Section */}
        <ContentBlock>
          <SectionTitle>
            Hangout is a meetup where everyone first meets
          </SectionTitle>
          <SpacerMedium />
          <HangoutShowcase />
          <SectionSubtitle>
            We'll email you a list of hangouts based on interests, group sizes, dates, and locations.
          </SectionSubtitle>
        </ContentBlock>

        {/* Hangouts Section */}
        <ContentBlock>
          <HangoutsContainer>
            <PersonDetailCard />
            <SectionSubtitle>
              You can see who is participating and view their profiles.
            </SectionSubtitle>
            <HangoutDetail />
            <SectionSubtitle>
              When you find something that interests you, and people you'd like to be friends with, hit the join button to add yourself to the group.
              <br/>
              <br/>
              Or, create your hangout.
              <br/>
              Give it a title and a description about what you'd enjoy while meeting new people. Set the date, location, size, and the types of people you would like to join.
            </SectionSubtitle>
          </HangoutsContainer>
        </ContentBlock>

        {/* Chat Section */}
        <ContentBlock>
          <GroupChatPreview />
          <SectionSubtitle>
            We'll invite you to an Instagram group chat so you can keep the conversation going before and after your hangouts.
          </SectionSubtitle>
        </ContentBlock>

        {/* Call to Action */}
        <ContentBlock $cta>
          <CTATitle>Join your first hangout</CTATitle>
          <CTAButton href="https://form.typeform.com/to/Cp6lYX6v" target="_blank" rel="noopener noreferrer">Get Started</CTAButton>
        </ContentBlock>
      </MainContent>
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
  margin-bottom: 0;
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
    margin-bottom: 1rem;
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
  font-size: 1.5rem;
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
`;

const ContentBlock = styled.div<{ $alternate?: boolean; $cta?: boolean }>`
  padding: 6rem 2rem;
  background: ${props => props.$cta ? 'linear-gradient(135deg, #f43630 0%, #ff8674 100%)' : 'white'};
  color: ${props => props.$cta ? 'white' : '#1a1a1a'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$cta ? 'center' : 'flex-start'};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  color: #333;
  font-size: 2.5rem;
  line-height: 1.4;
  max-width: 800px;
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
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 2rem 0 4rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1.5rem 0 3rem;
  }
`;

const HangoutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  
  ${SectionSubtitle} {
    margin: 1rem 0 3rem;
  }
  
  @media (max-width: 767px) {
    align-items: center;
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

const SpacerMedium = styled.div`
  height: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 1.5rem;
  }
`;

export default HomePage; 