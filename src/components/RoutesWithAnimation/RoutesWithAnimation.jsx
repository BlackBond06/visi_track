import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Analytics from "../Pages/Analytics/Analytics";
import Appointment from "../Pages/Appointments/Appointment";
import CheckIn from "../Pages/CheckIn/CheckIn";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Settings from "../Pages/Settings/Settings";
import VisitorList from "../Pages/VisitorList/VisitorList";
import StaffPage from "../Pages/r/[staffId]/index";
import ClientProfile from "../Pages/ClientProfile/ClientProfile";

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
      <Route path="/r/:userId" element={<StaffPage />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<ClientProfile />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
