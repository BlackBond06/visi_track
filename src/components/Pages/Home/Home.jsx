import React from "react";
import SearchInput from "../../SearchBar/SearchInput";
import VisitorList from "../VisitorList/VisitorList";
import AddVisitorForm from "../../AddVisitorForm/AddVisitorForm";
import Analytics from "../Analytics/Analytics";

import { motion } from "framer-motion";
import Banner from "../../Banner/Banner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: "0.4",
    },
  },
};

const Home = () => {
  const [user, loading, error] = useAuthState(auth);


  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <Banner user={user}/>
      <SearchInput />
      <VisitorList />
      <AddVisitorForm />
      <Analytics />
    </motion.div>
  );
};

export default Home;
