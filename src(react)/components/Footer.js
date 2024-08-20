import React from 'react';
import {
  FooterContainer,
  FooterText,
  FooterLinks,
  FooterLink
} from '../styles/Footer';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Your Website. All rights reserved.</FooterText>
      <FooterLinks>
        <FooterLink to="/terms">Terms of Service</FooterLink>
        <FooterLink to="/privacy">Privacy Policy</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
