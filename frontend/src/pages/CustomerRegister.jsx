
import { useNavigate } from "react-router-dom";
import { customerregisterschema } from "../components/FormSchema/customerregisterschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function CustomerRegister() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(customerregisterschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Customer registration successful");
        navigate("/customerlogin");
    }

    return (
        <>
            <h1>Customer Registration</h1>

            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Name:</label><br />
                <input type="text" placeholder="Enter your name" {...register("name")} />
                <p>{errors.name?.message}</p>

                <label>Phone Number:</label><br />
                <input type="text" placeholder="Enter your phone number" {...register("phone")} />
                <p>{errors.phone?.message}</p>

                <label>Email:</label><br />
                <input type="email" placeholder="Enter your email" {...register("email")} />
                <p>{errors.email?.message}</p>

                <label>Address:</label><br />
                <textarea placeholder="Enter your address" {...register("address")}></textarea>
                <p>{errors.address?.message}</p>

                <label>Password:</label><br />
                <input type="password" placeholder="Create your password" {...register("password")} />
                <p>{errors.password?.message}</p>

                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default CustomerRegister;
