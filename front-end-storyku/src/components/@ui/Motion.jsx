import { motion } from "motion/react"

export const Motion = ({ delay = 0, duration = 0.5, children }) => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
                y: [20, 0]
            }}
            transition={{
                duration: duration,
                delay: delay * 0.1,
                type: "spring"
            }}
        >
            {children}
        </motion.div>
    );
};