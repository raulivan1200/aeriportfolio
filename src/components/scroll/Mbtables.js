import React from 'react'
import Image from 'next/image'
import styles from "../../styles/tables.module.css"
import abril from "../../../public/images/abrilcv1.png"

const Mbtables = () => {
  return (
    
    <div style={{paddingTop:"10%", width:"100vw"}}>
    <h1 style={{paddingLeft:"10%", marginBottom:"-20px",color:"var(--black)"}} className={styles.smtu}>Esmeralda</h1>
    <hr style={{color:"var(--black)",marginTop:"5%", width:"30vw",marginLeft:"10%",textAlign:"left", backgroundColor:"var(--black)",height:"1px" }}/>
    <h3 style={{paddingLeft:"10%", marginBottom:"-20px"}} className='wh'>UX /UI Designer</h3>
    <h3 style={{paddingLeft:"10%", marginBottom:"8px",paddingBottom:"10%"}} className='wh'>03 exp. years</h3>
    
    <div className={styles.texcen} style={{paddingBottom:"5%"}}>

    <div className={styles.frim}>
  <Image className={styles.frimx} priority src={abril} fill style={{objectFit:"cover !important"}} alt="Ux Mexico Abril Rivera" />
  </div>

  <h1 className={styles.bate} style={{color:"var(--black)"}}>
  <span style={{color: "rgba(0, 0, 0, 0.3)",fontSize:"100%", margin: "80px 0px"}}>MY SKILLS</span><br/>
  <span style={{color: "rgba(0, 0, 0, 0.7)",fontSize:"100%", margin: "80px 0px"}}>MY SKILLS</span><br/>
  <span style={{color:"var(--black)",fontSize:"100%", margin: "80px 0px"}}>MY SKILLS</span><br/>
  <span style={{color: "rgba(0, 0, 0, 0.7)",fontSize:"100%", margin: "80px 0px"}}>MY SKILLS</span><br/>
  <span style={{color: "rgba(0, 0, 0, 0.3)",fontSize:"100%", margin: "80px 0px"}}>MY SKILLS</span><br/>
</h1>



</div>
     <div style={{width:"100%"}}>
    <div>
        <h6 style={{paddingLeft:"10%", marginBottom:"8px"}} className='wh'>Amo el diseño de experiencias que van <br/> más alla de las expectativas.</h6>
<div className={styles.conta}>
<table className={styles.mytable}>
        <thead>
          <tr>
          <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}} src="/logos/figma.svg"  alt="figma" width={40} height={41}/></th>
      <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}}  src="/logos/webf.svg" alt="webflow" width={40} height={41}/></th>
      <th className={styles.myth}><Image   style={{mixBlendMode:"difference", background: 'black',}} src="/logos/xd.svg" alt="adobe xd" width={40} height={41}/></th>
      <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}}  src="/logos/pr.svg" alt="premiere pro adobe ux ui" width={40} height={41}/></th>
          </tr>
        </thead>
      </table>
    </div>

    <div className={styles.conta}>
    <table className={styles.mytable}>
        <thead>
          <tr>
          <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}}  src="/logos/indes.svg" alt="adobe indesign" width={40} height={41}/></th>
      <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}}  src="/logos/ps.svg" alt="photoshop" width={40} height={41}/></th>
      <th className={styles.myth}><Image   style={{mixBlendMode:"difference", background: 'black',}} src="/logos/ai.svg" alt="adobe illustrator" width={40} height={41}/></th>
      <th className={styles.myth}><Image  style={{mixBlendMode:"difference", background: 'black',}}  src="/logos/ae.svg" alt="adobe after effects" width={40} height={41}/></th>
          </tr>
        </thead>
      </table>
        
</div>
    </div>
   </div>
   </div>


  )
}

export default Mbtables