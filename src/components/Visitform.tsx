import React from 'react';

export default function VisitForm() {
    return (
        <div className="w-full flex justify-center relative z-10 mt-[-60px] max-[900px]:mt-[-20px] px-[5%]">
            <div className="bg-white w-full max-w-[1140px] p-[30px_40px] rounded-[8px] shadow-[0px_10px_30px_rgba(0,0,0,0.06)]">

                <h2 className="text-[24px] font-bold text-[#1E1E1E] m-0 mb-1">Request for a visit</h2>
                <p className="text-[13px] text-[#888888] m-0 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="flex flex-col md:flex-row items-end gap-5 w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">

                        {/* Name Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] text-[#444444] font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full h-[45px] px-4 border border-[#CCCCCC] rounded-[4px] text-[14px] text-[#333333] bg-white outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] text-[#444444] font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full h-[45px] px-4 border border-[#CCCCCC] rounded-[4px] text-[14px] text-[#333333] bg-white outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Mobile Input */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] text-[#444444] font-medium">Mobile</label>
                            <input
                                type="text"
                                className="w-full h-[45px] px-4 border border-[#CCCCCC] rounded-[4px] text-[14px] text-[#333333] bg-white outline-none focus:border-[#CF173C] transition-colors duration-200"
                            />
                        </div>

                        {/* Select City Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] text-[#444444] font-medium">Select city</label>
                            <div className="relative w-full">
                                <select
                                    defaultValue=""
                                    className="w-full h-[45px] pl-4 pr-10 border border-[#CCCCCC] rounded-[4px] text-[14px] text-[#888888] bg-white outline-none appearance-none cursor-pointer focus:border-[#CF173C] transition-colors duration-200"
                                >
                                    <option value="" disabled>Select city</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="pune">Pune</option>
                                    <option value="bangalore">Bangalore</option>
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">▼</div>
                            </div>
                        </div>

                    </div>

                    {/* Submit Request Button Container */}
                    <div className="w-full md:w-auto shrink-0">
                        <button className="w-full md:w-[76px] h-[70px] bg-gradient-to-b from-[#A31D1D] to-[#6B0000] text-white rounded-[6px] flex flex-col items-center justify-center gap-1.5 shadow-[0px_4px_12px_rgba(163,29,29,0.2)] hover:opacity-95 transition-all duration-200 border-none cursor-pointer">
                            <img src="/searchnormal1.png" alt="submit" className="w-[18px] h-[18px] brightness-0 invert" />
                            <span className="text-[11px] font-medium tracking-[0.5px]">Request</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}