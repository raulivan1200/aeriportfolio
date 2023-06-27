import React from 'react'
import sample from "../../../public/images/sample.jpg"
import Image from 'next/image'
import styles from "../../styles/Grid.module.css"
import ux1 from "/public/images/Portfolio/system.png"
import ux2 from "/public/images/Portfolio/pay.png"
import ux3 from "/public/images/Portfolio/system.png"
import ux4 from "/public/images/Portfolio/teko.png"
import ux5 from "/public/images/Portfolio/imagiki.png"
import ux6 from "/public/images/Portfolio/woffles.png"

function Mobgrid() {
  const images = [
  sample,sample
  ];
  return (
    <div className={styles.containerds}>
<div className={styles.bigds} >  
<div className={styles.brims}>
<a href="/Billsplitter">  <Image className={styles.imrs}   src={ux1} alt="Abril Rivera front end ux design designer"></Image> </a>
</div>
</div>


<div className={styles.bb3} >
<div className={styles.brims}>
<a href="/Billsplitter"> <Image className={styles.imrs}  src={ux2} alt="ux systems"></Image></a>
</div>
 </div>

<div className={styles.bb2} >
<div className={styles.brims}>
<a href="/Billsplitter">  <Image className={styles.imrs}  src={ux3} alt="bill splitter ux ui designer"></Image></a>
</div>
 </div>

<div className={styles.bb4} >
<div className={styles.brims}>
<a href="/Teko"> <Image className={styles.imrs}  src={ux4} alt="ux agency business design "></Image></a>
</div>
 </div>


<div className={styles.bb5} >
<div className={styles.brims}>
    <a href="/Imagikids"> <Image className={styles.imrs}  src={ux5} alt="kids app ux design"></Image></a>
</div>
</div>

<div className={styles.bb6} >
<div className={styles.brims}>
<a href="/Woffles"> <Image className={styles.imrs}  src={ux6} alt="ux restaurant design"></Image></a>
</div>
 </div>

</div>
      
  )
}

export default Mobgrid