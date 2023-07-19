import React from 'react'
import styles from "../../styles/pj.module.css"
import Image from 'next/image'
import wofflescreens from "/public/images/Portfolio/woffles.png"
import wofflesrule from "/public/images/Portfolio/wofflesdetail.png"
import { Imagerowf } from './Imagerowf'
import Menupj from '../Menu/Menupj'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'

function Wofflestext() {
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
            
    <h4 className={styles.pjtb}>LandingPage for a restaurant</h4>
<hr className={styles.hrr}/>
          </motion.div>

<div className={styles.txj}>
<motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .1 }}
          variants={animationVariants}>

<h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Landing Page Design<br/>Design System <br/>Branding<br/>Responsive Versions </h7>
          </motion.div>
</div>

<div className={styles.txj}>
<motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .2 }}
          variants={animationVariants}>

<h6 className={styles.pb6}>Tools</h6><h7 style={{color:"var(--black)"}}>Figma <br/>Photoshop <br/>Illustrator<br/>Paper & Pencil</h7>
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

    <h2 className={styles.pjf}>Woofles
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
<br/> After completing the flow and translating it into wireframes, I applied the visual elements that are shown in the final result.
</h5>
<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflescreens} alt="restaurant design ux ui abril rivera"/>

<h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
 <h5 className={styles.pjlt}>
 I found several references by searching and quickly consulting various resource websites to gather the best references in a quick moodboard.
<br/> Based on those references, I generated a style for the screens that had been planned, considering both maintaining and enhancing the application.
</h5>
<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflesrule} alt="abril aeri ux ui design"/>



 <h5 className={styles.pjlt}>
 
I constantly relied on a design system to maintain consistency in the screens I was creating.
<br/> My goal was to make the screens look harmonious and capture a calm and playful atmosphere that could be associated with having a meal with friends who ultimately split the bill at the end
 </h5>
 
 
  </div>
</div>
<Imagerowf/>
</div>  )
}

export default Wofflestext