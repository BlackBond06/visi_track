import React from "react";
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

const CheckOut = () => {
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      CheckOut
    </motion.div>
  );
};

export default CheckOut;
