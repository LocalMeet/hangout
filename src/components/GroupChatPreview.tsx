import React from 'react';
import styled from 'styled-components';

// Import portraits for messages
import portrait1 from '../assets/potraits/potrait1.png';
import portrait2 from '../assets/potraits/potrait2.png';
import portrait3 from '../assets/potraits/potrait3.png';

const GroupChatPreview: React.FC = () => {
  return (
    <Container>
      <LogoHeader>
        <InstagramLogoImg src="https://ik.imagekit.io/qqtube/Social_Media_Logos/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1_tCBJPR6ukzG.png?updatedAt=1662141771142" alt="Instagram Logo" />
      </LogoHeader>
      <Chat>
        <MessageWrapper>
          <MessagePortrait>
            <img src={portrait1} alt="User 1" />
          </MessagePortrait>
          <Message $sender>Hey everyone, looking forward to Saturday!</Message>
        </MessageWrapper>
        
        <MessageWrapper $align="right">
          <Message>Me too! What time should we meet?</Message>
          <MessagePortrait>
            <img src={portrait2} alt="User 2" />
          </MessagePortrait>
        </MessageWrapper>
        
        <MessageWrapper>
          <MessagePortrait>
            <img src={portrait3} alt="User 3" />
          </MessagePortrait>
          <Message $sender>I was thinking around 2pm, does that work?</Message>
        </MessageWrapper>
      </Chat>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  position: relative;
  border: 1px solid #555;
  
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

const LogoHeader = styled.div`  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #efefef;
`;

const InstagramLogoImg = styled.img`
  height: 40px;
  object-fit: contain;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageWrapper = styled.div<{ $align?: string }>`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  justify-content: ${props => props.$align === 'right' ? 'flex-end' : 'flex-start'};
`;

const MessagePortrait = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Message = styled.div<{ $sender?: boolean }>`
  background: ${props => props.$sender ? '#efefef' : '#0095f6'};
  color: ${props => props.$sender ? '#333' : 'white'};
  padding: 0.75rem 1rem;
  border-radius: 18px;
  max-width: 70%;
  font-size: 0.9rem;
`;
export default GroupChatPreview; 

