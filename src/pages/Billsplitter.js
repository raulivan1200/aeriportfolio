import React from 'react'
import { Billsplittertext } from '../components/examples/Billsplittertext'
import Foot from '../components/foot/Foot'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/pj.module.css"
import Head from 'next/head';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Bill() {
  return (
    <>
    <Head>
        <title>💵 Billsplitter</title>
      </Head>
      <main>
    <div className='pm'>
    <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
      <ParallaxBannerLayer image="/images/Portfolio/billhead.png" speed={-20} />
      </ParallaxBanner>            <Billsplittertext/>
        <Foot/>
    </div>  
    </main>
    </>
  )
}

export default Bill