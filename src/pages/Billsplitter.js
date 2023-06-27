import React from 'react'
import { Billsplittertext } from '../components/examples/Billsplittertext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import wof from "/public/images/Portfolio/woffles.png"
import Head from 'next/head';

function Bill() {
  return (
    <>
    <Head>
        <title>💵Billsplitter</title>
      </Head>
      <main>
    <div className='pm'>
        <Image src={wof} height={1080} width={1920} style={{objectFit:"cover !important", height:"auto", width:"100vw",backgroundColor:"white !important"}} alt='restaurant ux ui designer Abril Rivera woffles wofflles wofles'/>
            <Billsplittertext/>
        <Foot/>
    </div>  
    </main>
    </>
  )
}

export default Bill