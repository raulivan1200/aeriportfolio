/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Ninjawithanim from "./Ninjawithanim.js"
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import  styles from "../../styles/Skills.module.css"

function Tfgame() {
  return (
    <div style={{height:"80vh", justifyContent:"center",alignItems:"center"}} className={styles.tresde}>
      <Canvas>
      <OrbitControls/>
      <Suspense fallback={null}>
        <Ninjawithanim/>
        </Suspense >
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}

export default Tfgame;
