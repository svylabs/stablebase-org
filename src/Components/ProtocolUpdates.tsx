import React from 'react';

const updates = [
  {
    title: 'Protocol Upgrade',
    date: '2024-08-01',
    description: 'StableBase protocol has been upgraded to improve stability mechanisms and user governance features.',
  },
  {
    title: 'New Collateral Types',
    date: '2024-07-15',
    description: 'Added new collateral types to enhance the flexibility of the CDP mechanism.',
  },
];

const ProtocolUpdates: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Protocol Overview</h2>
          <p className="text-lg text-gray-700">
            StableBase is a base layer stablecoin protocol built using the Collateral Debt Position (CDP) mechanism. It offers a 0% interest rate on stablecoin borrowing and user-governed origination fees. This design enables higher-layer protocols to provide innovative yield opportunities and enhance stablecoin utility across various applications.
          </p>
          <p className="mt-4 text-gray-600">
            The protocol issues a USD-pegged stablecoin known as SBD (StableBase Dollar), and it incorporates mechanisms like liquidation, redemption, and a user-defined Cash Reserve Ratio (CRR) to ensure stability and flexibility.
          </p>
        </div>

        <div className='md:px-8 lg:px-20 xl:px-40 p-3'>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Updates</h2>
          <div className="flex flex-col md:flex-row gap-3 md:px-8 lg:gap-10 lg:px-20 xl:gap-14 xl:px-40 p-3">
            {updates.map((update, index) => (
              <div key={index} className="rounded-lg p-3 py-6 hover:shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out border-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{update.title}</h3>
                <p className="text-gray-500 text-sm">{update.date}</p>
                <p className="mt-2 text-gray-700">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ProtocolUpdates;
