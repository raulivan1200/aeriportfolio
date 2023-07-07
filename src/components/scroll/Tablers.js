import React from 'react'
import styles from "../../styles/tables.module.css"
import abril from "../../../public/images/abrilcv1.png"
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export const Tablers = () => {
  return (
    <div>
           <div>

<div className={styles.containers}>
  <div className={styles.myrows}>
    <div className={styles.columns}>
      <h1 className='wh' style={{fontWeight:"600"}}>Esmeralda</h1>
      <hr style={{color:"var(--black)",marginTop:"-1.8vh",marginLeft:"0", width:"14.5vw", backgroundColor:"var(--black)",height:"1px" }}/>
      <h3 className='wh'>UX /UI Designer</h3>
          </div>
    <div className={styles.columns}>
<h2 style={{textAlign:"end"}} className='wh'>03 exp. years</h2>    
</div>
  </div>
</div>

<div className={styles.texcen}>
  <div style={{width:"25vw", height:"80%"}} className={styles.frim}>
  <Image className={styles.frimx} src={abril} fill style={{objectFit:"cover !important"}} alt="Ux Mexico Abril Rivera" />
  </div>
  <h1 className={styles.bate} style={{fontFamily:"Raleway",fontSize:"15vw", fontWeight:"700", color:"var(--black)", }}>MY SKILLS</h1>
</div>

<div className={styles.containers}>
  <div className={styles.myrows}>
    <div className={styles.columns}>
      <h6 className='wh'>Amo el diseño de experiencias que van<br/>más alla de las expectativas.</h6>
      <table className={styles.mytable}>
  <thead>
    <tr>
      <th className={styles.myth}><Image src="/logos/figma.svg" style={{mixBlendMode:"difference", background: 'black',}} alt="figma" width={40} height={40}/></th>
      <th className={styles.myth}><Image src="/logos/webf.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="webflow" width={33} height={23}/></th>
      <th className={styles.myth}><Image src="/logos/xd.svg"  style={{mixBlendMode:"difference", background: 'black',}}  alt="adobe xd" width={40} height={40}/></th>
      <th className={styles.myth}><Image src="/logos/pr.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="adobe premiere pro" width={40} height={40}/></th>
      <th className={styles.myth}><Image src="/logos/indes.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="adobe indesign" width={40} height={41}/></th>
      <th className={styles.myth}><Image src="/logos/ps.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="adobe photoshop" width={40} height={40}/></th>
      <th className={styles.myth}><Image src="/logos/ai.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="adobe illustrator" width={40} height={40}/></th>
      <th className={styles.myth}><Image src="/logos/ae.svg"  style={{mixBlendMode:"difference", background: 'black',}} alt="after effects" width={38} height={38}/></th>
    </tr>
  </thead>
</table>
           </div>
    <div className={styles.columns}>
<h6 style={{textAlign:"end"}} className='wh'>  Information architecture <br/> Design System<br/>  Wireframing<br/> Prototyping<br/> Mockups </h6>    </div>
  </div>
</div>

    </div>
    </div>
  )
}
