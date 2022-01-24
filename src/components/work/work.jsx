import react from "react";
import './work.css';
import { motion } from 'framer-motion'


const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, delay: 1 }
  }

const Work = () => {
      return (
      <motion.div initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      layout
      variants={ variants }>
        

          <iframe src="https://player.vimeo.com/video/581632727?h=7b31e540d6" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <iframe src="https://player.vimeo.com/video/581633680?h=a8a113cc94" width="1000" height="562,50" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
         
      </motion.div>
    );
};



export default Work;