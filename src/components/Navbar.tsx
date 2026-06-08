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
                Login / Signup
            </button>
        </nav>
    );
}