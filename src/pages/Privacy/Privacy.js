import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";
import Collapse from "../../components/Collapse";

import PrivacyBanner from "../../assets/images/privacy-banner.jpg";

const data = [
  {
    title: "Personal Information",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
  {
    title: "Collection of  Personal Information",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
  nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
  venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
  Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
  vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
  quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
  laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
  rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
  semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
  blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
  et ante tincidunt tempus. Donec vitauris sit amet nibh. Donec sodales
  sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
  cursus nunc,`,
  },
  {
    title: "Legal Basis",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
  {
    title: "Purpose",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
  {
    title: "Your Rights",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
  {
    title: "Use of personal Information",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
  {
    title: "Disclosure of personal information",
    body: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
  felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
  consequat massa quis enim. Donec pede justo.`,
  },
];

const Privacy = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={PrivacyBanner} alt="PrivacyBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Privacy Policy" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <p className="body-text text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. ,
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="You may learn more about the GDPR here: "
              infoLink="https://www.eugdpr.org/"
            />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            {data.map((item) => (
              <Collapse title={item.title} body={item.body} />
            ))}
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
