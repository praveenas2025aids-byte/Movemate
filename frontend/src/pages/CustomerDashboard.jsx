
import { useNavigate, useLocation } from "react-router-dom";

function CustomerDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <h1>Customer Dashboard</h1>
            <h3>Welcome to MoveMate!</h3>
            {formdata === null ? (
                <p>Welcome, Customer</p>
            ) : (
                <p>Phone Number: {formdata.phone}</p>
            )}
            <h2>Choose Your Option</h2>
            <button onClick={() => navigate("/createrequests")}>Create Goods Request</button>
            <br /><br />
            <button onClick={() => navigate("/myrequests")}>My Requests</button>
            <br /><br />
            <button onClick={() => navigate("/viewquotations")}>View Quotations</button>
            <br /><br />
            <button onClick={() => navigate("/")}>Logout</button>
        </>
    );
}
export default CustomerDashboard;
