"use client"
import { motion } from 'framer-motion';

const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 }
};

export default function ZoomIn({ children, className, ...props }) {

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
