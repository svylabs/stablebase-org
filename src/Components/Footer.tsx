import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">StableBase</h2>
            <p className="text-gray-400">
              A base layer stablecoin protocol with 0% interest rate, enabling
              higher layer innovation in yield and rates.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">For Developers</h3>
              <ul className="text-gray-400">
                <li className="mb-1">
                  <a href="#codebase" className="hover:underline">
                    Code base
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#technicalresources" className="hover:underline">
                    Technical Resources
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#sdk" className="hover:underline">
                    SDK
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#bugbounty" className="hover:underline">
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Company</h3>
              <ul className="text-gray-400">
                <li className="mb-1">
                  <a href="#contactus" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#presskit" className="hover:underline">
                    Press kit
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#chickenbonds" className="hover:underline">
                    Chicken Bonds
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <ul className="text-gray-400">
                <li className="mb-1">
                  <a href="#whitepaper" className="hover:underline">
                    Whitepaper
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#docs" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#governance" className="hover:underline">
                    Governance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} StableBase. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://twitter.com/StableBase" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://github.com/StableBase" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://discord.com/invite/StableBase" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
