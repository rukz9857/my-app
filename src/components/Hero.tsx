export default function Hero() {
    return (
        <section className="relative w-full h-[75vh] overflow-hidden bg-[#1a1a1a]">

            <img
                src="/hello.png.png"
                alt="Coworking Space Background"
                className="absolute inset-0 w-full h-full object-cover z-[1]"
            />

            <div className="absolute inset-0 bg-black/40 z-[2]" />

            <div className="relative w-full h-full flex justify-between items-center px-[5%] z-[3]">

                <button className="bg-white/80 w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 shadow-md hover:bg-white hover:scale-[1.08] transition-all duration-200 border-none cursor-pointer">
                    <img src="/arrowleft.png" alt="previous" className="w-[18px] h-[18px]" />
                </button>

                <div className="absolute inset-0 flex justify-center md:justify-end items-center px-5 md:pr-[8%] pointer-events-none">
                    <div className="max-w-full md:max-w-[520px] pointer-events-auto">
                        <h1 className="text-white text-[42px] font-bold leading-[1.3] mb-4">
                            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit
                        </h1>
                        <p className="text-[#dddddd] text-[14px] tracking-[0.3px] leading-[1.8] mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br />
                            molestiae quas vel sint commodi repudiandae consequuntur<br />
                            voluptatum laborum numquam blanditiis harum quisquam<br />
                            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                        </p>
                        <button className="bg-gradient-to-r from-[#CF173C] to-[#1E1E1E] text-white py-3 px-8 text-[14px] font-semibold rounded-[4px] shadow-lg hover:opacity-90 transition-opacity duration-200 border-none cursor-pointer">
                            View More
                        </button>
                    </div>
                </div>

                <button className="bg-white/80 w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 shadow-md hover:bg-white hover:scale-[1.08] transition-all duration-200 border-none cursor-pointer">
                    <img src="/arrowright.png" alt="next" className="w-[18px] h-[18px]" />
                </button>

            </div>
        </section>
    );
}