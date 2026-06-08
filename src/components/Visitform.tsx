export default function VisitForm() {
    return (
        <div className="visit-form">
            <h2>Request for a visit</h2>

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

                <select>
                    <option>Select City</option>
                </select>

                <button>
                    Request
                </button>
            </div>
        </div>
    );
}
