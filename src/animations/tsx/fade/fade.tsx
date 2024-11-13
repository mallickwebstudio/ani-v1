"use client";
import { motion, MotionProps } from 'framer-motion';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export default function Fade({ children, className, ...props }: FadeProps) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial={props.initial ?? "hidden"}
            whileInView={props.whileInView ?? "visible"}
            {...props}
        >
            {children}
        </motion.div>
    );
}
