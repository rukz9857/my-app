export default function Hero() {
    return (
        <>
            {/* PHASE 4: PROMO BANNER */}
            <div className="promo-banner">
                <span>Free Sites.</span>
                <a href="#details">More Details &rarr;</a>
            </div>

            {/* PHASE 5: HERO CONTENT SECTION */}
            <section className="hero">
                <div className="overlay">
                    <h1>
                        HELLO, WELCOME TO <span>CoKarma</span>
                    </h1>

                    <p>Home</p>

                    <button className="hero-btn">
                        View More
                    </button>
                </div>
            </section>
        </>
    );
}