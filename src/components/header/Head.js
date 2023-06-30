import React, { useEffect, useState } from 'react';

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function AppleComponent() {
  return <div>
    <h1>

    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
    This is the Apple component. <br/>
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
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
    This is the Non-Apple component. <br/>
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
