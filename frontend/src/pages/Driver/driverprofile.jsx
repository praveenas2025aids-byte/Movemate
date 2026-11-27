
import { useNavigate, useLocation } from "react-router-dom";

function DriverProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Driver Profile</h1>
                    <p className="text-slate-500 text-center mb-10">View your personal information</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Details</h2>
                        {formdata ? (
                            <div className="space-y-5">
                                <p className="text-slate-700"><span className="font-semibold">Driver Name:</span> {formdata.name}</p>
                                <p className="text-slate-700"><span className="font-semibold">Phone Number:</span> {formdata.phone}</p>
                                <p className="text-slate-700"><span className="font-semibold">Experience:</span> {formdata.experience} years</p>
                            </div>
                        ) : (
                            <p className="text-slate-500">Driver details are not available.</p>
                        )}
                        <button onClick={() => navigate("/driverdashboard")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 mt-8">Back to Dashboard</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DriverProfile;
