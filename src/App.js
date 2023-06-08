import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import theme from "./chakra/theme";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Register from "./components/Pages/Register/Register";
import CheckIn from "./components/Pages/CheckIn/CheckIn";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import Appointment from "./components/Pages/Appointments/Appointment";
import VisitorList from "./components/Pages/VisitorList/VisitorList";
import VisitorDetails from "./components/Pages/VisitorDetails/VisitorDetails";
import Analytics from "./components/Pages/Analytics/Analytics";
import Settings from "./components/Pages/Settings/Settings";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/visitor-list" element={<VisitorList />} />
          <Route path="/visitor-details" element={<VisitorDetails />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Settings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
