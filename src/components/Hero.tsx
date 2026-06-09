export default function Hero() {
    return (
        <section className="hero" style={{backgroundImage: "url('/hello.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="overlay">
                <h1>
                    HELLO, WELCOME TO <span>CoKarma</span>  
                </h1>

                <p>
                    Home
                </p>

                <button>
                    View More
                </button>
            </div>
        </section>
    );
}