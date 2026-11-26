
import { useLocation, useNavigate } from "react-router-dom";

function MyRequests() {

    const location = useLocation();
    const navigate = useNavigate();

    const formdata = location.state;

    return (
        <>
            <h1>My Goods Requests</h1>

            {formdata ? (
                <>
                    <p>Goods Type: {formdata.goodsType}</p>
                    <p>Goods Description: {formdata.description}</p>
                    <p>Pickup Location: {formdata.from}</p>
                    <p>Destination: {formdata.to}</p>
                    <p>Transportation Date: {formdata.date}</p>
                    <p>Pickup Time: {formdata.pickupTime}</p>
                    <p>Required Vehicle Type: {formdata.vehicleType}</p>

                    <button onClick={() => navigate("/viewquotations", { state: formdata })}>View Quotations</button>
                </>
            ) : (
                <p>No goods requests found.</p>
            )}

            <br /><br />
            <button onClick={() => navigate("/createrequests")}>Create Another Request</button>
            <br /><br />
            <button onClick={() => navigate("/customerdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default MyRequests;
