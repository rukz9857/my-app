import React from 'react';

// 1. IMPORT YOUR IMAGES HERE (If using a bundler like Vite, Next.js, or Create React App)
// Example: import wifiIcon from '../assets/icons/wifi.png';
// Example: import robotIcon from '../assets/icons/robot.png';

export default function Benefits() {
    const cardsData = [
        // Replace the strings in "icon" with either imported variables (e.g., wifiIcon) 
        // or public absolute paths (e.g., "/icons/wifi.png")
        { id: 1, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 1 (Far Left)

        { id: 2, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 2 (Top)
        { id: 3, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 2 (Bottom)

        { id: 4, icon: "/icons/wifi.png", text: "Lorem ipsum" },          // Col 3 (Top - Wifi)  /
        { id: 5, icon: "/icons/weights.png", text: "Lorem ipsum" },       // Col 3 (Bottom - Weights)

        { id: 6, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 4 (Top)
        { id: 7, icon: "/icons/robot.png", text: "Lorem ipsum", isActive: true }, // Col 4 (Bottom - Red Robot)

        { id: 8, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 5 (Top)
        { id: 9, icon: "/icons/default-icon.png", text: "Lorem ipsum" },  // Col 5 (Bottom)

        { id: 10, icon: "/icons/default-icon.png", text: "Lorem ipsum" }, // Col 6 (Top)
        { id: 11, icon: "/icons/default-icon.png", text: "Lorem ipsum" }, // Col 6 (Bottom)

        { id: 12, icon: "/icons/default-icon.png", text: "Lorem ipsum" }, // Col 7 (Far Right)
    ];

    // Grouped into the 7 visual columns
    const columns = [
        [cardsData[0]],               // Col 1
        [cardsData[1], cardsData[2]], // Col 2
        [cardsData[3], cardsData[4]], // Col 3
        [cardsData[5], cardsData[6]], // Col 4
        [cardsData[7], cardsData[8]], // Col 5
        [cardsData[9], cardsData[10]],// Col 6
        [cardsData[11]],              // Col 7
    ];

    // Slightly increased offsets to account for the bigger card scale
    const columnOffsets = [
        "translateY(15px)",   // Col 1
        "translateY(-15px)",  // Col 2
        "translateY(15px)",   // Col 3
        "translateY(-15px)",  // Col 4
        "translateY(20px)",   // Col 5
        "translateY(-15px)",  // Col 6
        "translateY(15px)",   // Col 7
    ];

    return (
        <section className="w-full bg-[#FCFBF7] text-center py-[80px] overflow-hidden">
            <h2 className="text-[32px] font-bold text-[#1E1E1E] tracking-[1px] m-0 mb-3">
                YOUR BENEFITS
            </h2>
            <p className="text-[15px] text-[#CF173C] m-0 mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* Main horizontal track: CHANGED gap-3 to gap-5 for roomy breathing space */}
            <div className="flex justify-center items-center gap-5 max-w-[1440px] mx-auto mb-[120px] px-6">
                {columns.map((columnCards, colIndex) => {
                    const isFirstColumn = colIndex === 0;
                    const isLastColumn = colIndex === 6;

                    return (
                        <div
                            key={colIndex}
                            // CHANGED: Increased column items layout gap from gap-3 to gap-5
                            className="flex flex-col gap-5 justify-center shrink-0 transition-transform duration-300"
                            style={{
                                transform: columnOffsets[colIndex],
                                opacity: isFirstColumn || isLastColumn ? 0.35 : 1,
                            }}
                        >
                            {columnCards.map((card) => (
                                <div
                                    key={card.id}
                                    /* CHANGED: 
                                       - Scale increased from w-[145px] h-[145px] to w-[190px] h-[190px]
                                       - Rounded corners increased slightly to rounded-[16px] to stay smooth
                                       - Internal padding set to p-5 for a premium spacious feel
                                    */
                                    className={`w-[190px] h-[190px] rounded-[16px] p-5 flex flex-col items-center justify-center gap-4 transition-all duration-200 cursor-pointer
                                        ${card.isActive
                                            ? "bg-gradient-to-b from-[#CF173C] to-[#2B050B] text-white border-none shadow-[0px_16px_32px_rgba(207,23,60,0.25)] scale-[1.03]"
                                            : "bg-white border border-[#EBEBEB] text-[#333333] hover:shadow-[0px_10px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1"
                                        }
                                    `}
                                >
                                    {/* Icon Container: CHANGED from w-[50px] h-[50px] to w-[64px] h-[64px] */}
                                    <div
                                        className={`w-[64px] h-[64px] border rounded-full flex items-center justify-center overflow-hidden p-3.5 shrink-0
                                            ${card.isActive ? "border-white/30" : "border-[#E2E2E2] bg-[#fdfdfd]"}
                                        `}
                                    >
                                        <img
                                            src={card.icon}
                                            alt={card.text}
                                            className={`w-full h-full object-contain ${card.isActive ? "invert-0 brightness-200" : ""}`}
                                        />
                                    </div>

                                    {/* Text Content: CHANGED text scale from text-[13px] to text-[15px] */}
                                    <p className="text-[15px] font-semibold m-0 tracking-[0.3px] text-center line-clamp-2">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>

            {/* Bottom Help Section */}
            <div className="text-center pt-2">
                <p className="text-[15px] font-bold text-[#1E1E1E] m-0 mb-4 tracking-[1px]">
                    NEED HELP ?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[50px]">
                    <a href="#contact" className="text-[13px] font-bold text-[#CF173C] no-underline tracking-[0.8px] hover:opacity-70 transition-opacity">
                        CONTACT OUR SPECIALISTS &rarr;
                    </a>
                    <a href="#details" className="text-[13px] font-bold text-[#CF173C] no-underline tracking-[0.8px] hover:opacity-70 transition-opacity">
                        VIEW BENEFITS DETAILS &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}