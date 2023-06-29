import React from 'react'
import sample from "../../../public/images/sample.jpg"
import Image from 'next/image'
import styles from "../../styles/Grid.module.css"
import sshe from "/public/images/Portfolio/Sshead.png"
import wf from "/public/images/Portfolio/woffleshead.png"
import bih from "/public/images/Portfolio/billhead.png"
import tekoh from "/public/images/Portfolio/tekohead.png"
import imgh from "/public/images/Portfolio/imagikidsheader.png"
import process from "/public/images/Portfolio/woffleshead.png"
import { Parallax } from 'react-scroll-parallax'
import useMouse from '@react-hook/mouse-position'
import { motion, useTransform } from "framer-motion";
import { useState } from 'react'

function Deskgrid() {

  const[cursorYear, setcursorYear]=useState("")
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  let mouseXmove=0;
  let mouseYmove=0;
  mouseXmove=mouse.clientX;
  mouseYmove=mouse.clientY;
  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;

  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "var(--background)",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      scaleX: [1, 1.2, 0.8, 1.1, 0.9, 1],
      scaleY: [1, 0.8, 1.2, 0.9, 1.1, 1],
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "var(--black)",
      color: "var(--white)",
      height: 180,
      width: 180,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    }
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };

  function billsp(event) {
    setCursorText("Bill splitter");
    setCursorVariant("project");
    setcursorYear("2022")
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
    setcursorYear("")
  }
  function TekoEnter(event) {
    setCursorText("Teko Studio");
    setCursorVariant("project");
    setcursorYear("2022")
  }
  function Imagike(event) {
    setcursorYear("2022")
    setCursorText("Kidsy");
    setCursorVariant("project");
  }
  function WofflesEnter(event) {
    setCursorText("Woffles");
    setcursorYear("2022")
    setCursorVariant("project");
  }
  function SysalesEnter(event) {
    setCursorText("Woffles");
    setcursorYear("2022")
    setCursorVariant("project");
  }
  function proge(event) {
    setCursorText("on progress");
    setcursorYear("2023")
    setCursorVariant("project");
  }
  return (
    <div ref={ref}>
       <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText"><h3>{cursorText}</h3><h6>{cursorYear}</h6></span>
        </motion.div>

        <div className={styles.containerds}>
        <Parallax translateY={[3, -15]} easing={'ease'} speed={9} scale={[1,1.02]}>
    <motion.div initial={{x:0,y:0}} animate={{x:(mouseXmove/12-60)*-1,y:(mouseYmove/12-60)*-1}} transition={{type: "spring",stiffness: 260,damping: 20}}>
  <div className={styles.bigds} onMouseEnter={billsp} onMouseLeave={projectLeave}>  
  <div className={styles.brims} >
  <a href="/Salessystem">  <Image className={styles.imrs}   src={sshe} alt="Abril Rivera front end ux design designer"></Image> </a>
  
  </div>
  </div>
    </motion.div>
  </Parallax>

  <Parallax translateY={[-15, 25]} easing={'ease'} speed={10} scale={[1,1.01]}>
  <motion.div initial={{x:0,y:0}} animate={{x:(mouseXmove/8-60)*-1,y:(mouseYmove/9-60)*-1}} transition={{type: "spring",stiffness: 260,damping: 20}}>

  <div className={styles.bb3} onMouseEnter={WofflesEnter} onMouseLeave={projectLeave}>
  <div className={styles.brims}>
  <a href="/Woffles"> <Image className={styles.imrs}  src={wf} alt="ux systems"></Image></a>
  </div>
     </div>
  </motion.div>
     </Parallax>

     <Parallax translateY={[30, -10]} easing={'ease'} speed={11} scale={[1,1.03]}>
     <motion.div initial={{x:0,y:0}} animate={{x:(mouseXmove/11-60)*-1,y:(mouseYmove/8-60)*-1}} transition={{type: "spring",stiffness: 260,damping: 20}}>
  <div className={styles.bb2} onMouseEnter={billsp} onMouseLeave={projectLeave}>
  <div className={styles.brims}>
  <a href="/Billsplitter">  <Image className={styles.imrs}  src={bih} alt="bill splitter ux ui designer"></Image></a>
  </div>
     </div>
     </motion.div>
     </Parallax>

     <Parallax translateY={[15, 10]} easing={'ease'} speed={10} scale={[1,1.01]}>
     <motion.div initial={{x:0,y:0}} animate={{x:(mouseXmove/8-60)*-1,y:(mouseYmove/10-60)*-1}} transition={{type: "spring",stiffness: 260,damping: 20}}>
  <div className={styles.bb4} onMouseEnter={TekoEnter} onMouseLeave={projectLeave}>
  <div className={styles.brims}>
   <a href="/Teko"> <Image className={styles.imrs}  src={tekoh} alt="ux agency business design "></Image></a>
   </div>
     </div>
     </motion.div>
     </Parallax>

     <Parallax translateY={[10, -30]} easing={'ease'} speed={3} scale={[1,1.05]}>
     <motion.div initial={{x:0,y:0}} animate={{x:(mouseXmove/6-100)*-1,y:(mouseYmove/8-60)*-1}} transition={{type: "spring",stiffness: 260,damping: 20}}>
  <div className={styles.bb5} onMouseEnter={Imagike} onMouseLeave={projectLeave}>
    <div className={styles.brims}>
        <a href="/Imagikids"> <Image className={styles.imrs}  src={imgh} alt="kids app ux design"></Image></a>
    </div>
  </div>
     </motion.div>
  </Parallax>



</div>

    </div>
  )
}

export default Deskgrid