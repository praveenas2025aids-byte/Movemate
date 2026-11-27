
import { useNavigate, useLocation } from "react-router-dom";

function CustomerDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-md text-center mb-8">
                        <h1 className="text-3xl font-bold text-blue-900 mb-3">Customer Dashboard</h1>
                        <h3 className="text-xl font-semibold text-slate-700 mb-3">Welcome to MoveMate!</h3>
                        <p className="text-slate-500">{formdata ? `Phone Number: ${formdata.phone}` : "Welcome, Customer"}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Choose Your Option</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <button onClick={() => navigate("/createrequests")} className="bg-blue-600 text-white py-5 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">Create Goods Request</button>
                            <button onClick={() => navigate("/myrequests")} className="bg-blue-600 text-white py-5 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">My Requests</button>
                            <button onClick={() => navigate("/viewquotations")} className="bg-blue-600 text-white py-5 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">View Quotations</button>
                            <button onClick={() => navigate("/")} className="border border-red-500 text-red-600 py-5 px-4 rounded-xl font-semibold hover:bg-red-50 transition duration-200">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CustomerDashboard;
