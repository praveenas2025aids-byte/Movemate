
import { useLocation, useNavigate } from "react-router-dom";

function ViewQuotations() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;

    return (
        <>
            <h1>View Quotations</h1>

            {formdata === null ? (
                <p>No goods request details available.</p>
            ) : (
                <>
                    <h2>Goods Request Details</h2>
                    <p>Goods Type: {formdata.goodsType}</p>
                    <p>Goods Description: {formdata.description}</p>
                    <p>Pickup Location: {formdata.from}</p>
                    <p>Destination: {formdata.to}</p>
                    <p>Transportation Date: {formdata.date}</p>
                    <p>Pickup Time: {formdata.pickupTime}</p>
                    <p>Required Vehicle Type: {formdata.vehicleType}</p>
                </>
            )}

            <h2>Available Quotations</h2>

            <p>No driver quotations available yet.</p>

            <button onClick={() => navigate("/customerdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default ViewQuotations;
