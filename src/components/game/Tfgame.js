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
  const x = Math.random() * 50 - 30; // Random x coordinate between -20 and 20
  const y = Math.random() * 40 + 30; // Random y coordinate between 20 and 50
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
    ref.current.position.y -= 0.0025 * elapsedTime; // Update Y position based on elapsed time
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

let sizeclk;

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
    }, 2000);
  
    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex, initialWords, words]);


  const handleCanvasClick = () => {
   sizeclk=sizeclk+1;
    const randomIndex = Math.floor(Math.random() * initialWords.length);
    const randomWord = initialWords[randomIndex];
    const position = getRandomPosition();
     const fontSize =1+sizeclk;
    const newWord = { word: randomWord.word, position };
    setWords((prevWords) => [...prevWords, newWord]);
  };

  return (
    <div style={{height:"80vh", justifyContent:"center",alignItems:"center"}} className={styles.tresde}>
      <Canvas onClick={handleCanvasClick} camera={{ fov: 70, position: [0, 50, 50] }}>
        <OrbitControls  
        minDistance={30}
          maxDistance={100}
          />
      <Suspense fallback={null}>
        <Axo position={[0, 0, 0]}/>
        </Suspense >
        {words.map((word, index) => (<WordFalling key={index} word={word.word} position={word.position}/>        ))}

        <ambientLight intensity={0.5} />
<ambientLight intensity={0.2} />
        <pointLight    decay={10}  width={50}      height={50}      color={"#2a4494"}      intensity={1.7}      position={[-20, 30, 0]}      lookAt={[0, 0, 0]}      penumbra={10}    />
        <rectAreaLight      width={10}      height={30}      color={"#e15a97"}      intensity={2}      position={[0, 0, 20]}      lookAt={[0, 0, 0]}      penumbra={20}    />
        <rectAreaLight      width={10}     height={30}      color={"#faff00"}      intensity={16.8}      position={[25, 15, 5]}      lookAt={[0, 0, 0]}      penumbra={30}    />
      </Canvas>
    </div>
  );
}

export default Tfgame;
