export default function VisitForm() {
    return (
        <div className="visit-form-container">
            <div className="visit-form">
                <h2>Request for a visit</h2>
                <p className="form-subtitle">Fill the Form</p>

                <div className="form-grid">
                    <input
                        type="text"
                        placeholder="Name"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        placeholder="Mobile"
                    />

                    <select defaultValue="Select City">
                        <option value="Select City" disabled>Select City</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="bangalore">Bangalore</option>
                    </select>

                    <button type="submit">
                        Request
                    </button>
                </div>
            </div>
        </div>
    );
}