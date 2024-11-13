"use client";
import { motion, MotionProps } from 'framer-motion';

interface WipeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const variants = {
  hidden: { opacity: 0, x: 100, y: 100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function WipeUpLeft({ children, className, ...props }: WipeProps) {
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
