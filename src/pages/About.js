import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { PText } from '../components/PText';
import MyCv from '../assets/Jatin_sharma (1).pdf';
import AboutImg from '../assets/images/mk_About2.jpg';
import { AboutPageBottom } from '../components/AboutPageBottom';
import {
  educationContent,
  mySkillsContent,
  experiences,
} from '../assets/data/myInfo';
import { AboutPageProgressBar } from '../components/AboutPageProgressBar';
import { ContactBanner } from '../components/ContactBanner';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
      min-height: 430px;
      border-radius: 12px;
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;

export const About = ({ setProgress }) => {
  useEffect(() => {
    document.title = 'About | Jatin Sharma';
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);
  return (
    <AboutStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hello, <span>this is Jatin Sharma.</span>
            </p>
            <h2 className="about__heading">
              Deputy Manager (Analytics) at Gomechanic, India
            </h2>
            <div className="about__info">
              <PText>
                Born and brought up in New-Delhi, I’m a data enthusiast with an
                eye for detail. Since my childhood, I’ve always been curious how
                businesses are driven and how important decisions are made for
                running big corporations. I remember asking my college professor
                one day about the role of Data and Artificial Intelligence in
                business decision making. From thereon, I never looked back,
                became really curious about the domain and finally chose a
                career in analytics just after my graduation. During my
                employment also, I participated in hackathons and solved
                intricate data analytics problems to quench my thirst for
                specialised knowledge and keep up with the ever-changing IT
                trends. I have worked on a variety of projects, some of which
                are listed here I am always open to feedback, suggestions and
                collaborations. on this site.
              </PText>
            </div>
            <Button btnLink={MyCv} btnText="Download CV" target="_blank" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="AboutImage" />
          </div>
        </div>
        <div className="bottom-section">
          <AboutPageProgressBar
            heading="MY SKILLS"
            progressBarItems={mySkillsContent}
          />
          <AboutPageBottom
            heading="EDUCATION"
            infoContents={educationContent}
          />

          <AboutPageBottom heading="EXPERIENCES" infoContents={experiences} />
        </div>
        <ContactBanner />
      </div>
    </AboutStyle>
  );
};
