import React from 'react'
import Tfgame from './Tfgame'
import styles from "../../styles/Skills.module.css"
import Textan from './Textanimated'

function Dessk() {
  return (
    <div className={styles.parentflex}>
<div className={styles.lpf}>
        <Tfgame/>
</div>
<div className={styles.rpf}>
  <h1 className={styles.pad5} style={{ color:"var(--black)",fontWeight:"600"}}>My Experience</h1>
  <hr className={styles.hrpp} />  
  <Textan/>
</div>
    </div>
  )
}

export default Dessk