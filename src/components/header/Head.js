import React, { useEffect, useState } from 'react';

function isIOS() {
  const iOSDevices = /iPad|iPhone|iPod/.test(navigator.platform);
  const isMac = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const iOSVersions = /(iPhone|iPod|iPad).*OS\s([0-9]{1,2})_/i.exec(navigator.userAgent);
  const iOSVersion = iOSVersions ? parseInt(iOSVersions[2], 10) : 0;

  return iOSDevices || isMac || iOSVersion >= 15 || iOSVersion === 17 || iOSVersion === 16;
}


function AppleComponent() {
  return <div>
    <h1>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    </h1>
  </div>;
}

function NonAppleComponent() {
  return <div>
    <h1 >
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    </h1>
    </div>;
}

function App() {
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

export default App;
