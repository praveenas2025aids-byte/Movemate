
import { useNavigate } from "react-router-dom";

function DriverReviews() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Driver Reviews</h1>
                    <p className="text-slate-500 text-center mb-10">See what customers say about your service</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Customer Ratings and Feedback</h2>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center mb-6">
                            <p className="text-slate-700 font-semibold mb-2">Average Rating</p>
                            <p className="text-2xl font-bold text-blue-900">Not available yet.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center mb-8">
                            <p className="text-slate-500">No customer reviews available yet.</p>
                        </div>
                        <button onClick={() => navigate("/driverdashboard")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Back to Dashboard</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DriverReviews;
