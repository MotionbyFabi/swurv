import react from "react";
import './worked.css';
import { motion, AnimatePresence  } from 'framer-motion'


const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, delay: 1 }
  }

const Worked = () => {
    return (
        <motion.div initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        layout
        variants={ variants }>

            <h1 className="test">bye other tab</h1>
             
        </motion.div>
      
    );
  }
  
export default Worked;