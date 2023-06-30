import React from 'react'
import { Imagikidstext } from '../components/examples/Imagikidstext'
import Foot from '../components/foot/Foot'
import imkih from "../../public/images/Portfolio/imagikidsheader.png"
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';


function Imagikid() {
  return (
  <>
    <Head>
        <title>👪 Imagikids</title>
      </Head>
    <div className='pm'>
      <div className={styles.conmi} style={{ position:"relative"}}>
      <Image src={imkih} height={1080} width={1920} style={{objectFit:"cover !important", height:"100%", width:"100vw",backgroundColor:"white !important"}} alt='imagikids parenting site app mobile ux ui design imagi kids child parenting babysitting design'/>
</div>
<Imagikidstext/>
        <Foot/>
    </div>  
    </>
  )
}

export default Imagikid