import { motion } from "framer-motion";
import React, { useState } from "react";


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

const Noftification = () => {
  const [count, setCount] = useState(2);
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
     
    </motion.div>
  );
};

export default Noftification;
