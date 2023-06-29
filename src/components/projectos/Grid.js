import React, { useState, useEffect } from 'react';
import Deskgrid from './Deskgrid'
import Mobgrid from './Mobgrid'
import styles from "../../styles/Grid.module.css"
import { Parallax } from 'react-scroll-parallax';
function Grid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div >
      <Parallax   translateY={['0', '-100px']}>
    <h1 className={styles.mlp}>Projects</h1>
      </Parallax>
    <hr className={styles.pjhrxx} style={{marginTop: "-1.2%",color: "var(--black)",  backgroundColor: "var(--black)",  borderColor: "var(--black)",}} />
    {isMobile ? <Mobgrid /> : <Deskgrid />}
  </div>
  )
}

export default Grid