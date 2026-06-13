import React from 'react';

export default function Navbar() {
    return (
        /* REMOVED max-w-7xl from header to allow full viewport width */
        <header className="w-full mt-0 relative z-[1000]">

            {/* Top Bar - Stretches full width background */}
            <div className="w-full bg-[#FCFBFA] border-b border-[#EAEAEA] text-[13px] text-[#555555] shadow-sm">
                {/* Inner Content Wrapper aligns elements to the 7xl page grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
                    <div className="flex items-center gap-4">
                        <a href="tel:+9154345533" className="flex items-center gap-1.5 no-underline text-[#555555]">
                            <img src="/Vector.png" alt="call" className="w-4 h-4" />
                            (+91) 54345533
                        </a>
                        <span className="text-[#CCCCCC] text-[16px]">|</span>
                        <a href="#map" className="flex items-center gap-1.5 no-underline text-[#555555]">
                            <img src="/location.png" alt="location" className="w-4 h-4" />
                            Location Map
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <img src="/facebook.jpg" alt="Facebook" className="h-5" />
                            <img src="/instagram.png" alt="Instagram" className="h-5" />
                            <img src="/play.png" alt="Play" className="h-5" />
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer">
                            <img src="/searchnormal1.png" alt="search" className="w-4 h-4" />
                            <span className="text-[13px] text-[#555555]">Search</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Row - Full Width Strip */}
            <div className="w-full bg-[#F7F1EB] flex shadow-sm">
                {/* Inner Content Container bounds the logo and links to matching grid layouts */}
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch">

                    {/* Logo Container Area - Remains securely in place */}
                    <div className="bg-white py-2 px-4 flex items-center justify-center relative z-[100] w-full md:w-auto rounded-none md:rounded-b-[14px] shadow-[2px_2px_8px_rgba(0,0,0,0.06)] mb-[-2px] shrink-0">
                        <img src="/CoKarma_logo1 2.png" alt="CoKarma Logo" className="h-[100px] w-auto block" />
                    </div>

                    {/* Links and Banner tracks */}
                    <div className="flex flex-col flex-1 min-w-0">
                        {/* Navigation Links */}
                        <div className="flex justify-between items-center py-4 pl-6 pr-2 bg-[#F7F1EB] w-full flex-1">
                            <ul className="flex list-none gap-[30px] m-0 p-0 overflow-x-auto whitespace-nowrap scrollbar-none">
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Home</li>
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Profile</li>
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Tickets</li>
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Offers</li>
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Space</li>
                                <li className="text-[15px] font-medium text-[#333333] cursor-pointer hover:text-[#8B0000] transition-colors duration-200">Contact Us</li>
                            </ul>
                            <div className="flex items-center gap-2 text-[14px] font-medium text-[#333333] cursor-pointer ml-auto hover:text-[#8B0000] shrink-0 pl-4">
                                <img src="/Group.png" alt="icon" className="w-4 h-4" />
                                <span className="hidden sm:inline">Login / Signup</span>
                            </div>
                        </div>

                        {/* Announcement Ticker Bar */}
                        <div className="bg-gradient-to-r from-[#8B0000] to-[#A31D1D] text-white py-2.5 px-6 text-[13px] tracking-[0.4px] flex items-center gap-2.5 w-full">
                            <span className="flex-1 text-center truncate">
                                # Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <a href="#details" className="no-underline text-white font-semibold ml-1.5 whitespace-nowrap">
                                    More Details &rarr;
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </header>
    );
}