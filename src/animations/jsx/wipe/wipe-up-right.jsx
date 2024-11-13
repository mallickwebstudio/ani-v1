"use client";
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -100, y: 100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function WipeUpRight({ children, className, ...props }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}