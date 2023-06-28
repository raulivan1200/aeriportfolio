/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Ninjawithanim from "./Ninjawithanim.js"
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import  styles from "../../styles/Skills.module.css"


function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
<mesh
  object={React.Fragment}
  scale={active ? 1.5 : 1}
  onClick={() => setActive(!active)}
  ref={myMesh}
>
  <boxBufferGeometry />
  <meshPhongMaterial color="royalblue" />
</mesh>
  );
}

function Tfgame() {
  return (
    <div style={{height:"100vh", justifyContent:"center", alignItems:"center"}} className={styles.tresde}>
      <Canvas>
      <OrbitControls/>
      <Suspense fallback={null}>
        <Ninjawithanim/>
        </Suspense >
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}

export default Tfgame;
