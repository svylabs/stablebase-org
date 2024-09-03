import React, { useState } from 'react';

const faqs = [
    {
        question: "What is Liquity?",
        answer:
            "Liquity is a decentralized borrowing protocol that allows you to draw 0% interest loans against Ether used as collateral. Loans are paid out in LUSD - a USD pegged stablecoin, and need to maintain a minimum collateral ratio of only 110%. In addition to the collateral, the loans are secured by a Stability Pool containing LUSD and by fellow borrowers collectively acting as guarantors of last resort. Liquity as a protocol is non-custodial, immutable and governance-free.",
    },
    {
        question: "How can I use Liquity?",
        answer:
            "To use Liquity, you need to deposit Ether as collateral and then you can borrow LUSD against it.",
    },
    {
        question: "What are the key benefits of Liquity?",
        answer:
            "Key benefits include 0% interest rates, a low collateral ratio, and a governance-free protocol.",
    },
    {
        question: "How can I earn money on Liquity?",
        answer:
            "You can earn money on Liquity by providing stability liquidity and earning liquidation gains.",
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">FAQ</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                    <button
                        className="w-full text-left p-5 bg-white shadow-lg rounded-lg hover:bg-slate-100 transition-colors duration-300 flex items-center justify-between"
                        onClick={() => toggleAnswer(index)}
                    >
                        <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                        <span
                            className={`text-2xl text-gray-600 transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                }`}
                        >
                            {activeIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="p-5 bg-slate-50 rounded-lg mt-2 shadow-inner">
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
