
import { useNavigate } from "react-router-dom";

function DriverReviews() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Driver Reviews</h1>

            <h2>Customer Ratings and Feedback</h2>

            <p>Average Rating: Not available yet.</p>

            <p>No customer reviews available yet.</p>

            <button onClick={() => navigate("/driverdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default DriverReviews;
