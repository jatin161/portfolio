import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import { SectionTitle } from './SectionTitle';
import { ServiceItem } from './ServiceItem';

const StyleServiceSection = styled.div`
  margin: 15rem 0;
  .serviceItems {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .serviceItems {
      flex-direction: column;
      gap: 5rem;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;
export const ServiceSection = () => (
  <StyleServiceSection>
    <div className="container">
      <SectionTitle subHeading="" heading="Domain Experience" />
      <div className="serviceItems">
        <ServiceItem
          icon={<MdCode />}
          title="Data Engineering"
          desc=" "
          /* "I have worked on multiple data engineering projects with a strong focus on building efficient and scalable data pipelines.
           I have experience working with a variety of tools" */
        />
        <ServiceItem icon={<MdDesktopMac />} title="Data Science" desc="" />
        <ServiceItem
          icon={<MdPhonelinkSetup />}
          title="Data Visualization"
          desc=""
        />
      </div>
    </div>
  </StyleServiceSection>
);
