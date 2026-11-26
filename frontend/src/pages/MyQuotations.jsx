
import { useLocation, useNavigate } from "react-router-dom";

function MyQuotations() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;

    return (
        <>
            <h1>My Quotations</h1>

            {formdata === null ? (
                <p>No quotations submitted yet.</p>
            ) : (
                <>
                    <h2>Quotation Details</h2>
                    <p>Vehicle Type: {formdata.vehicleType}</p>
                    <p>Vehicle Registration Number: {formdata.vehicleNumber}</p>
                    <p>Quotation Amount: {formdata.amount}</p>
                </>
            )}

            <button onClick={() => navigate("/driverdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default MyQuotations;
