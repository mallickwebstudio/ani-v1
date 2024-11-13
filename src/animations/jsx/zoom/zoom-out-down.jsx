"use client"
import { motion } from 'framer-motion';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, scale: 1.5, y: -initialOffset },
    visible: { opacity: 1, scale: 1, y: 0 }
});

export default function ZoomOutDown({ children, className, ...props }) {

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
