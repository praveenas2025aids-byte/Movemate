
import { useNavigate } from "react-router-dom";

function AvailableRequests() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Available Goods Requests</h1>

            <h2>Customer Requests</h2>

            <p>No customer requests available yet.</p>

            <button onClick={() => navigate("/submitquotation")}>Submit Quotation</button>
            <br /><br />

            <button onClick={() => navigate("/driverdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default AvailableRequests;
