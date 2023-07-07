import React from 'react'
import Tekotext from "../components/examples/Tekotext"
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';


function teko() {
  return (
  <>
    <div className='pm'>
        <Head>
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
  name="description"
  content="web design for a Studio, responsive, branding, scalable and maintainable"
/>
        <title>💙 Teko</title>
      </Head>
      <div>        
      <ParallaxBanner style={{height:"100vh",width:"100vw",objectFit:"scale-down"}}>
      <ParallaxBannerLayer image="/images/Portfolio/tekohead.png" speed={-20} />
      </ParallaxBanner>
      </div>
            <Tekotext/>
        <Foot/>
    </div>  
    </>
  )
}

export default teko