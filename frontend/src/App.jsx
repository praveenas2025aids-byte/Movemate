
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BookingDetails from "./pages/bookingdetails";

import CustomerRegister from "./pages/Customer/customerregister";
import CustomerLogin from "./pages/Customer/customerlogin";
import CustomerDashboard from "./pages/Customer/customerdashboard";
import CreateRequests from "./pages/Customer/createrequests";
import MyRequests from "./pages/Driver/myrequests";
import ViewQuotations from "./pages/Customer/viewquotations";
import GiveFeedback from "./pages/Customer/givefeedback";

import DriverRegister from "./pages/Driver/driverregister";
import DriverLogin from "./pages/Driver/driverlogin";
import DriverDashboard from "./pages/Driver/driverdashboard";
import AvailableRequests from "./pages/Driver/availablerequests";
import SubmitQuotation from "./pages/Driver/submitquotation";
import MyQuotations from "./pages/Driver/myquotations";
import DriverProfile from "./pages/Driver/driverprofile";
import DriverReviews from "./pages/Driver/driverreviews";
import TripStatus from "./pages/Driver/tripstatus";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customerregister" element={<CustomerRegister />} />
                <Route path="/customerlogin" element={<CustomerLogin />} />
                <Route path="/customerdashboard" element={<CustomerDashboard />} />
                <Route path="/createrequests" element={<CreateRequests />} />
                <Route path="/myrequests" element={<MyRequests />} />
                <Route path="/viewquotations" element={<ViewQuotations />} />
                <Route path="/givefeedback" element={<GiveFeedback />} />

                <Route path="/driverregister" element={<DriverRegister />} />
                <Route path="/driverlogin" element={<DriverLogin />} />
                <Route path="/driverdashboard" element={<DriverDashboard />} />
                <Route path="/availablerequests" element={<AvailableRequests />} />
                <Route path="/submitquotation" element={<SubmitQuotation />} />
                <Route path="/myquotations" element={<MyQuotations />} />
                <Route path="/driverprofile" element={<DriverProfile />} />
                <Route path="/driverreviews" element={<DriverReviews />} />
                <Route path="/tripstatus" element={<TripStatus />} />

                <Route path="/bookingdetails" element={<BookingDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


