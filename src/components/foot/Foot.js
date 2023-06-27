import React from 'react';
import styles from "../../styles/Foot.module.css"
import Image from 'next/image';

function Foot() {
  return (
    <div style={{display:"flex", flexDirection:"column", backgroundColor:"var(--black)", width:"100vw"}}>

      <div style={{width:"100vw"}}>
        <div className={styles.patx}>


        <div className="text-container clip-path">
      <svg width="0" height="0">
        <clipPath id="clipPath">
          <text x="0" y="60">Colors of Creativity</text>
        </clipPath>
      </svg>
      <h1>Colors of Creativity</h1>
    </div>

    
        <p style={{paddingBottom:"100px", paddingTop:"100px"}} className={styles.fbtext}>Work with the colors of creativity to create extraordinary experiences</p>
        <a  style={{textDecoration:"none"}} href="mailto:someone@yoursite.com" target='_blank'><div className={styles.btn}><p style={{color:"var(--white)"}} className={styles.btx}>Let´s create</p></div></a>
              <div className={styles.socialMedia}>
        <a target="_blank" className={styles.acs} href="https://www.instagram.com/">
          <h3 className={styles.smtxt}>Instagram</h3>
        </a>
        <a target="_blank" className={styles.acs} href="https://www.behance.net/raulivrivera">
          <h3 className={styles.smtxt}>Behance</h3>
        </a>
        <a target="_blank" className={styles.acs} href="https://www.linkedin.com/in/raul-rivera-bbb858242/">
          <h3 className={styles.smtxt}>LinkedIn</h3>
        </a>
      </div>
        <h3 style={{color:"var(--white) !important",paddingTop:"68px", paddingBottom:"100px"}}>< span className={styles.han}>©</span> Esmeralda Rivera 2023</h3> 
      </div>
        </div>
    </div>
  );
}

export default Foot;
