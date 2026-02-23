// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FadeIn = ({children, delay=0, className=""}) => {
   return (
        <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}>
        {children}
        </motion.div>
   )
}

export default FadeIn;