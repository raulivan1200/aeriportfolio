import React from 'react'
import sample from "../../../public/images/sample.jpg"
import styles from "../../styles/pj.module.css"
import Image from 'next/image'
function Textcol() {
  return (
    <div className={styles.pm}>


<div className={styles.container}>
  <div className={styles.texle}>

    <h4 className={styles.pjtb}>Proyecto de Prueba</h4>

<hr className={styles.hrr}/>

<div className={styles.txj}>
<h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Product Design<br/>Design System </h7>
</div>

<div className={styles.txj}>
<h6 className={styles.pb6}>Tools</h6><h7 style={{color:"var(--black)"}}>Figma <br/>Photoshop<br/>Paper & Pencil</h7>
</div>

<div className={styles.txj}>
<h6 className={styles.pb6}>Year</h6>
<h7 style={{color:"var(--black)"}}>2022</h7>
</div>



  </div>
  <div className={styles.texr}>

    <h2 className={styles.pjf}>tittle</h2>
 <h5 className={styles.pjlt}>Is a interactive app focused on risk-free communication. Unlike most messaging apps where phone numbers, emails, static usernames, or profiles are given to another party, Buzz uses a temporary, unique identifier called a Buzz Code.
Conversations will only last for 72 hours, after which, both users must indicate that they want to continue communicating. This makes giving contact information less stressful and allows users to keep their personal contact information private.</h5>



<h2 className={styles.pjf}>tittle</h2>
 <h5 className={styles.pjlt}>Is a interactive app focused on risk-free communication. Unlike most messaging apps where phone numbers, emails, static usernames, or profiles are given to another party, Buzz uses a temporary, unique identifier called a Buzz Code.
Conversations will only last for 72 hours, after which, both users must indicate that they want to continue communicating. This makes giving contact information less stressful and allows users to keep their personal contact information private.</h5>

<Image   className={styles.radim} style={{height:"400px",width:"100%", objectFit:"cover"}} src={sample} alt=""/>


<h2 className={styles.pjf}>tittle</h2>
 <h5 className={styles.pjlt}>Is a interactive app focused on risk-free communication. Unlike most messaging apps where phone numbers, emails, static usernames, or profiles are given to another party, Buzz uses a temporary, unique identifier called a Buzz Code.
Conversations will only last for 72 hours, after which, both users must indicate that they want to continue communicating. This makes giving contact information less stressful and allows users to keep their personal contact information private.</h5>
<Image   className={styles.radim} style={{height:"400px",width:"100%", objectFit:"cover"}} src={sample} alt=""/>



<h2 className={styles.pjf}>tittle</h2>
 <h5 className={styles.pjlt}>Is a interactive app focused on risk-free communication. Unlike most messaging apps where phone numbers, emails, static usernames, or profiles are given to another party, Buzz uses a temporary, unique identifier called a Buzz Code.
Conversations will only last for 72 hours, after which, both users must indicate that they want to continue communicating. This makes giving contact information less stressful and allows users to keep their personal contact information private.</h5>
<Image   className={styles.radim} style={{height:"400px",width:"100%", objectFit:"cover"}} src={sample} alt=""/>
 
 
  </div>
</div>
</div>  )
}

export default Textcol