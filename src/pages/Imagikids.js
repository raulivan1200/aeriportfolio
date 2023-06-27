import React from 'react'
import { Imagikidstext } from './components/examples/Imagikidstext'
import Foot from './components/foot/Foot'
import sample from "../../public/images/sample.jpg"
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';


function Imagikid() {
  return (
  <>
    <Head>
        <title>👪Imagikids</title>
      </Head>
    <div className='pm'>
      <div className={styles.conmi} style={{ position:"relative"}}>
      <Image src={sample} height={1080} width={1920} style={{objectFit:"cover !important", height:"100%", width:"100vw",backgroundColor:"white !important"}} alt='restaurant ux ui designer Abril Rivera woffles wofflles wofles'/>
</div>
<Imagikidstext/>
        <Foot/>
    </div>  
    </>
  )
}

export default Imagikid