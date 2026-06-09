export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
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
                <img src="/group.png" alt="icon" style={{width: '20px', height: '20px', marginRight: '8px'}} />
                Login / Signup
            </button>
        </nav>
    );
}