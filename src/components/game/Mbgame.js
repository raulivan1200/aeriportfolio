/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Axo from "./axo.js"
import { OrbitControls,Text } from "@react-three/drei";
import { Suspense } from "react";
import  styles from "../../styles/Skills.module.css"
import { useEffect } from "react";
import { useRef } from "react";

function Mbgame() {

  return (
    <div style={{height:"50vh", width:"80vw", justifyContent:"center",alignItems:"center"}}>
      <Canvas  camera={{ fov: 70, position: [0, 100, 10]}}>
      
      <Suspense fallback={null}>
      <Axo
            position={[0, -20, 0]}
            rotation={[-45, 0, 0]}
            scale={2} // Set scale to 1 on mobile
          />
                  </Suspense >

        <ambientLight intensity={0.5} />
<ambientLight intensity={0.2} />
        <pointLight    decay={10}  width={50}      height={50}      color={"#2a4494"}      intensity={1.7}      position={[-40, 30, 0]}      lookAt={[0, 0, 0]}      penumbra={10}    />
        <rectAreaLight      width={10}      height={30}      color={"#e15a97"}      intensity={2}      position={[0, 0, 20]}      lookAt={[0, 0, 0]}      penumbra={20}    />
        <rectAreaLight      width={10}     height={30}      color={"#faff00"}      intensity={16.8}      position={[25, 15, 5]}      lookAt={[0, 0, 0]}      penumbra={30}    />
      </Canvas>
    </div>
  );
}

export default Mbgame;
