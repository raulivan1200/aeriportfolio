import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Transition = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2200);
  
      return () => clearTimeout(timeout);
    }, []);
  
    const handleAnimationComplete = () => {
      setTimeout(() => {
        setAnimationComplete(true);
      }, 5000); // Change the delay as needed
    };
    const handleVideoEnd = () => {
      setAnimationComplete(true);
    };
  
    if (animationComplete) {
      return null; // Don't render anything once the animation is complete
    }
    
  return (
    <>
      <motion.video
        src="/axocameramove.mp4"
        autoPlay
        muted
        loop
        initial={{ opacity: 1, y: 0 }}
        animate={isLoading ? { opacity: 1, y: 0 } : { opacity: 1, y: "-100vh", exit: { opacity: 0 } }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 99999999,
        }}
        onAnimationComplete={handleAnimationComplete}
        onEnded={handleVideoEnd}
      />
    </>
  )
}

export default Transition