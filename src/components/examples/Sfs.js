import React from 'react'
import Image from 'next/image'
import styles from "../../styles/pj.module.css"
import sysd from "../../../public/images/Portfolio/ssdetails.png"
import { Imagerowf } from './Imagerowf'
import Menupj from '../Menu/Menupj'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'

export const Sfs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };


  return (
    <div className={styles.pm}>
  <Menupj/>
    <div className={styles.container}>
      <div className={styles.texle}>
     <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: 0 }}
          variants={animationVariants}>
        <h4 className={styles.pjtb}>Segmento de 
    aplicación</h4>
    <hr className={styles.hrr}/>
          </motion.div>
    
    <div className={styles.txj}>
    <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .1 }}
          variants={animationVariants}>
    <h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Product Design<br/>Design System<br/>Branding </h7>
          </motion.div>
    </div>
    
    <div className={styles.txj}>
    <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .2 }}
          variants={animationVariants}>
    <h6 className={styles.pb6}>Tools</h6><h7 style={{color:"var(--black)"}}>Figma <br/>Photoshop<br/>Paper & Pencil</h7>
          </motion.div>
    </div>
    
    <div className={styles.txj}>
    <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .3 }}
          variants={animationVariants}>
    <h6 className={styles.pb6}>Year</h6>
    <h7 style={{color:"var(--black)"}}>2022</h7>
          </motion.div>
    </div>
    
    
    
      </div>
      <div className={styles.texr}>
    
        <h2 className={styles.pjf}>System for sales
    </h2>
     <h5 className={styles.pjlt}>

     
In this case, I worked closely with a team with expertise in different areas to develop a program that would facilitate their day-to-day work.


To begin, an analysis of the needs of the users of this desired system was conducted.

Based on that, the information architecture was constructed, considering the functionalities of each section.

     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>

     For this project, I participated in the interviews with the key users

     Based on the gathered information, we progressed and developed the middle-level wireframe sections in detail.

  We conducted tests with the users, in addition to new interviews, to verify that the elements being developed were actually functioning according to what they wanted to achieve.

    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={sysd} alt="sales store system ux UI Ux/ui Ux"/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>

     In this case, we explored with small elements currently present in the brand's logo, focusing primarily on the system's functions.

    </h5>
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}
