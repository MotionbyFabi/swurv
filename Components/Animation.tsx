import React, {  ReactNode }  from 'react'
import { motion } from "framer-motion"

// if you wanna reset or restart everything do it !! I will join on the next link or 
//however you wanna do it : D 
// hmmmm it wont take very long... and I can just do npx create-next-app --with-tailwind -
//whatsup? there is typescript and tailwind template? yeah you can literally do
// npx create-next-app --with-tailwind --typescript I cannot see it on vercel examples, but if you are sure lets goooo

//okok one sec
const variants = {
  initial: { opacity: 0, y: 50},
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
}

interface AnimatedProps {
    children?: ReactNode
};

  const AnimatedPage:React.FC<AnimatedProps> = ({ children } ) => {
    return (
        <motion.main initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: [0.01,0.54,0.4,0.81]}} variants={ variants }>
            { children }
        </motion.main>
      
    );
  }
  
export default AnimatedPage;
