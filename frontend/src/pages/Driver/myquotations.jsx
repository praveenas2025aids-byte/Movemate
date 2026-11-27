
import { useLocation, useNavigate } from "react-router-dom";

function MyQuotations() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">My Quotations</h1>
                    <p className="text-slate-500 text-center mb-10">View the quotations you have submitted</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        {formdata ? (
                            <>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Quotation Details</h2>
                                <div className="space-y-5">
                                    <p className="text-slate-700"><span className="font-semibold">Vehicle Type:</span> {formdata.vehicleType}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Vehicle Registration Number:</span> {formdata.vehicleNumber}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Quotation Amount:</span> ₹{formdata.amount}</p>
                                </div>
                            </>
                        ) : (
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
                                <p className="text-slate-500">No quotations submitted yet.</p>
                            </div>
                        )}
                        <button onClick={() => navigate("/driverdashboard")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 mt-8">Back to Dashboard</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyQuotations;
