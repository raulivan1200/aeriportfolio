import React from 'react'
import styles from "../../styles/Estudy.module.css"
import Tfgame from '../game/Tfgame'
import Mbgame from '../game/Mbgame';
import { useEffect,useState } from 'react';
function Learn() {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 770); // Adjust breakpoint as needed
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.ninecen}>
        <div className={styles.wc}>            
    <h1 className='wh'>Education</h1>
    <hr className={styles.hrxx} />
        </div>
        <div className={styles.containerss}>
  <div className={styles.a1}>
    <h2 className='wh'>Ba. Industrial
Design</h2>
  </div>
  <div className={styles.a2}>
    <h2 className='wh'>Degree in
Software Development</h2>
  </div>
  <div className={styles.a3}>
    <h6 className='wh'>My training in industrial design helps me to have a focus on how to transfer real activities or situations to digital environments and experiences.</h6>
  </div>
  <div className={styles.a4}><h6 className='wh'>My skills as a developer allow me to have a comprehensive vision.
<br/>
I have the management of some languages such as Html, Css and JavaScript</h6></div>
  <div className={styles.pi}>

  </div>
</div>
    {isMobile ? <Mbgame/> : <><div className={styles.ax}><Tfgame /></div></>}

    </div>
  )
}

export default Learn