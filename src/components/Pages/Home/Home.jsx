import React from "react";
import SearchInput from "../../SearchBar/SearchInput";
import VisitorList from "../VisitorList/VisitorList";
import AddVisitorForm from "../../AddVisitorForm/AddVisitorForm";
import Analytics from "../Analytics/Analytics";

import { motion } from "framer-motion";

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
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <SearchInput />
      <VisitorList />
      <AddVisitorForm />
      <Analytics />
    </motion.div>
  );
};

export default Home;
