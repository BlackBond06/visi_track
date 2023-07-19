import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./chakra/theme";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LocationProvider from "./components/LocationProvider/LocationProvider";
import RoutesWithAnimation from "./components/RoutesWithAnimation/RoutesWithAnimation";
import { RecoilRoot } from "recoil";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/clientApp";

function App() {
  const [user] = useAuthState(auth);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);
  
 
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <LocationProvider>
            <Navbar socket={socket} />
            <RoutesWithAnimation socket={socket} user={user}/>
            <Footer />
          </LocationProvider>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
