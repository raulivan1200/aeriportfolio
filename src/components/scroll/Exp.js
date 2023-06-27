import React from 'react'
import styles from "../../styles/tables.module.css"
import { useState, useEffect } from 'react';
import Mbtables from './Mbtables';
import { Tablers } from './Tablers';
import Rollexp from './Rollexp';

function Exp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize();  return () => window.removeEventListener('resize', handleResize);}, []);
  return (

<div>
<div >
  
{isMobile ? (
  <>
        <Mbtables/>
        <div className={styles.ffs} style={{ width: "80%", overflowX: "scroll",textAlign:"center",margin:"0 auto" }}>
        <Rollexp text=" Information  ●  Architecture  ●  Design  ●  System  ●  Wireframing  ●  Prototyping  ●  Mockups  ● " />
    </div>
        </>) : (
        <Tablers/>
      )}

</div>
</div>


    
  );
}

export default Exp