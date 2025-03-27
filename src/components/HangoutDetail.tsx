import React from 'react';
import styled from 'styled-components';

// Import image for hangout
import badmintonImg from '../assets/images/badminton.png';

// Import portraits for participants
import portrait1 from '../assets/potraits/potrait1.png';
import portrait2 from '../assets/potraits/potrait2.png';
import portrait3 from '../assets/potraits/potrait3.png';

// Sample data for the hangout
const SAMPLE_HANGOUT = {
  title: "Anyone down to play badminton this saturday?",
  description: "Looking for some people to hit the courts with this Saturday! Doesn't matter if you're a pro or a beginner",
  location: "Burnaby, BC",
  image: badmintonImg,
  date: "2:00PM, 4.6 (Sat)",
  participants: [
    portrait1,
    portrait2,
    portrait3
  ],
  maxSize: 5
};

const HangoutDetail: React.FC = () => {
  const { title, description, location, image, date, participants, maxSize } = SAMPLE_HANGOUT;
  
  return (
    <Card>
      <HangoutImage>
        <img src={image} alt={title} />
      </HangoutImage>
      
      <HangoutContent>
        <HangoutTitle>{title}</HangoutTitle>
        <HangoutDescription>{description}</HangoutDescription>
        
        <HangoutInfo>
          <HangoutDate>
            <CalendarIcon />
            {date}
          </HangoutDate>
          <HangoutLocation>{location}</HangoutLocation>
          <ParticipantInfo>
            <ParticipantList>
              {participants.map((portrait, index) => (
                <ParticipantPortrait key={index}>
                  <img src={portrait} alt={`Participant ${index + 1}`} />
                </ParticipantPortrait>
              ))}
            </ParticipantList>
            <GroupSize>
              <UserIcon />
              {participants.length}/{maxSize}
            </GroupSize>
          </ParticipantInfo>
          <JoinButton>Join Hangout</JoinButton>
        </HangoutInfo>
      </HangoutContent>
    </Card>
  );
};

// Icon Components
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Styled Components
const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  margin: 0;
  display: flex;
  flex-direction: column;
  transform: rotate(-1deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px) rotate(0deg);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    transform: rotate(0deg);
  }
`;

const HangoutImage = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;
  background: #f8f8f8;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  @media (max-width: 768px) {
    height: 140px;
  }
`;

const HangoutContent = styled.div`
  padding: 1rem;
`;

const HangoutTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

const HangoutDescription = styled.p`
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const HangoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const HangoutDate = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.85rem;
  margin: 0;
`;

const HangoutLocation = styled.p`
  color: #555;
  font-size: 0.85rem;
  margin: 0;
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.25rem 0;
`;

const ParticipantList = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantPortrait = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  margin-right: -10px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GroupSize = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: #555;
  font-size: 0.85rem;
`;

const JoinButton = styled.button`
  background: #f43630;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  
  &:hover {
    background: #e32f29;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default HangoutDetail; 