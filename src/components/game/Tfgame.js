/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Axo from "./axo.js"
import { OrbitControls,Text } from "@react-three/drei";
import { Suspense } from "react";
import  styles from "../../styles/Skills.module.css"
import { useEffect } from "react";
import { useRef } from "react";


function getRandomPosition() {
  const x = Math.random() * 40 - 20; // Random x coordinate between -20 and 20
  const y = Math.random() * 30 + 20; // Random y coordinate between 20 and 50
  const z = Math.random() * -50 + 40; 
  return [x, y, z];
}
function Instances({ count = 100000, temp = new THREE.Object3D(), words }) {
  const instancedMeshRef = useRef();

  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {
      temp.position.set(Math.random(), Math.random(), Math.random());
      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
    }
    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const instance = instancedMeshRef.current;
      const matrix = new THREE.Matrix4();
      instance.getMatrixAt(i, matrix);
      matrix.setPosition(
        matrix.elements[12],
        matrix.elements[13] - 0.005 * elapsedTime,
        matrix.elements[14]
      );
      instance.setMatrixAt(i, matrix);
    }
    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={instancedMeshRef} args={[null, null, count]}>
      <boxGeometry />
      <meshPhongMaterial />
    </instancedMesh>
  );
}



function Tfgame() {
  const initialWords = [
    { word: "User", position: getRandomPosition() },
    { word: "Experience", position: getRandomPosition() },
    { word: "Interface", position: getRandomPosition() },
    { word: "Design", position: getRandomPosition() },
    { word: "Usability", position: getRandomPosition() },
    { word: "Interaction", position: getRandomPosition() },
    { word: "User-centered", position: getRandomPosition() },
    { word: "Research", position: getRandomPosition() },
    { word: "Prototype", position: getRandomPosition() },
    { word: "Wireframe", position: getRandomPosition() },
    { word: "Information architecture", position: getRandomPosition() },
    { word: "User journey", position: getRandomPosition() },
    { word: "Persona", position: getRandomPosition() },
    { word: "User testing", position: getRandomPosition() },
    { word: "User feedback", position: getRandomPosition() },
    { word: "User flow", position: getRandomPosition() },
    { word: "Accessibility", position: getRandomPosition() },
    { word: "Visual design", position: getRandomPosition() },
    { word: "Responsive design", position: getRandomPosition() },
    { word: "Mobile experience", position: getRandomPosition() },
    { word: "Human-computer interaction", position: getRandomPosition() },
    { word: "User engagement", position: getRandomPosition() },
    { word: "Cognitive load", position: getRandomPosition() },
    { word: "Heuristics", position: getRandomPosition() },
    { word: "User goals", position: getRandomPosition() },
    { word: "User needs", position: getRandomPosition() },
    { word: "Task analysis", position: getRandomPosition() },
    { word: "Card sorting", position: getRandomPosition() },
    { word: "A/B testing", position: getRandomPosition() },
    { word: "Conversion rate optimization", position: getRandomPosition() }
  ];
  
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWordIndex < initialWords.length) {
        const updatedWords = [...words];
        for (let i = 0; i < 3; i++) {
          if (currentWordIndex + i < initialWords.length) {
            updatedWords.push(initialWords[currentWordIndex + i]);
          }
        }
        setWords(updatedWords);
        setCurrentWordIndex(currentWordIndex + 3);
      } else {
        setWords([]);
        setCurrentWordIndex(0);
      }
    }, 4000);
  
    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex, initialWords, words]);

  return (
    <div style={{height:"80vh", justifyContent:"center",alignItems:"center"}} className={styles.tresde}>
      <Canvas  camera={{ fov: 70, position: [0, 50, 50] }}>
        <OrbitControls/>
      <Suspense fallback={null}>
        <Axo position={[0, 0, 0]}/>
        </Suspense >

        <Instances count={initialWords.length} words={words} />


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
