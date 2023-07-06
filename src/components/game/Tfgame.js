/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Axo from "./axo.js"
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import  styles from "../../styles/Skills.module.css"

function Tfgame() {
  return (
    <div style={{height:"80vh", justifyContent:"center",alignItems:"center"}} className={styles.tresde}>
      <Canvas camera={{ fov: 70, position: [0, 50, 50] }}>
        <OrbitControls/>
      <Suspense fallback={null}>
        <Axo position={[0, 0, 0]}/>
        </Suspense >
        <rectAreaLight
      width={2}
      height={2}
      intensity={2}
      color={"#ffc0cb"}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
        <ambientLight intensity={1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}

export default Tfgame;
