
import { useNavigate, useLocation } from "react-router-dom";
import { loginschema } from "../../components/FormSchema/loginschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function DriverLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginschema)
    });
    function onSubmit(data) {
        const registerdata = location.state;
        if (registerdata && data.phone === registerdata.phone && data.password === registerdata.password) {
            console.log("registerdata", registerdata);
            console.log("logindata", data);
            alert("Driver login successful");
            navigate("/driverdashboard", { state: registerdata });
        } else {
            alert("Invalid phone number or password");
        }
    }
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Driver Login</h1>
                    <p className="text-slate-500 text-center mb-8">Welcome back to MoveMate</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block text-slate-700 font-semibold mb-2">Phone Number:</label>
                        <input type="text" placeholder="Enter phone number" {...register("phone")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.phone?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Password:</label>
                        <input type="password" placeholder="Enter password" {...register("password")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-6">{errors.password?.message}</p>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Login</button>
                    </form>
                    <p className="text-center text-slate-500 mt-6">New driver? <span onClick={() => navigate("/driverregister")} className="text-blue-600 font-semibold cursor-pointer hover:underline">Register</span></p>
                </div>
            </div>
        </>
    );
}
export default DriverLogin;
