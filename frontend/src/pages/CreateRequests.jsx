
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRequests() {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        goodsType: "",
        description: "",
        from: "",
        to: "",
        date: "",
        pickupTime: "",
        vehicleType: ""
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
        alert("Goods request submitted successfully");
        navigate("/myrequests", { state: formdata });
    };

    return (
        <>
            <h1>Create Goods Request</h1>

            <form onSubmit={handleSubmit}>
                <label>Goods Type:</label><br />
                <input type="text" name="goodsType" placeholder="Enter goods type" value={formdata.goodsType} onChange={handlechange} required />
                <br /><br />

                <label>Goods Description:</label><br />
                <textarea name="description" placeholder="Enter goods description" value={formdata.description} onChange={handlechange} required></textarea>
                <br /><br />

                <label>Pickup Location:</label><br />
                <input type="text" name="from" placeholder="Enter pickup location" value={formdata.from} onChange={handlechange} required />
                <br /><br />

                <label>Destination:</label><br />
                <input type="text" name="to" placeholder="Enter destination" value={formdata.to} onChange={handlechange} required />
                <br /><br />

                <label>Transportation Date:</label><br />
                <input type="text" name="date" placeholder="Enter date" value={formdata.date} onChange={handlechange} required />
                <br /><br />

                <label>Pickup Time:</label><br />
                <input type="text" name="pickupTime" placeholder="Enter pickup time" value={formdata.pickupTime} onChange={handlechange} required />
                <br /><br />

                <label>Required Vehicle Type:</label><br />
                <input type="text" name="vehicleType" placeholder="Enter vehicle type" value={formdata.vehicleType} onChange={handlechange} required />
                <br /><br />

                <button type="submit">Submit Request</button>
            </form>
        </>
    );
}

export default CreateRequests;
