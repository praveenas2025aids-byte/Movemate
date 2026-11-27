
import { useLocation, useNavigate } from "react-router-dom";

function ViewQuotations() {
    const navigate = useNavigate();
    const location = useLocation();
    const formdata = location.state;
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">View Quotations</h1>
                    <p className="text-slate-500 text-center mb-10">Compare driver quotations for your goods transportation request</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg mb-6">
                        {formdata === null ? (
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                                <p className="text-slate-500">No goods request details available.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Goods Request Details</h2>
                                <div className="space-y-5">
                                    <p className="text-slate-700"><span className="font-semibold">Goods Type:</span> {formdata.goodsType}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Goods Description:</span> {formdata.description}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Pickup Location:</span> {formdata.from}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Destination:</span> {formdata.to}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Transportation Date:</span> {formdata.date}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Pickup Time:</span> {formdata.pickupTime}</p>
                                    <p className="text-slate-700"><span className="font-semibold">Required Vehicle Type:</span> {formdata.vehicleType}</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Available Quotations</h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center mb-6">
                            <p className="text-slate-500">No driver quotations available yet.</p>
                        </div>
                        <button onClick={() => navigate("/customerdashboard")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Back to Dashboard</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ViewQuotations;
