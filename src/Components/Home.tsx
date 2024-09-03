import React from 'react';
import LiquityFeatures from './LiquityFeatures';
import FAQ from './FAQ';
import Footer from './Footer';
import ProtocolUpdates from './ProtocolUpdates';

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              Introducing Stable Coin
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl text-white">
              The most stable and reliable digital currency on the market.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 mx-auto md:mx-0 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white">
                Buy Stable Coin
              </button>
              <button className="flex items-center mx-auto md:mx-0 bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-white hover:text-blue-600">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <LiquityFeatures />
      <FAQ />
      <ProtocolUpdates />
      <Footer />
    </>
  );
};

export default Home;
