
import React, { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 5000); // Change the delay as needed
  };

  const handleVideoEnd = () => {
    setAnimationComplete(true);
  };

  return (

    <motion.video
      src="./axofin.webm"
      autoPlay
      muted
      loop
      initial={{ opacity: 1, y: 0 }}
      animate={
        isLoading
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: "-100vh", exit: { opacity: 0 } }
      }
      transition={{ duration: 0.5, ease: "easeIn" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 99999999,
        backgroundColor: "#0f4c82",
      }}
      onAnimationComplete={handleAnimationComplete}
      onEnded={handleVideoEnd}
    />

  );
}

function NonAppleComponent() {
  return (

<>

b
</>

  );}

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
