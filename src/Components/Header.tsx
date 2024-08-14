import React, { useEffect, useRef, useState } from 'react';

const Header: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState("");
    const hideTimeoutRef = useRef<number | undefined>();
    const modalRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setIsValid(emailRegex.test(email));
    };

    const handleSignUp = () => {
        alert("Email submitted: " + email);
        setIsModalOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    };

    const handleMouseEnterMenu = (menu: string) => {
        clearTimeout(hideTimeoutRef.current);
        setHoveredMenu(menu);
    };

    const handleMouseLeaveMenu = () => {
        hideTimeoutRef.current = window.setTimeout(() => {
            setHoveredMenu("");
        }, 200); // Adjust delay as needed
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className=" mx-auto px-4 md:px-8 lg:px-16 xl:px-32 flex items-center justify-between py-4">
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Logo"
                        className="h-10 w-10 mr-3"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
                </div>
                <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
                    <ul className="flex gap-3 lg:gap-5 xl:gap-10">
                        <li className="group relative">
                            <a
                                href="#docs"
                                className="text-gray-700 font-medium group-hover:text-orange-500 transition-colors duration-300"
                            >
                                Docs
                            </a>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li className="group relative">
                            <a
                                href="#features"
                                className="text-gray-700 font-medium group-hover:text-orange-500 transition-colors duration-300"
                            >
                                Features
                            </a>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </li>
                        <li
                            className="group relative"
                            onMouseEnter={() => handleMouseEnterMenu("frontends")}
                            onMouseLeave={handleMouseLeaveMenu}
                        >
                            <span
                                className="text-gray-700 font-medium cursor-default group-hover:text-orange-500 transition-colors duration-300"
                            >
                                Frontends
                            </span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                            {hoveredMenu === "frontends" && (
                                <div
                                    className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg border"
                                    onMouseEnter={() => handleMouseEnterMenu("frontends")}
                                    onMouseLeave={handleMouseLeaveMenu}
                                >
                                    <a
                                        href="#use-liquidity"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Use Liquidity
                                    </a>
                                    <a
                                        href="#run-frontend"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Run a Frontend
                                    </a>
                                </div>
                            )}
                        </li>
                        <li
                            className="group relative"
                            onMouseEnter={() => handleMouseEnterMenu("more")}
                            onMouseLeave={handleMouseLeaveMenu}
                        >
                            <span
                                className="text-gray-700 font-medium cursor-default group-hover:text-orange-500 transition-colors duration-300"
                            >
                                More
                            </span>
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                            {hoveredMenu === "more" && (
                                <div
                                    className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg border"
                                    onMouseEnter={() => handleMouseEnterMenu("more")}
                                    onMouseLeave={handleMouseLeaveMenu}
                                >
                                    <a
                                        href="#blog"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="#analytics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Analytics
                                    </a>
                                    <a
                                        href="#about-us"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        About Us
                                    </a>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className="hidden md:block">
                    <button
                        onClick={toggleModal}
                        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Sign Up / Sign In
                    </button>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="header-menu-toggle focus:outline-none"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 md:w-8 md:h-8 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 md:w-8 md:h-8 text-slate-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="flex flex-col gap-3 md:hidden bg-gray-50 shadow-md px-4 pb-4">
                    <a href="#docs" className="block  text-gray-600 hover:bg-gray-100">Docs</a>
                    <a href="#features" className="block  text-gray-600 hover:bg-gray-100">Features</a>
                    <div>
                        <button
                            onClick={() => setHoveredMenu(hoveredMenu === "frontends" ? "" : "frontends")}
                            className="block text-gray-600 hover:bg-gray-100 w-full text-left"
                        >
                            Frontends
                        </button>
                        {hoveredMenu === "frontends" && (
                            <div className="ml-4 border rounded mt-1">
                                <a href="#use-liquidity" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Use Liquidity</a>
                                <a href="#run-frontend" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Run a Frontend</a>
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={() => setHoveredMenu(hoveredMenu === "more" ? "" : "more")}
                            className="block text-gray-600 hover:bg-gray-100 w-full text-left"
                        >
                            More
                        </button>
                        {hoveredMenu === "more" && (
                            <div className="ml-4 border rounded mt-1">
                                <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</a>
                                <a href="#analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Analytics</a>
                                <a href="#about-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-200"
                        >
                            Sign Up / Sign In
                        </button>
                    </div>
                </nav>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div ref={modalRef} className="bg-white rounded-lg p-6 w-11/12 max-w-md">
                        <h2 className="text-xl font-bold mb-4">Sign Up / Sign In</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className={`w-full px-3 p-2 mb-4 border rounded focus:outline-none ${isValid ? "border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent" : "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"}`}
                        />
                        <button
                            onClick={handleSignUp}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 w-full"
                        >
                            Submit
                        </button>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-200 w-full mt-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
