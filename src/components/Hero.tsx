import React from 'react';

export default function Hero() {
    return (
        /* 1. This outer section aligns the whole container with your Navbar limits */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">

            {/* 2. The Inner Box: 
                 - We use 'relative' so all background elements stay bounded inside.
                 - 'w-full' makes sure it spans all the way from the left boundary to the right boundary.
                 - 'min-h-[480px]' or 'aspect-[21/9]' gives it a solid, responsive widescreen height.
            */}
            <div className="relative w-full min-h-[480px] md:h-[520px] overflow-hidden  shadow-md flex items-center justify-between px-[3%]">

                {/* Background Hero Image - Must have absolute inset-0 to fill the frame */}
                <img
                    src="/hello.png.png"
                    alt="Coworking Space Background"
                    className="absolute inset-0 w-full h-full object-cover z-[1]"
                />

                {/* Dark Overlay to pop text readability */}
                <div className="absolute inset-0 bg-black/40 z-[2]" />

                {/* Left Navigation Arrow */}
                <button className="relative z-[10] bg-white/80 w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 shadow-md hover:bg-white hover:scale-[1.08] transition-all duration-200 border-none cursor-pointer">
                    <img src="/arrowleft.png" alt="previous" className="w-[18px] h-[18px]" />
                </button>

                {/* Center/Right Text Block Content Layout */}
                <div className="absolute inset-0 flex justify-center md:justify-end items-center px-6 md:pr-[8%] z-[3] pointer-events-none">
                    <div className="max-w-full md:max-w-[520px] pointer-events-auto text-center md:text-left">
                        <h1 className="text-white text-[32px] md:text-[42px] font-bold leading-[1.2] mb-4">
                            Lorem ipsum dolor sit amet <br className="hidden md:inline" /> consectetur adipisicing elit
                        </h1>
                        <p className="text-[#dddddd] text-[13px] md:text-[14px] tracking-[0.3px] leading-[1.6] mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur
                            voluptatum laborum numquam blanditiis harum quisquam
                            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                        </p>
                        <button className="bg-gradient-to-r from-[#CF173C] to-[#1E1E1E] text-white py-3 px-8 text-[14px] font-semibold rounded-[4px] shadow-lg hover:opacity-90 transition-opacity duration-200 border-none cursor-pointer">
                            View More
                        </button>
                    </div>
                </div>

                {/* Right Navigation Arrow */}
                <button className="relative z-[10] bg-white/80 w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 shadow-md hover:bg-white hover:scale-[1.08] transition-all duration-200 border-none cursor-pointer">
                    <img src="/arrowright.png" alt="next" className="w-[18px] h-[18px]" />
                </button>

            </div>
        </section>
    );
}