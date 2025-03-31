import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import images for categories
import sportIcon from '../assets/icons/interest_sports.png';
import foodDrinkIcon from '../assets/icons/interest_food_drink.png';
import bookIcon from '../assets/icons/interest_book.png';
import localIcon from '../assets/icons/interest_local.png';

// Import images for hangouts
import badmintonImg from '../assets/images/badminton.png';
import tennisImg from '../assets/images/tennis.png';
import hotpotImg from '../assets/images/hotpot.png';
import cocktailImg from '../assets/images/cocktail.png';
import libraryImg from '../assets/images/library.png';
import bakingImg from '../assets/images/baking.png';
import cherryblossomImg from '../assets/images/cherryblossom.png';
import hikingImg from '../assets/images/hiking.png';

// Import portrait images
import portrait1 from '../assets/potraits/potrait1.png';
import portrait2 from '../assets/potraits/potrait2.png';
import portrait3 from '../assets/potraits/potrait3.png';
import portrait4 from '../assets/potraits/potrait4.png';
import portrait5 from '../assets/potraits/potrait5.png';
import portrait6 from '../assets/potraits/potrait6.png';
import portrait7 from '../assets/potraits/potrait7.png';
import portrait8 from '../assets/potraits/potrait8.png';
import portrait9 from '../assets/potraits/potrait9.png';
import portrait10 from '../assets/potraits/potrait10.png';
import portrait11 from '../assets/potraits/potrait11.png';
import portrait12 from '../assets/potraits/potrait12.png';

// Define a theme type for the components
interface ThemeProps {
  theme: {
    categoryIndex?: number;
  };
}

// Sample data for categories and hangouts
const CATEGORIES = [
  {
    icon: sportIcon,
    items: [
      { 
        title: 'Anyone down to play badminton this Saturday?', 
        location: 'Burnaby, BC', 
        image: badmintonImg,
        date: '2:00PM, 4.6 (Sat)',
        participants: 3,
        maxSize: 4,
        portraits: [
          portrait1,
          portrait2,
          portrait3
        ]
      },
      { 
        title: 'Looking for Tennis partners', 
        location: 'Vancouver, BC', 
        image: tennisImg,
        date: '10:30AM, 4.7 (Sun)',
        participants: 2,
        maxSize: 4,
        portraits: [
          portrait4,
          portrait5
        ]
      }
    ]
  },
  {
    icon: foodDrinkIcon,
    items: [
      { 
        title: 'Bigway Hot Pot Coquitlam', 
        location: 'Coquitlam, BC', 
        image: hotpotImg,
        date: '6:30PM, 4.5 (Fri)',
        participants: 4,
        maxSize: 6,
        portraits: [
          portrait6,
          portrait7,
          portrait8,
          portrait9
        ]
      },
      { 
        title: 'Whisky & Highball Night', 
        location: 'Gastown, Vancouver', 
        image: cocktailImg,
        date: '7:00PM, 4.6 (Sat)',
        participants: 3,
        maxSize: 5,
        portraits: [
          portrait10,
          portrait11,
          portrait12
        ]
      }
    ]
  },
  {
    icon: bookIcon,
    items: [
      { 
        title: 'Looking for group study mates at VPL', 
        location: 'Downtown Vancouver', 
        image: libraryImg,
        date: '1:00PM, 4.8 (Mon)',
        participants: 3,
        maxSize: 5,
        portraits: [
          portrait3,
          portrait4,
          portrait5
        ]
      },
      { 
        title: 'Home Baking for Beginners', 
        location: 'Burnaby, BC', 
        image: bakingImg,
        date: '3:00PM, 4.9 (Tue)',
        participants: 4,
        maxSize: 6,
        portraits: [
          portrait6,
          portrait7,
          portrait8,
          portrait9
        ]
      }
    ]
  },
  {
    icon: localIcon,
    items: [
      { 
        title: 'Cherry blossom viewing', 
        location: 'Queen Elizabeth Park', 
        image: cherryblossomImg,
        date: '11:00AM, 4.6 (Sat)',
        participants: 5,
        maxSize: 8,
        portraits: [
          portrait10,
          portrait1,
          portrait2,
          portrait3,
          portrait4
        ]
      },
      { 
        title: 'Hiking Grouse Mountain', 
        location: 'North Vancouver', 
        image: hikingImg,
        date: '9:00AM, 4.7 (Sun)',
        participants: 3,
        maxSize: 6,
        portraits: [
          portrait5,
          portrait6,
          portrait7
        ]
      }
    ]
  }
];

const AUTO_ROTATE_INTERVAL = 4000; // 4 seconds

// Browser styled components
const BrowserContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  /* Sketchy border effect */
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 12px;
    pointer-events: none;
  }
`;

const BrowserTopBar = styled.div`
  background: #f0f0f0;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BrowserControls = styled.div`
  display: flex;
  gap: 8px;
`;

const BrowserButton = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
`;

const BrowserAddressBar = styled.div`
  flex: 1;
  background: white;
  border-radius: 6px;
  padding: 6px 12px;
  margin-left: 8px;
`;

const BrowserAddressBarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 13px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`;

const LockIcon = styled.div`
  color: #666;
  display: flex;
  align-items: center;
