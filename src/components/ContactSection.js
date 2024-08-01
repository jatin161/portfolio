import React from 'react';
import styled from 'styled-components';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { ContactInfoItem } from './ContactInfoItem';
import { SectionTitle } from './SectionTitle';
import { ContactForm } from './ContactForm';

const ContactSectionStyle = styled.div`
  margin: 10rem 0;
  .contactSection__wrapper {
    margin-top: 7rem;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    content: ' ';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left,
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export const ContactSection = () => (
  <ContactSectionStyle>
    <div className="container">
      <SectionTitle subHeading="" heading="GET IN TOUCH" />
      <div className="contactSection__wrapper">
        <div className="left">
          <a href="tel:+919991144289">
            <ContactInfoItem icon={<MdLocalPhone />} text="+1 9059224098" />
          </a>
          <a href="mailto:jatin822184@gmail.com">
            <ContactInfoItem icon={<MdEmail />} text="js.jatin98@gmail.com" />
          </a>
          <a
            href="https://www.google.com/maps/place/Oshawa,+ON/@43.9484508,-78.9609232,12z/data=!3m1!4b1!4m6!3m5!1s0x89d51d21ccd37533:0xdd8ceff2f844fcbf!8m2!3d43.8975974!4d-78.8635999!16zL20vMDE4bjFr?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <ContactInfoItem text="OSHAWA ONTARIO, CANADA" />
          </a>
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  </ContactSectionStyle>
);
