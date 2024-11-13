"use client"
import { motion, MotionProps } from 'framer-motion';

interface AnimationProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

const variants = {
    hidden: { scale: 1.5 },
    visible: { scale: 1 }
};

export default function ZoomOut({ children, className, ...props }: AnimationProps) {

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
