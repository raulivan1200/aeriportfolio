import React from 'react'
import styles from "../../styles/pj.module.css"
import Image from 'next/image'
import img from "/public/images/Portfolio/imagikidstile.png"
import imco from "/public/images/Portfolio/imagikids.png"
import { Imagerowf } from './Imagerowf'
import Menupj from '../Menu/Menupj'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'

export const Imagikidstext = () => {
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
        <h4 className={styles.pjtb}>App for
    baby sister
    </h4>
    <hr className={styles.hrr}/>
        </motion.div>
    
    
    <div className={styles.txj}>
    <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .1 }}
          variants={animationVariants}>
    <h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>App para niñeras<br/>App para padres <br/>Design System <br/>Prototipo <br/> </h7>
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
    
        <h2 className={styles.pjf}>ImagiKids
    </h2>
     <h5 className={styles.pjlt}>
     
     
It is an application that allows a babysitting company to connect with mothers and fathers to hire services for their little ones.
    
The application facilitates the request of services, communication, and also provides an option to request additional service time.
    
     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>
     
     This is a test project that I developed over the course of 1 month. To do so, I created the screens based on a provided brief.
    
     I also outlined the information structure to start developing the project.
    
     Once I had the basic functionalities, I began developing wireframes considering the functions.
    
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={img} alt="kids toys parenting childs ninos nina parents babysitter app mobile ux"/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>
    
     Based on the logo that the fictional company had, I developed a color palette and a visual scheme
    
     Previously, I explored visual structures in a brainstorming session that could work.
    
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={imco} alt="ux ui babysitting mexico ux ui design"/>
    
    
    
     <h5 className={styles.pjlt}>
    
     Once that part was ready, I applied the colors, typography, and structure to the screens.
    
     In addition, I developed the clickable prototype in Figma.
    
    </h5>
     
     
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}