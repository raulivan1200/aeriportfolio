import React, { useState, useEffect } from 'react';
import Deskgrid from './Deskgrid'
import Mobgrid from './Mobgrid'
import styles from "../../styles/Grid.module.css"
function Grid() {
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
    <div >
    <h1 className={styles.mlp} style={{textDecoration:"underline",textDecorationThickness:"1.7px", textUnderlineOffset:"12.3px"}}>Projects</h1>
    {isMobile ? <Mobgrid /> : <Deskgrid />}
  </div>
  )
}

export default Grid