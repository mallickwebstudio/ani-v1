"use client"
import { motion } from 'framer-motion';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, scale: 0.5, x: initialOffset },
    visible: { opacity: 1, scale: 1, x: 0 }
});

export default function ZoomInRight({ children, className, ...props }) {

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
