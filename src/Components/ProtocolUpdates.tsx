import React from 'react';

const updates = [
  {
    title: 'Protocol Upgrade',
    date: '2024-08-01',
    description:
      'StableBase protocol has been upgraded to improve stability mechanisms and user governance features.',
  },
  {
    title: 'New Collateral Types',
    date: '2024-07-15',
    description:
      'Added new collateral types to enhance the flexibility of the CDP mechanism.',
  },
  {
    title: 'Governance Update',
    date: '2024-09-01',
    description:
      'Implemented dynamic base rate updates and governance improvements for better user participation.',
  },
];
const ProtocolUpdates: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-800">Protocol Overview</h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          StableBase is a base layer stablecoin protocol built using the Collateral Debt Position (CDP) mechanism. It offers a 0% interest rate on stablecoin borrowing and user-governed origination fees. This design enables higher-layer protocols to provide innovative yield opportunities and enhance stablecoin utility across various applications.
        </p>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          The protocol issues a USD-pegged stablecoin known as SBD (StableBase Dollar), and it incorporates mechanisms like liquidation, redemption, and a user-defined Cash Reserve Ratio (CRR) to ensure stability and flexibility.
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg py-12 md:px-8 lg:px-20 xl:px-40 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center md:text-left">Updates</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 py-8 shadow-md hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out border-2 border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{update.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{update.date}</p>
              <p className="mt-4 text-gray-700">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolUpdates;
