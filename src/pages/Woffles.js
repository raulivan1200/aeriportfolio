import React from 'react'
import Wofflestext from '../components/examples/Wofflestext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Wofflles() {
  return (
    <div className='pm'>
          <Head>
        <title>🧇 Woffles</title>
      </Head>
      <ParallaxBanner style={{height:"100vh",width:"100vw",objectFit:"scale-down"}}>
      <ParallaxBannerLayer image="/images/Portfolio/woffleshead.png" speed={-20} />
      </ParallaxBanner>            <Wofflestext/>
        <Foot/>
    </div>  
  )
}

export default Wofflles