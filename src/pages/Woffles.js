import React from 'react'
import Wofflestext from '../components/examples/Wofflestext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import wof from "/public/images/Portfolio/woffles.png"
import Head from 'next/head';

function Wofflles() {
  return (
    <div className='pm'>
          <Head>
        <title>🐶🧇Woffles</title>
      </Head>
        <Image src={wof} height={1080} width={1920} style={{objectFit:"cover !important", height:"auto", width:"100vw",backgroundColor:"var(--white) !important"}} alt='restaurant ux ui designer Abril Rivera woffles wofflles wofles'/>
            <Wofflestext/>
        <Foot/>
    </div>  
  )
}

export default Wofflles