"use client"
import { motion } from 'framer-motion';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, scale: 1.5, x: -initialOffset },
    visible: { opacity: 1, scale: 1, x: 0 }
});

export default function ZoomOutRight({ children, className, ...props }) {

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
