
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import appletransition from './appletransition';
import nonapple from './nonapple';
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

  return (
    <>
<appletransition/>
</>
  );
}

function NonAppleComponent() {
  return (

<>
<nonapple/>
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
