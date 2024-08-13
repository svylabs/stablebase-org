import React from 'react';

const LiquityFeatures: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">0% Interest Rate</h2>
        <p className="text-gray-700">
          Liquity charges a small, one-time fee to borrow LUSD instead of highly variable interest rates.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">110% Collateral Ratio*</h2>
        <p className="text-gray-700">
          Liquity's efficient liquidation mechanism allows users to get the most liquidity for their ETH.
        </p>
        <p className="text-gray-500 italic">*Under normal operation.</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Unstoppable Stablecoin</h2>
        <p className="text-gray-700">
          LUSD is an immutable, decentralized stablecoin with no centralized counterparty risk.
        </p>
      </div>
    </div>
  );
};

export default LiquityFeatures;
