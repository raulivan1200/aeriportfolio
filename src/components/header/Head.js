import React from 'react';
import styles from '../../styles/Head.module.css';
import Image from 'next/image'
function Header() {
  return (  
    <div className={styles.cont}>
      <div className={styles.left}>
        <h2 className={styles.bigtxt} style={{fontSize:"96px"}}> Live<br/>Creative </h2>
        <hr className={styles.hrx}/>
        <h3 className={styles.wh}>Abril Rivera</h3>
        <h7 className={styles.wh}>UX/UI Designer</h7>

      </div>

      <div className={styles.right} >
      <video
        style={{ zIndex: 0 , width:'100%'}}
        loop
        src="/axofin.webm"
        autoPlay
        muted
        type="video/webm"
      >
      </video>
      </div>

      <div className={styles.mousecont}>
     <h6 className={styles.thm}> Let´s Scroll</h6>
      <Image className="svcom" src="/logos/mouse.svg"   width={30} height={30}></Image>
      </div>

    </div>
  );
}

export default Header;
