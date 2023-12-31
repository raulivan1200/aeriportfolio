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
          <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
  name="description"
  content="Woffles site Ux Ui design for a restaurant responsive, user friendly, animated"
/>
        <title>🧇 Woffles</title>
      </Head>
      <ParallaxBanner className='bannerpages'>
      <ParallaxBannerLayer image="/images/Portfolio/woffleshead.png" speed={-20} />
      </ParallaxBanner>            <Wofflestext/>
        <Foot/>
    </div>  
  )
}

export default Wofflles