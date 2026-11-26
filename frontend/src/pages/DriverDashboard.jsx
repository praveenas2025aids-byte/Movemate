
import { useNavigate, useLocation } from "react-router-dom";

function DriverDashboard() {

    const navigate = useNavigate();
    const location = useLocation();

    const formdata = location.state;

    return (
        <>
            <h1>Driver Dashboard</h1>

            <h3>Welcome to MoveMate!</h3>

            <p>Phone Number: {formdata.phone}</p>

            <h2>What would you like to do?</h2>

            <button onClick={() => navigate("/availablerequests")}>View Available Requests</button>
            <br /><br />

            <button onClick={() => navigate("/myquotations")}>My Quotations</button>
            <br /><br />

            <button onClick={() => navigate("/driverprofile")}>My Profile</button>
            <br /><br />

            <button onClick={() => navigate("/driverreviews")}>View My Reviews</button>
            <br /><br />

            <button onClick={() => navigate("/")}>Logout</button>
        </>
    );
}

export default DriverDashboard;
