
import { useNavigate } from "react-router-dom";

function BookingDetails() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Booking Details</h1>

            <h2>Goods Transportation Details</h2>

            <p>Customer Name:</p>
            <p>Driver Name:</p>
            <p>Pickup Location:</p>
            <p>Destination:</p>
            <p>Vehicle Type:</p>
            <p>Vehicle Registration Number:</p>
            <p>Quotation Amount:</p>
            <p>Booking Status: Confirmed</p>

            <button onClick={() => navigate("/tripstatus")}>View Trip Status</button>
            <br /><br />

            <button onClick={() => navigate("/customerdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default BookingDetails;
