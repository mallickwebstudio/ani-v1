"use client";
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export default function Fade({ children, className, ...props }) {

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
