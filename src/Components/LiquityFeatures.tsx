import React from 'react';

const LiquityFeatures: React.FC = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-3 md:px-8 lg:gap-10 lg:px-16 xl:gap-14 xl:px-32 p-3 bg-slate-200">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex flex-column place-items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Logo"
                            className="h-10 w-10 mr-3"
                        />
                        <h2 className="text-2xl font-bold">0% Interest Rate</h2>
                    </div>
                    <p className="text-gray-700 mt-3">
                        Liquity charges a small, one-time fee to borrow LUSD instead of highly variable interest rates.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-column place-items-center">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Logo"
                        className="h-10 w-10 mr-3"
                    />
                    <h2 className="text-2xl font-bold">110% Collateral Ratio*</h2>
                    </div>
                    <p className="text-gray-700 mt-3">
                        Liquity's efficient liquidation mechanism allows users to get the most liquidity for their ETH.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-column place-items-center">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Logo"
                        className="h-10 w-10 mr-3"
                    />
                    <h2 className="text-2xl font-bold">Unstoppable Stablecoin</h2>
                    </div>
                    <p className="text-gray-700 mt-3">
                        LUSD is an immutable, decentralized stablecoin with no centralized counterparty risk.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LiquityFeatures;
