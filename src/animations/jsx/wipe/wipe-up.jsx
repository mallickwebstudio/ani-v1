"use client";
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function WipeUp({ children, className, ...props }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
