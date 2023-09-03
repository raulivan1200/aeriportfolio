import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Grid.module.css"
import sshe from "/public/images/Portfolio/Sshead.png"
import wf from "/public/images/Portfolio/woffleshead.png"
import bih from "/public/images/Portfolio/billhead.png"
import tekoh from "/public/images/Portfolio/tekohead.png"
import imgh from "/public/images/Portfolio/imagikidsheader.png"
import process from "/public/images/Portfolio/woffleshead.png"
import { Parallax } from 'react-scroll-parallax'
import useMouse from '@react-hook/mouse-position'
import { motion, useTransform } from "framer-motion";
import { useState } from 'react'

function Deskgrid() {
  return (
    <div >

        <div className={styles.containerds}>
  <div className={styles.bigds}>  
  <div className={styles.brims} >
  <a href="/Salessystem">  <Image placeholder="blur"  className={styles.imrs}   src={sshe} alt="Abril Rivera front end ux design designer"></Image> </a>
  <p className='wh gridfont'>Sales system</p>
  <h6 className='lnh wh'>Easy-to-use sales system</h6>  
  </div>
  </div>
 
  <div className={styles.bb3} >
  <div className={styles.brims}>
  <a href="/Woffles"> <Image placeholder="blur"  className={styles.imrs}  src={wf} alt="ux systems"></Image></a>
  <p className='wh gridfont'>Woffles</p>
  <h6 className='lnh wh'>Awesome restaurant landing page</h6>
  </div>
     </div>

  <div className={styles.bb2} >
  <div className={styles.brims}>
  <a href="/Billsplitter">  <Image placeholder="blur"   className={styles.imrs}  src={bih} alt="bill splitter ux ui designer"></Image></a>
  <p className='wh gridfont'>Bill splitter</p>
  <h6 className='lnh wh'>Share  bills with friends</h6>
  </div>
     </div>

  <div className={styles.bb4} >
  <div className={styles.brims}>
   <a href="/Teko"> <Image placeholder="blur"  className={styles.imrs}  src={tekoh} alt="ux agency business design "></Image></a>
   <p className='wh gridfont'>Teko</p>
  <h6 className='lnh wh'>Web design agency redesign</h6>
   </div>
     </div>

  <div className={styles.bb5} >
    <div className={styles.brims}>
        <a href="/Imagikids"> <Image placeholder="blur"  className={styles.imrs}  src={imgh} alt="kids app ux design"></Image></a>
        <p className='wh gridfont'>Imagi Kids</p>
  <h6 className='lnh wh'>Incredible & safe babysitting app</h6>
    </div>
  </div>



</div>

    </div>
  )
}

export default Deskgrid