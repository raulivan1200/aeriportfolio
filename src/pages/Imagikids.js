import React from 'react'
import { Imagikidstext } from '../components/examples/Imagikidstext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';


function Imagikid() {
  return (
  <>
    <Head>
        <title>👪 Imagikids</title>
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
  name="description"
  content="UX UI design for a kids app, responsive, animated, user friendly"
/>
      </Head>
    <div className='pm'>
      <div className={styles.conmi} style={{ position:"relative"}}>
      <ParallaxBanner style={{height:"100vh",width:"100vw",objectFit:"scale-down"}} >
      <ParallaxBannerLayer image="/images/Portfolio/imagikidsheader.png" speed={-20} />
      </ParallaxBanner></div>
<Imagikidstext/>
        <Foot/>
    </div>  
    </>
  )
}

export default Imagikid