import React from 'react';
import styles from '../../styles/Head.module.css';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
function Header() {

  useEffect(() => {
    const isIOSByUserAgent = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSByPlatform =
      navigator.platform === 'iPad' ||
      navigator.platform === 'iPhone' ||
      navigator.platform === 'iPod';

    if (isIOSByUserAgent || isIOSByPlatform) {
      console.log('This is an iOS device.');
    } else {
      console.log('This is not an iOS device!');
    }
  }, []);


  return (  
    <div className={styles.cont} style={{overflowX:"hidden"}}>
      <div className={styles.left}>

        <h2 className={styles.bigtxt} style={{fontSize:"96px"}}> Live<br/>Creative </h2>
        <hr className={styles.hrx}/>
       

        <h3 className={styles.wh}>Abril Rivera</h3>
        <h7 className={styles.wh}>UX/UI Designer</h7>

      </div>

      <div className={styles.right} >
      <video
        disablePictureInPicture 
        style={{ zIndex: 0 , width:'70vw'}}
        loop
        src="./axofin.webm"
        autoPlay
        playsInline
        muted
        type="video/webm"
        className={styles.mvm}
        >
      </video>
      </div>

      <div className={styles.mousecont}>
     <h6 className={styles.thm}> Let´s Scroll</h6>
      <Image className="svcom" src="./logos/mouse.svg"  alt='mouse' width={30} height={30}></Image>
      </div>

    </div>
  );
}

export default Header;
