
import { useNavigate } from "react-router-dom";

function BookingDetails() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-slate-100 px-4 py-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Booking Details</h1>
                    <p className="text-slate-500 text-center mb-10">View your confirmed goods transportation booking</p>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Goods Transportation Details</h2>
                        <div className="space-y-5">
                            <p className="text-slate-700"><span className="font-semibold">Customer Name:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Driver Name:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Pickup Location:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Destination:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Vehicle Type:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Vehicle Registration Number:</span></p>
                            <p className="text-slate-700"><span className="font-semibold">Quotation Amount:</span></p>
                            <p className="text-green-700 font-semibold">Booking Status: Confirmed</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button onClick={() => navigate("/tripstatus")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">View Trip Status</button>
                            <button onClick={() => navigate("/customerdashboard")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BookingDetails;
