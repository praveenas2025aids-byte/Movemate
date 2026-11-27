
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6 py-10">
                <h1 className="text-4xl font-bold text-blue-900 mb-3">Welcome to MoveMate</h1>
                <h3 className="text-xl font-semibold text-slate-700 mb-3">Goods Transportation Made Easy</h3>
                <p className="text-slate-500 text-center mb-10">Find the right vehicle and driver for your goods transportation needs.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl">
                    <div className="bg-white p-8 rounded-[2rem] shadow-lg w-full max-w-sm min-h-[380px] text-center flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-blue-900 mb-3">Customer</h2>
                        <p className="text-slate-500 mb-6">Post your goods request and find suitable drivers.</p>
                        <button onClick={() => navigate("/customerregister")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4">Customer Register</button>
                        <button onClick={() => navigate("/customerlogin")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">Customer Login</button>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-lg w-full max-w-sm min-h-[380px] text-center flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-blue-900 mb-3">Driver</h2>
                        <p className="text-slate-500 mb-6">Explore goods requests and submit your quotations.</p>
                        <button onClick={() => navigate("/driverregister")} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4">Driver Register</button>
                        <button onClick={() => navigate("/driverlogin")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50">Driver Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
