
import { useNavigate } from "react-router-dom";
import { submitquotationschema } from "../../components/FormSchema/submitquotation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function SubmitQuotation() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(submitquotationschema)
    });
    function onSubmit(data) {
        console.log(data);
        alert("Quotation submitted successfully");
        navigate("/myquotations", { state: data });
    }
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Submit Quotation</h1>
                    <p className="text-slate-500 text-center mb-8">Provide your vehicle details and quotation amount</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block text-slate-700 font-semibold mb-2">Vehicle Type:</label>
                        <input type="text" placeholder="Enter vehicle type" {...register("vehicleType")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 mb-2" />
                        {errors.vehicleType && <p className="text-red-500 text-sm mb-4">{errors.vehicleType.message}</p>}
                        <label className="block text-slate-700 font-semibold mb-2">Vehicle Registration Number:</label>
                        <input type="text" placeholder="Enter vehicle registration number" {...register("vehicleNumber")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 mb-2" />
                        {errors.vehicleNumber && <p className="text-red-500 text-sm mb-4">{errors.vehicleNumber.message}</p>}
                        <label className="block text-slate-700 font-semibold mb-2">Quotation Amount (₹):</label>
                        <input type="number" placeholder="Enter your quotation amount" {...register("amount")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 mb-2" />
                        {errors.amount && <p className="text-red-500 text-sm mb-4">{errors.amount.message}</p>}
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit Quotation</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default SubmitQuotation;
