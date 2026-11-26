
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GiveFeedback() {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        rating: "",
        feedback: ""
    });

    function handlechange(e) {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formdata);
        alert("Feedback submitted successfully");
        navigate("/customerdashboard");
    }

    return (
        <>
            <h1>Give Feedback</h1>

            <form onSubmit={handleSubmit}>
                <label>Driver Rating (1 to 5):</label><br />
                <input type="text" name="rating" placeholder="Enter rating" value={formdata.rating} onChange={handlechange} required />
                <br /><br />

                <label>Written Feedback:</label><br />
                <textarea name="feedback" placeholder="Enter your feedback" value={formdata.feedback} onChange={handlechange} required></textarea>
                <br /><br />

                <button type="submit">Submit Feedback</button>
            </form>

            <br />
            <button onClick={() => navigate("/customerdashboard")}>Back to Dashboard</button>
        </>
    );
}

export default GiveFeedback;
