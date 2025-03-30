import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText>Hangout</LogoText>
      </LogoContainer>
    </HeaderContainer>
  );
};

// Header styled components
const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  margin: 0;
  text-decoration: none;
`;

export default Header; 