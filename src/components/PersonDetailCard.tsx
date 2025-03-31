import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import portrait images
import portrait1 from '../assets/potraits/potrait1.png';
import portrait2 from '../assets/potraits/potrait2.png';
import portrait3 from '../assets/potraits/potrait3.png';
import portrait4 from '../assets/potraits/potrait4.png';
import portrait5 from '../assets/potraits/potrait5.png';

// Consistent portraits for all cards
const PARTICIPANTS = [
  portrait1,
  portrait2,
  portrait3,
  portrait4
];

const PEOPLE = [
  {
    name: 'Sarah Chen',
    birthDate: 'April 15, 2001',
    introduction: 'Passionate foodie & amateur photographer who loves exploring new restaurants',
    interests: ['Food Photography', 'Cooking', 'Travel'],
    portrait: portrait1
  },
  {
    name: 'Mike Johnson',
    birthDate: 'June 22, 2003',
    introduction: 'Sports enthusiast and coffee lover. Always up for a game of tennis!',
    interests: ['Tennis', 'Coffee', 'Hiking'],
    portrait: portrait3
  },
  {
    name: 'Jay Kim',
    birthDate: 'March 8, 1999',
    introduction: 'Photography enthusiast with a passion for capturing urban landscapes.',
    interests: ['Photography', 'Digital Art'],
    portrait: portrait2
  },
  {
    name: 'Emily Park',
    birthDate: 'September 3, 2000',
    introduction: 'Book lover and aspiring writer. Looking to connect with fellow literature enthusiasts.',
    interests: ['Reading', 'Writing', 'Poetry'],
    portrait: portrait4
  },
  {
    name: 'David Lee',
    birthDate: 'February 10, 1998',
    introduction: 'Outdoor adventure seeker who loves hiking, camping, and exploring new trails.',
    interests: ['Hiking', 'Camping', 'Nature'],
    portrait: portrait5
  }
];

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

const PersonDetailCard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % PEOPLE.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const person = PEOPLE[selectedIndex];

  return (
    <CardWrapper>
      <ParticipantBadge>
        <ParticipantList>
          {PARTICIPANTS.map((portrait, i) => (
            <ParticipantPortrait key={i}>
              <img src={portrait} alt={`Participant ${i + 1}`} />
            </ParticipantPortrait>
          ))}
        </ParticipantList>
        <GroupSize>
          <UserIcon />
          4/5
        </GroupSize>
      </ParticipantBadge>
      
      <CardContainer>
        <PersonHeader>
          <PersonPortrait>
            <img src={person.portrait} alt={person.name} />
          </PersonPortrait>
          <PersonBasicInfo>
            <PersonName>{person.name}</PersonName>
            <PersonBirth>
              <CalendarIcon />
              {person.birthDate}
            </PersonBirth>
          </PersonBasicInfo>
        </PersonHeader>
        
        <PersonIntro>
          {person.introduction}
        </PersonIntro>
        
        <PersonInterests>
          <HeartIcon />
          <InterestTags>
            {person.interests.map((interest, index) => (
              <InterestTag key={index}>
                {interest}
              </InterestTag>
            ))}
          </InterestTags>
        </PersonInterests>
      </CardContainer>
    </CardWrapper>
  );
};

// Icon Components
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Styled Components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 280px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ParticipantBadge = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0.5rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #555;
  width: fit-content;
`;

const ParticipantList = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantPortrait = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
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

  @media (max-width: 380px) {
    width: 26px;
    height: 26px;
  }
`;

const GroupSize = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  font-weight: 600;
`;

const PersonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

const PersonPortrait = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PersonBasicInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const PersonName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const PersonBirth = styled.p`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  margin: 0;
`;

const PersonIntro = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.875rem;
  margin: 0 0 0.75rem;
  line-height: 1.4;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: left;
`;

const PersonInterests = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  flex-shrink: 0;
`;

const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const InterestTag = styled.span`
  background: rgba(244, 54, 48, 0.1);
  color: #f43630;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
`;

const CardContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid #555;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

export default PersonDetailCard; 