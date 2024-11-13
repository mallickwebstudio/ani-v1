"use client"
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, rotateX: 90, rotateY: 90 },
    visible: { opacity: 1, rotateX: 0, rotateY: 0 }
};

export default function FlipDiagonal({ children, className, ...props }) {

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
