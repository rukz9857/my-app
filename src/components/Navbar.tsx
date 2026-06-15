import React from "react";

export default function Navbar() {
  return (
    /* REMOVED max-w-7xl from header to allow full viewport width */
    <header className="w-full mt-0 relative z-[1000]">
      {/* Top Bar - Stretches full width background */}
      <div className="w-full bg-white text-[13px] text-[#555555] ">
        {/* Inner Content Wrapper aligns elements to the 7xl page grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+9154345533"
              className="flex items-center gap-1.5 no-underline text-[#555555]"
            >
              <img src="/Vector.png" alt="call" className="w-4 h-4" />
              (+91) 54345533
            </a>
            <span className="text-[#CCCCCC] text-[16px]">|</span>
            <a
              href="#map"
              className="flex items-center gap-1.5 no-underline text-[#555555]"
            >
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
      <div className="w-full bg-[#F7F1EB] shadow-md">
        <div className="max-w-8xl mx-15  relative bg-[#F7F1EB] ">
          {/* Top Navigation */}
          <div className="flex pt-6 bg-[#F7F1EB]">
            {/* Logo - floating rounded card, inset to align with content gutter */}
            <div className="bg-white rounded-t-[12px]  z-20 relative flex-none flex items-center justify-center px-3">
              <img
                src="/CoKarma_logo1 2.png"
                alt="CoKarma Logo"
                className="h-[120px] w-auto object-contain"
              />
            </div>

            {/* Right Side */}
            <div className="flex-1  bg-[#F7F1EB]">
              {/* Menu */}
              <div className="h-[80px] flex items-center justify-between pl-10 pr-2">
                <ul className="flex items-center gap-12 text-[16px] font-medium text-[#333333]">
                  <li className="cursor-pointer hover:text-[#8B0000]">Home</li>
                  <li className="cursor-pointer hover:text-[#8B0000]">
                    Profile
                  </li>
                  <li className="cursor-pointer hover:text-[#8B0000]">
                    Tickets
                  </li>
                  <li className="cursor-pointer hover:text-[#8B0000]">
                    Offers
                  </li>
                  <li className="cursor-pointer hover:text-[#8B0000]">Space</li>
                  <li className="cursor-pointer hover:text-[#8B0000]">
                    Contact Us
                  </li>
                </ul>

                <div className="flex items-center gap-3 text-[16px] text-[#333333] font-medium cursor-pointer hover:text-[#8B0000]">
                  <img src="/Group.png" alt="User" className="w-8 h-8" />
                  <span>Login / Signup</span>
                </div>
              </div>

              {/* Announcement Bar */}
              <div className="h-[52px] bg-gradient-to-r from-[#8B0000] to-[#A31D1D] flex items-center justify-center px-8 text-white">
                <span className="text-[14px] font-normal">#</span>

                <span className="ml-4 text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                <a
                  href="#details"
                  className="ml-8 font-semibold text-[14px] flex items-center gap-2"
                >
                  More Details
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
