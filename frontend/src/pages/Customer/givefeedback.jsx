
import { useNavigate } from "react-router-dom";
import { feedbackschema } from "../../components/FormSchema/feedback";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function GiveFeedback() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(feedbackschema)
    });
    function onSubmit(data) {
        console.log(data);
        alert("Feedback submitted successfully");
        navigate("/customerdashboard");
    }
    return (
        <>
            <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">Give Feedback</h1>
                    <p className="text-slate-500 text-center mb-8">Share your experience with the driver</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block text-slate-700 font-semibold mb-2">Driver Rating (1 to 5):</label>
                        <input type="text" placeholder="Enter rating" {...register("rating")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
                        <p className="text-red-500 text-sm mt-1 mb-5">{errors.rating?.message}</p>
                        <label className="block text-slate-700 font-semibold mb-2">Written Feedback:</label>
                        <textarea placeholder="Enter your feedback" {...register("feedback")} className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"></textarea>
                        <p className="text-red-500 text-sm mt-1 mb-6">{errors.feedback?.message}</p>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">Submit Feedback</button>
                    </form>
                    <button onClick={() => navigate("/customerdashboard")} className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200 mt-4">Back to Dashboard</button>
                </div>
            </div>
        </>
    );
}
export default GiveFeedback;
