"use client"
import { motion } from 'framer-motion';

const variants = {
    hidden: { scale: 1.5 },
    visible: { scale: 1 }
};

export default function ZoomOut({ children, className, ...props }) {

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
