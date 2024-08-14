import React from 'react';

const features = [
    {
        title: '0% Interest Rate',
        description: 'StableBase offers a 0% interest rate, making it more accessible for borrowing without the added cost.',
    },
    {
        title: 'User-Governed Fees',
        description: 'Origination fees are governed by users, allowing for flexible and community-driven rate adjustments.',
    },
    {
        title: 'Cash Reserve Ratio (CRR)',
        description: 'A user-defined CRR helps manage the coin supply and enhances stability in various market conditions.',
    },
];

const LiquityFeatures: React.FC = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-3 md:px-8 lg:gap-10 lg:px-20 xl:gap-14 xl:px-40 p-3 bg-slate-900">
                {features.map((feature, index) => (
                    <div key={index} className="rounded-lg p-3 py-6 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out border-y-2">
                        <div className="flex flex-column place-items-center">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Logo"
                                className="h-10 w-10 mr-3"
                            />
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        </div>
                        <p className="mt-3 text-slate-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LiquityFeatures;
