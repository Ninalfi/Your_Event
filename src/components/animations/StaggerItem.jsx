"use client";

import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerItem;