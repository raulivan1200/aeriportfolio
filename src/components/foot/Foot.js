import React from 'react';
import styles from "../../styles/Foot.module.css"

function Foot() {
  return (
    <div style={{display:"flex", flexDirection:"column", backgroundColor:"var(--black)", width:"100vw"}}>

      <div style={{width:"100vw"}}>
        <div className={styles.patx}>
    
        <p style={{paddingBottom:"100px", paddingTop:"100px"}} className={styles.fbtext}>Work with the<br className={styles.deskbreak}/><span className='rtr'> colors of creativity </span><br className={styles.mobilebreak}/>to create extraordinary experiences</p>
        <a  style={{textDecoration:"none"}} href="mailto:04.esmeraldarp@gmail.com" target='_blank'><div className={styles.btn}><p style={{color:"var(--white)"}} className={styles.btx}>Let´s create</p></div></a>
         <div className={styles.textrowfo}> 
         <div className={styles.two}>          
        <h3 style={{color:"var(--white) !important"}}>< span className={styles.han} id="rotate-on-hover">©</span> Esmeralda Rivera 2023</h3> 
         </div>
<div className={styles.one}>  
<a target="_blank" className={styles.acs} href="https://www.linkedin.com/in/esmeralda-rivera-p-a0155b202/">
  <h3 className={styles.smtxt}>LinkedIn</h3>
</a>
</div>
         </div>
      </div>
        </div>
    </div>
  );
}

export default Foot;
