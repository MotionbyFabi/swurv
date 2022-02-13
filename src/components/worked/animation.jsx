import { motion } from "framer-motion"
import React from 'react'

const variants = {
    initial: { opacity: 0, y: 50},
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    
  }

  const AnimatedPage = ({children}) => {
    return (
        <motion.div initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3, ease: [0.01,0.54,0.4,0.81]}} variants={ variants }>
            { children }
        </motion.div>
      
    );
  }
  
export default AnimatedPage;