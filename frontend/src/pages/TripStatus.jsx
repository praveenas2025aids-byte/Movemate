
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TripStatus() {

    const navigate = useNavigate();

    const [status, setStatus] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(status);
        alert("Trip status updated successfully");
        navigate("/driverdashboard");
    }

    return (
        <>
            <h1>Trip Status</h1>

            <form onSubmit={handleSubmit}>
                <label>Enter Trip Status:</label><br />
                <input type="text" name="status" placeholder="Enter Started, In Transit or Completed" value={status} onChange={(e) => setStatus(e.target.value)} required />
                <br /><br />

                <button type="submit">Update Status</button>
            </form>

            <br />
            <button onClick={() => navigate("/driverdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default TripStatus;
