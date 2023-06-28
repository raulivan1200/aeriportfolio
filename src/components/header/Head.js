import React from 'react';
import styles from '../../styles/Head.module.css';
import Image from 'next/image'
import { motion } from 'framer-motion';
function Header() {
  
  return (  
    <div className={styles.cont} style={{overflowX:"hidden"}}>
      <div className={styles.left}>

        <h2 className={styles.bigtxt} style={{fontSize:"96px"}}> Live<br/>Creative </h2>
        <hr className={styles.hrx}/>
       
        <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration:6,
      }}
      >  
        <h3 className={styles.wh}>Abril Rivera</h3>
        <h7 className={styles.wh}>UX/UI Designer</h7>
      </motion.div>

      </div>

      <div className={styles.right} >
      <video
        style={{ zIndex: 0 , width:'70vw'}}
        loop
        src="./axofin.webm"
        autoPlay
        playsinline
        muted
        type="video/webm"
      >
      </video>
      </div>

      <div className={styles.mousecont}>
     <h6 className={styles.thm}> Let´s Scroll</h6>
      <Image className="svcom" src="./logos/mouse.svg"   width={30} height={30}></Image>
      </div>

    </div>
  );
}

export default Header;
