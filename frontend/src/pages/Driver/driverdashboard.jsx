
import { useNavigate, useLocation } from "react-router-dom";

function DriverDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl shadow-lg text-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-900 mb-3">Driver Dashboard</h1>
                        <h3 className="text-xl font-semibold text-slate-700 mb-3">Welcome to MoveMate!</h3>
                        <p className="text-slate-500">Phone Number: {formdata?.phone}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">What would you like to do?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <button onClick={() => navigate("/availablerequests")} className="bg-blue-600 text-white py-4 px-5 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">View Available Requests</button>
                            <button onClick={() => navigate("/myquotations")} className="bg-blue-600 text-white py-4 px-5 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">My Quotations</button>
                            <button onClick={() => navigate("/driverprofile", { state: formdata })} className="bg-blue-600 text-white py-4 px-5 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">My Profile</button>
                            <button onClick={() => navigate("/driverreviews")} className="bg-blue-600 text-white py-4 px-5 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">View My Reviews</button>
                            <button onClick={() => navigate("/")} className="border border-red-500 text-red-600 py-4 px-5 rounded-xl font-semibold hover:bg-red-50 transition duration-200 sm:col-span-2">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DriverDashboard;
