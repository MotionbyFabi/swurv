import { motion } from "framer-motion"


const variants = {
  initial: { opacity: 0, y: 100},
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
  
}

  const AnimatedPage = ({children}) => {
    return (
        <motion.div initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3}} variants={ variants }>
            { children }
        </motion.div>
      
    );
  }
  
export default AnimatedPage;