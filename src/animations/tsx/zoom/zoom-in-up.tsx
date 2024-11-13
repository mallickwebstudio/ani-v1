"use client"
import { motion, MotionProps } from 'framer-motion';

interface AnimationProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const variants = {
    hidden: { opacity: 0, scale: 0.5, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0 }
};

export default function ZoomInUp({ children, className, ...props }: AnimationProps) {

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
