import React, { useState, useEffect } from 'react';
import Deskgrid from './Deskgrid'
import Mobgrid from './Mobgrid'
import styles from "../../styles/Grid.module.css"

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
    <h1 className={styles.mlp}>Projects</h1>
    <hr className={styles.pjhrxx} style={{marginTop: "-1.7%",color: "var(--black)",  backgroundColor: "var(--black)",  borderColor: "var(--black)",}} />
    {isMobile ? <Mobgrid /> : <Deskgrid />}
  </div>
  )
}

export default Grid