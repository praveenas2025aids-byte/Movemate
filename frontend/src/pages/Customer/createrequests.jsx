
import { useNavigate } from "react-router-dom";
import { createrequestschema } from "../../components/FormSchema/createrequest";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateRequests() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createrequestschema)
    });
    function onSubmit(data) {
        console.log(data);
        alert("Goods request submitted successfully");
        navigate("/myrequests", { state: data });
    }
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Create Goods Request</h1>
                    <p className="text-slate-500 text-center mb-8">Provide your goods transportation details</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block text-slate-700 font-semibold mb-2">Goods Type:</label>
                        <input type="text" placeholder="Enter goods type" {...register("goodsType")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.goodsType?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Goods Description:</label>
                        <textarea placeholder="Enter goods description" {...register("description")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"></textarea>
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.description?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Pickup Location:</label>
                        <input type="text" placeholder="Enter pickup location" {...register("from")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.from?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Destination:</label>
                        <input type="text" placeholder="Enter destination" {...register("to")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.to?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Transportation Date:</label>
                        <input type="text" placeholder="Enter date" {...register("date")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.date?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Pickup Time:</label>
                        <input type="text" placeholder="Enter pickup time" {...register("pickupTime")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.pickupTime?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Required Vehicle Type:</label>
                        <input type="text" placeholder="Enter vehicle type" {...register("vehicleType")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-6">{errors.vehicleType?.message}</p>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit Request</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default CreateRequests;
