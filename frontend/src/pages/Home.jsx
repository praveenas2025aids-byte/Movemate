
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to MoveMate</h1>
            <h3>Goods Transportation Made Easy</h3>
            <p>Find the right vehicle and driver for your goods transportation needs.</p>

            <h2>Customer</h2>
            <button onClick={() => navigate("/customerregister")}>Customer Register</button>
            <br /><br />
            <button onClick={() => navigate("/customerlogin")}>Customer Login</button>

            <h2>Driver</h2>
            <button onClick={() => navigate("/driverregister")}>Driver Register</button>
            <br /><br />
            <button onClick={() => navigate("/driverlogin")}>Driver Login</button>
        </>
    );
}

export default Home;
