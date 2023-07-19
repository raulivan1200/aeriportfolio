import React from 'react'
import Image from 'next/image'
import styles from "../../styles/pj.module.css"
import billh from "../../../public/images/Portfolio/bill3g.png"
import billd from "../../../public/images/Portfolio/bill3co.png"
import billc from "../../../public/images/Portfolio/billsplitter.png"
import Menupj from '../Menu/Menupj'
import { Imagerowf } from './Imagerowf'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'

export const Billsplittertext = () => {

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
          variants={animationVariants}

        >
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
    <h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Product Design<br/>Design System </h7>
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
    
        <h2 className={styles.pjf}>BillSplitter
    </h2>
     <h5 className={styles.pjlt}>
     There are several screens of an application for paying the bill at different restaurants that offer the service.
    <br/>
    It is focused on connecting different users to allow them to split the bill according to the dishes they have consumed or equally.
    <br/>
    The development of this proposal took less than 24 hours, including UX and UI.
     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>
     After understanding the main functionality that needed to be developed, I started outlining the requirements that should be included and considered to offer the best possible experience. Taking into account the goal of providing few screens and fulfilling the specified task.
    <br/>
    After finalizing the flow and translating it into wireframes, I applied the visual elements shown in the final result.
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billh} alt="bill system ux ui abril rivera"/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>
     I found several references by searching and quickly consulting various resource websites to gather the best references in a quick moodboard.
    <br/>
    Based on them, I created a style for the screens that had been planned, also considering maintaining and enhancing the application.
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billd} alt="billing systems design ux ui"/>
    
    
    
     <h5 className={styles.pjlt}>
     I constantly relied on a design system to maintain consistency in the screens I was creating.
    <br/>
    My goal was to make the screens look harmonious and capture a calm and playful atmosphere that could be associated with having a meal with friends who ultimately split the bill at the end.
     </h5>
     
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billc} alt="sistema de facturación ux ui"/>
     
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}
