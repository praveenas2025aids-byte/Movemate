
import { useNavigate } from "react-router-dom";
import { loginschema } from "../components/FormSchema/loginschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function DriverLogin() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Driver login success");
        navigate("/driverdashboard", { state: data });
    }

    return (
        <>
            <h1>Driver Login</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Phone Number:</label><br />
                <input type="text" placeholder="Enter phone number" {...register("phone")} />
                <p>{errors.phone?.message}</p>
                <label>Password:</label><br />
                <input type="password" placeholder="Enter password" {...register("password")} />
                <p>{errors.password?.message}</p>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
export default DriverLogin;
