
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubmitQuotation() {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        vehicleType: "",
        vehicleNumber: "",
        amount: ""
    });

    function handlechange(e) {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        alert("Quotation submitted successfully");
        navigate("/myquotations", { state: formdata });
    };

    return (
        <>
            <h1>Submit Quotation</h1>

            <form onSubmit={handleSubmit}>
                <label>Vehicle Type:</label><br />
                <input type="text" name="vehicleType" placeholder="Enter vehicle type" value={formdata.vehicleType} onChange={handlechange} required />
                <br /><br />

                <label>Vehicle Registration Number:</label><br />
                <input type="text" name="vehicleNumber" placeholder="Enter vehicle registration number" value={formdata.vehicleNumber} onChange={handlechange} required />
                <br /><br />

                <label>Quotation Amount (₹):</label><br />
                <input type="text" name="amount" placeholder="Enter your quotation amount" value={formdata.amount} onChange={handlechange} required />
                <br /><br />

                <button type="submit">Submit Quotation</button>
            </form>
        </>
    );
}

export default SubmitQuotation;
