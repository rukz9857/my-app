export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/CoKarma_logo1 2.png" alt="CoKarma Logo" style={{height: '40px'}} />
                <h2>CoKarma</h2>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Profile</li>
                <li>Tickets</li>
                <li>Offers</li>
                <li>Space</li>
                <li>Contact Us</li>
            </ul>

            <button className="login-btn">
                <img src="/Group.png" alt="icon" style={{width: '20px', height: '20px', marginRight: '8px'}} />
                Login / Signup
            </button>
        </nav>
    );
}