import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Register from "../Pages/Register/Register";
import CheckIn from "../Pages/CheckIn/CheckIn";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Appointment from "../Pages/Appointments/Appointment";
import VisitorList from "../Pages/VisitorList/VisitorList";
import VisitorDetails from "../Pages/VisitorDetails/VisitorDetails";
import Analytics from "../Pages/Analytics/Analytics";
import Settings from "../Pages/Settings/Settings";
import Noftification from "../Pages/Notification/Notification";

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/check-in" element={<CheckIn />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/visitor-list" element={<VisitorList />} />
      <Route path="/visitor-details" element={<VisitorDetails />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/notification" element={<Noftification  />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
