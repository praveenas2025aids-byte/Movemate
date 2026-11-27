
import { useNavigate } from "react-router-dom";
import { driverregisterschema } from "../../components/FormSchema/driverregisterschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function DriverRegister() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(driverregisterschema)
    });
    function onSubmit1(data) {
        console.log(data);
        alert("Driver registration successful");
        navigate("/driverlogin", { state: data });
    }
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Driver Registration</h1>
                    <p className="text-slate-500 text-center mb-8">Create your MoveMate driver account</p>
                    <form onSubmit={handleSubmit(onSubmit1)}>
                        <label className="block text-slate-700 font-semibold mb-2">Name:</label>
                        <input type="text" placeholder="Enter your name" {...register("name")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-4">{errors.name?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Phone Number:</label>
                        <input type="text" placeholder="Enter your phone number" {...register("phone")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-4">{errors.phone?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Experience (in years):</label>
                        <input type="text" placeholder="Enter your experience" {...register("experience")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-4">{errors.experience?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Password:</label>
                        <input type="password" placeholder="Create your password" {...register("password")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-6">{errors.password?.message}</p>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Register</button>
                    </form>
                    <p className="text-center text-slate-500 mt-6">Already registered? <span onClick={() => navigate("/driverlogin")} className="text-blue-600 font-semibold cursor-pointer hover:underline">Login</span></p>
                </div>
            </div>
        </>
    );
}
export default DriverRegister;
