
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import CustomerRegister from "./pages/CustomerRegister";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerDashboard from "./pages/CustomerDashboard";
import CreateRequests from "./pages/CreateRequests";
import MyRequests from "./pages/MyRequests";
import ViewQuotations from "./pages/ViewQuotations";

import DriverRegister from "./pages/DriverRegister";
import DriverLogin from "./pages/DriverLogin";
import DriverDashboard from "./pages/DriverDashboard";
import AvailableRequests from "./pages/AvailableRequests";
import SubmitQuotation from "./pages/SubmitQuotation";
import MyQuotations from "./pages/MyQuotations";
import DriverProfile from "./pages/DriverProfile";

import BookingDetails from "./pages/BookingDetails";
import TripStatus from "./pages/TripStatus";
import GiveFeedback from "./pages/GiveFeedback";

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

        <Route path="/driverregister" element={<DriverRegister />} />
        <Route path="/driverlogin" element={<DriverLogin />} />
        <Route path="/driverdashboard" element={<DriverDashboard />} />
        <Route path="/availablerequests" element={<AvailableRequests />} />
        <Route path="/submitquotation" element={<SubmitQuotation />} />
        <Route path="/myquotations" element={<MyQuotations />} />
        <Route path="/driverprofile" element={<DriverProfile />} />

        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/tripstatus" element={<TripStatus />} />
        <Route path="/givefeedback" element={<GiveFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
