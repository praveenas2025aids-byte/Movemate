
import { useNavigate } from "react-router-dom";
import { driverregisterschema } from "../components/FormSchema/driverregisterschema";
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
        navigate("/driverlogin");
    }

    return (
        <>
            <h1>Driver Registration</h1>

            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Name:</label><br />
                <input type="text" placeholder="Enter your name" {...register("name")} />
                <p>{errors.name?.message}</p>

                <label>Phone Number:</label><br />
                <input type="text" placeholder="Enter your phone number" {...register("phone")} />
                <p>{errors.phone?.message}</p>

                <label>Experience (in years):</label><br />
                <input type="text" placeholder="Enter your experience" {...register("experience")} />
                <p>{errors.experience?.message}</p>

                <label>Password:</label><br />
                <input type="password" placeholder="Create your password" {...register("password")} />
                <p>{errors.password?.message}</p>

                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default DriverRegister;
