
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Head.module.css';
import Image from 'next/image'
import { motion } from 'framer-motion';

function isIOS() {
  const iOSDevices = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isMac = /Mac/.test(navigator.platform);
  const isTouchScreen = navigator.maxTouchPoints > 1;
  const iOSVersions = /(iPhone|iPod|iPad).*OS\s([0-9]{1,2})_/i.exec(navigator.userAgent);
  const iOSVersion = iOSVersions ? parseInt(iOSVersions[2], 10) : 0;
  const isSafari = /^((?!chrome|android|crios|fxios|opera|edge|msie|trident).)*safari/i.test(navigator.userAgent);
  const isM1 = navigator.cpuArchitecture === "arm64";
  const isM2 = navigator.cpuArchitecture === "arm64e";
  const isiPhone = /iPhone/.test(navigator.platform);
  const isAppleWatch = /Watch/.test(navigator.platform);
  const isAppleTV = /AppleTV/.test(navigator.platform);
  const isSafari12OrHigher = isSafari && /^Version\/([1-9][2-9]|[2-9][0-9])\./i.test(navigator.userAgent);

  return (
    iOSDevices || isSafari || isM1 || isM2 || isSafari12OrHigher || isiPhone || isAppleWatch || isAppleTV ||
    (isMac && isTouchScreen) ||
    (iOSVersion >= 15 && iOSVersion <= 17) ||
    (iOSVersion === 14 && navigator.userAgent.includes('iPhone14')) ||
    (iOSVersion === 13 && navigator.userAgent.includes('iPhone13')) ||
    (iOSVersion === 12 && navigator.userAgent.includes('iPhone12')) ||
    (iOSVersion === 11 && navigator.userAgent.includes('iPhone11')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('M1')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('Apple M2')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('MacBook Air')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('MacBook Pro')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('Mac mini')) ||
    (isMac && navigator.platform.includes('MacIntel') && navigator.userAgent.includes('iMac'))
  );
}


function AppleComponent() {
  return <div>

<div className={styles.cont} style={{overflowX:"hidden",height:"100vh !important"}}>
      <div className={styles.left}>

      <span className={styles.bigtxt} style={{fontSize:"96px"}}> Live<br/>Creative </span>
        <hr className={styles.hrx}/>
       
        <h3 className={styles.wh}>Abril Rivera</h3>
        <h7 className={styles.wh}>UX/UI Designer</h7>

      </div>

      <div className={styles.right} >
        <img src="/saluteapple.png" className={styles.apim} alt="apple axo salute"></img>
      </div>

      <div className={styles.mousecont}>
     <h6 className={styles.thm}> Let´s Scroll</h6>
      <Image className="svcom" src="./logos/mouse.svg"  alt='mouse' width={30} height={30}></Image>
      </div>

    </div>

  </div>;
}

function NonAppleComponent() {
  return (

    <div className={styles.cont} style={{overflowX:"hidden"}}>
      <div className={styles.left}>

        <span className={styles.bigtxt} style={{fontSize:"96px"}}> Live<br/>Creative </span>
        <hr className={styles.hrx}/>
       

        <h3 className={styles.wh}>Abril Rivera</h3>
        <h7 className={styles.wh}>UX/UI Designer</h7>

      </div>

      <div className={styles.right} >
      <video
        disablePictureInPicture 
        style={{ zIndex: 0 , width:'70vw'}}
        loop
        src="./greetings.webm"
        autoPlay
        playsInline
        muted
        type="video/webm"
        className={styles.mvm}
        >
      </video>
      </div>

      <div className={styles.mousecont}>
     <h6 className={styles.thm}> Let´s Scroll</h6>
      <Image className="svcom" src="./logos/mouse.svg"  alt='mouse' width={30} height={30}></Image>
      </div>

    </div>

  )
    ;}

function Header() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(isIOS());
  }, []);

  return (
    <div>
      {isApple ? <AppleComponent /> : <NonAppleComponent />}
    </div>
  );
}

export default Header;
