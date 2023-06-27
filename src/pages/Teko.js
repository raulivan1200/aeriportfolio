import React from 'react'
import Tekotext from "../components/examples/Tekotext"
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import tek from "/public/images/Portfolio/teko.png"
import Head from 'next/head';

function teko() {
  return (
  <>
    <div className='pm'>
        <Head>
        <title>💙teko</title>
      </Head>
        <Image src={tek} height={1080} width={1920} style={{objectFit:"scale-down !important", height:"auto", width:"100vw",backgroundColor:"white !important"}} alt='restaurant ux ui designer Abril Rivera woffles wofflles wofles'/>
            <Tekotext/>
        <Foot/>
    </div>  
    </>
  )
}

export default teko