import React from 'react';
import LiquityFeatures from './LiquityFeatures';
import FAQ from './FAQ';
import Footer from './Footer';
import ProtocolUpdates from './ProtocolUpdates';

const Home: React.FC = () => {
  return (
    <>
    <LiquityFeatures />
    <FAQ />
    <ProtocolUpdates />
    <Footer />
    </>
  );
};

export default Home;