`;

const BrowserContent = styled.div`
  background: white;
  padding: 24px;
`;

const ShowcaseContainer = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.75rem;
  }
`;

const CategoryItem = styled.button<{ $selected: boolean; $categoryIndex: number }>`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: ${props => {
    const colors = ['#fff5d1', '#ffdfdf', '#e8f5e9', '#e3f2fd'];
    return colors[props.$categoryIndex % colors.length];
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transform: ${props => 
    props.$selected 
      ? 'rotate(0deg) scale(1.05)' 
      : `rotate(${(props.$categoryIndex % 2 === 0) ? '-2deg' : '2deg'})`
  };
  border: none;
  position: relative;

  &:hover {
    transform: translateY(-2px) rotate(0deg);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  ${props => props.$selected && `
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  `}

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 380px) {
    width: 48px;
    height: 48px;
  }
`;

const CategoryIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;

  @media (max-width: 380px) {
    width: 28px;
    height: 28px;
  }
`;

const MoreCategories = styled.div`
  display: none; /* Hidden by default in desktop view */
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: flex; /* Only visible in mobile view */
    width: 56px;
    height: 56px;
    margin-top: 0;
    align-self: center;
    align-items: center;
  }

  @media (max-width: 380px) {
    width: 48px;
    height: 48px;
  }
`;

const MoreDotsIcon = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  letter-spacing: 1px;
  transform: rotate(90deg);

  @media (max-width: 768px) {
    transform: rotate(0);
    font-size: 1.75rem;
    padding-top: 4px;
  }
`;

const HangoutList = styled.div<{ $categoryIndex: number }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HangoutCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  min-height: 100px;
  display: flex;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: none;

  &:nth-child(2) {
    margin-top: 0.5rem;
  }
`;

const HangoutImage = styled.div`
  width: 100px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 75px;
  }
`;

const HangoutContent = styled.div<ThemeProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 1rem;
  padding-left: 1rem;
  background-color: ${props => {
    // Get the background color from the parent HangoutCard through context
    const categoryIndex = props.theme.categoryIndex || 1;
    const colors = ['#fff5d1', '#ffdfdf', '#e8f5e9', '#e3f2fd'];
    return colors[(categoryIndex - 1) % colors.length];
  }};

  @media (max-width: 768px) {
    padding: 1rem;
    padding-left: 1rem;
  }

  @media (max-width: 380px) {
    padding: 0.875rem;
    padding-left: 0.875rem;
  }
`;

const HangoutTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 380px) {
    font-size: 0.875rem;
  }
`;

const HangoutDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const HangoutDate = styled.p`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.375rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const HangoutLocation = styled.p`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.375rem;
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
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const HangoutShowcase: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleCategoryClick = (index: number) => {
    setSelectedIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), AUTO_ROTATE_INTERVAL);
  };

  return (
    <BrowserContainer>
      <BrowserTopBar>
        <BrowserControls>
          <BrowserButton $color="#ff5f57" />
          <BrowserButton $color="#febc2e" />
          <BrowserButton $color="#28c840" />
        </BrowserControls>
        <BrowserAddressBar>
          <BrowserAddressBarContent>
            <LockIcon>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </LockIcon>
            hangout
          </BrowserAddressBarContent>
        </BrowserAddressBar>
      </BrowserTopBar>
      <BrowserContent>
        <ShowcaseContainer>
          <CategoryList>
            {CATEGORIES.map((category, index) => (
              <CategoryItem 
                key={index}
                $selected={index === selectedIndex}
                $categoryIndex={index}
                onClick={() => handleCategoryClick(index)}
              >
                <CategoryIconWrapper>
                  <CategoryImage src={category.icon} alt={`Category ${index + 1}`} />
                </CategoryIconWrapper>
              </CategoryItem>
            ))}
            <MoreCategories>
              <MoreDotsIcon>•••</MoreDotsIcon>
            </MoreCategories>
          </CategoryList>
          
          <HangoutList $categoryIndex={selectedIndex + 1}>
            {CATEGORIES[selectedIndex].items.map((item, index) => (
              <HangoutCard key={index}>
                <HangoutImage>
                  <img src={item.image} alt={item.title} />
                </HangoutImage>
                <HangoutContent theme={{ categoryIndex: selectedIndex + 1 }}>
                  <HangoutTitle>{item.title}</HangoutTitle>
                  <HangoutDetails>
                    <HangoutDate>
                      <CalendarIcon />
                      {item.date}
                    </HangoutDate>
                    <HangoutLocation>{item.location}</HangoutLocation>
                    <ParticipantInfo>
                      <ParticipantList>
                        {item.portraits.map((portrait, i) => (
                          <ParticipantPortrait key={i}>
                            <img src={portrait} alt={`Participant ${i + 1}`} />
                          </ParticipantPortrait>
                        ))}
                      </ParticipantList>
                      <GroupSize>
                        <UserIcon />
                        {item.participants}/{item.maxSize}
                      </GroupSize>
                    </ParticipantInfo>
                  </HangoutDetails>
                </HangoutContent>
              </HangoutCard>
            ))}
          </HangoutList>
        </ShowcaseContainer>
      </BrowserContent>
    </BrowserContainer>
  );
};

// Calendar Icon Component
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// User Icon Component
const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default HangoutShowcase; 