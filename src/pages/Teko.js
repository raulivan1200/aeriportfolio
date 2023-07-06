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
        <title>💙 Teko</title>
      </Head>
      <div style={{width:"100vw",height:"100vh"}}>        
      <ParallaxBanner >
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