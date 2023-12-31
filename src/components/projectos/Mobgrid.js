import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Grid.module.css"
import sshe from "/public/images/Portfolio/Sshead.png"
import wf from "/public/images/Portfolio/woffleshead.png"
import bih from "/public/images/Portfolio/billhead.png"
import tekoh from "/public/images/Portfolio/tekohead.png"
import imgh from "/public/images/Portfolio/imagikidsheader.png"
import process from "/public/images/Portfolio/woffleshead.png"

function Mobgrid() {
  return (
    <div className={styles.containerds}>
<div className={styles.bigds} >  
<div className={styles.brims}>
<a href="/Salessystem">  <Image placeholder="blur"  className={styles.imrs}   src={sshe} alt="Ux ui sales system"></Image> </a>
</div>
</div>


<div className={styles.bb3} >
<div className={styles.brims}>
<a href="/Imagikids"> <Image placeholder="blur"  className={styles.imrs}  src={imgh} alt="ux ui designerkids app ux design"></Image></a>
</div>
 </div>

<div className={styles.bb2} >
<div className={styles.brims}>
<a href="/Woffles">  <Image placeholder="blur"  className={styles.imrs}  src={wf} alt="ux restaurant designb"></Image></a>
</div>
 </div>

<div className={styles.bb4} >
<div className={styles.brims}>
<a href="/Teko"> <Image placeholder="blur"  className={styles.imrs}  src={tekoh} alt="ux agency business design "></Image></a>
</div>
 </div>


<div className={styles.bb5} >
<div className={styles.brims}>
    <a href="/Billsplitter"> <Image placeholder="blur"  className={styles.imrs}  src={bih} alt="bill splitter"></Image></a>
</div>
</div>

</div>
      
  )
}

export default Mobgrid