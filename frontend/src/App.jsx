
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

import CustomerRegister from "./pages/customerregister";
import CustomerLogin from "./pages/customerlogin";
import CustomerDashboard from "./pages/customerdashboard";
import CreateRequests from "./pages/createrequests";
import MyRequests from "./pages/myrequests";
import ViewQuotations from "./pages/viewquotations";

import DriverRegister from "./pages/driverregister";
import DriverLogin from "./pages/driverlogin";
import DriverDashboard from "./pages/driverdashboard";
import AvailableRequests from "./pages/availablerequests";
import SubmitQuotation from "./pages/submitquotation";
import MyQuotations from "./pages/myquotations";
import DriverProfile from "./pages/driverprofile";
import DriverReviews from "./pages/driverreviews";

import BookingDetails from "./pages/bookingdetails";
import TripStatus from "./pages/tripstatus";
import GiveFeedback from "./pages/givefeedback";

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
        <Route path="/driverreviews" element={<DriverReviews />} />

        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/tripstatus" element={<TripStatus />} />
        <Route path="/givefeedback" element={<GiveFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
