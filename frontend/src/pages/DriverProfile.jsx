
import { useNavigate } from "react-router-dom";

function DriverProfile() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Driver Profile</h1>

            <h2>Personal Details</h2>

            <p>Driver Name:</p>
            <p>Phone Number:</p>
            <p>Experience:</p>

            <button onClick={() => navigate("/driverdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default DriverProfile;
