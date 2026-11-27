
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
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Trip Status</h1>
                    <p className="text-slate-500 text-center mb-8">Update the current status of your transportation trip</p>
                    <form onSubmit={handleSubmit}>
                        <label className="block text-slate-700 font-semibold mb-2">Enter Trip Status:</label>
                        <input type="text" name="status" placeholder="Enter Started, In Transit or Completed" value={status} onChange={(e) => setStatus(e.target.value)} required className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 mb-6" />
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Update Status</button>
                    </form>
                    <button onClick={() => navigate("/driverdashboard")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 mt-4">Back to Dashboard</button>
                </div>
            </div>
        </>
    );
}
export default TripStatus;
