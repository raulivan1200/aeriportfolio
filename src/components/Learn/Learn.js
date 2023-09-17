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
    <h1 className='wh' style={{textDecoration:"underline",textDecorationThickness:"1.7px", textUnderlineOffset:"12.3px"}}>Education</h1>
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
    <h6 className='wh'>My education in industrial design has given me the skills to transfer real-world activities and situations to digital environments and experiences.</h6>
  </div>
  <div className={styles.a4}><h6 className='wh'>I am a skilled developer with a comprehensive understanding of the software development process and limits.
<br/>HTML, CSS, and JavaScript.</h6></div>
  <div className={styles.pi}>

  </div>
</div>
    {isMobile ? <Mbgame/> : <><div className={styles.ax}><Tfgame /></div></>}

    </div>
  )
}

export default Learn