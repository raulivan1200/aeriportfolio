import React from 'react'
import { Billsplittertext } from '../components/examples/Billsplittertext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import billhead from "/public/images/Portfolio/billhead.png"
import Head from 'next/head';

function Bill() {
  return (
    <>
    <Head>
        <title>💵 Billsplitter</title>
      </Head>
      <main>
    <div className='pm'>
        <Image src={billhead} height={1080} width={1920} style={{objectFit:"cover !important", height:"auto", width:"100vw",backgroundColor:"white !important"}} alt='bill system split bill splitter billsplitter billing system'/>
            <Billsplittertext/>
        <Foot/>
    </div>  
    </main>
    </>
  )
}

export default Bill