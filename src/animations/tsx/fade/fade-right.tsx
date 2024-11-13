"use client";
import { motion, MotionProps } from 'framer-motion';

interface FadeProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

export default function FadeRight({ children, className, ...props }: FadeProps) {

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