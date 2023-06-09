import React from "react";
import { motion } from "framer-motion";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition:{
      type:"spring",
      mass:"0.4"
    }
  },
};

const Support = () => {
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      Support
    </motion.div>
  );
};

export default Support;
