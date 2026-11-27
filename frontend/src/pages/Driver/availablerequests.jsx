
import { useNavigate } from "react-router-dom";

function AvailableRequests() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Available Goods Requests</h1>
                    <p className="text-slate-500 text-center mb-10">Explore customer requests and submit your quotations</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Customer Requests</h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center mb-6">
                            <p className="text-slate-500">No customer requests available yet.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => navigate("/submitquotation")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit Quotation</button>
                            <button onClick={() => navigate("/driverdashboard")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AvailableRequests;
