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
function WordFalling({ word, position }) {
  const ref = useRef();

  const getRandomColor = () => {
    const colors = ["#04395e", "#f45866", "#dd1c1a", "#d78521", "#f6f930", "#802392"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomSize = () => {
    const minSize = 2;
    const maxSize = 5;
    return Math.random() * (maxSize - minSize) + minSize;
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.y -= 0.003 * elapsedTime; // Update Y position based on elapsed time
  });

  return (
    <Text
      ref={ref}
      position={position}
      color={getRandomColor()}
      fontSize={getRandomSize()}
      anchorX="center"
      anchorY="middle"
    >
      {word}
    </Text>
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
        for (let i = 0; i < 6; i++) {
          if (currentWordIndex + i < initialWords.length) {
            updatedWords.push(initialWords[currentWordIndex + i]);
          }
        }
        
        setWords(updatedWords);
        setCurrentWordIndex(currentWordIndex + 6);
      } else {
        setWords([]);
        setCurrentWordIndex(0);
      }
    }, 6000);
  
    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex, initialWords, words]);

  return (
    <div style={{height:"80vh", justifyContent:"center",alignItems:"center"}} className={styles.tresde}>
      <Canvas  camera={{ fov: 70, position: [0, 50, 50] }}>
        <OrbitControls  
        minDistance={30}
          maxDistance={100}
          />
      <Suspense fallback={null}>
        <Axo position={[0, 0, 0]}/>
        </Suspense >

        {words.map((word, index) => (<WordFalling key={index} word={word.word} position={word.position}/>        ))}
        

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
