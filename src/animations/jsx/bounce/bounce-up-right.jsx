"use client";
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 300 } }
};

export default function BounceUpRight({ children, className, ...props }) {

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
