import React from 'react'
import styles from "../../styles/pj.module.css"
import Image from 'next/image'
import tekoh from "/public/images/Portfolio/tekohead.png"
import teko2 from "/public/images/Portfolio/tekodetail.png"
import Menupj from '../Menu/Menupj'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'
import { Imagerowf } from './Imagerowf'

function Tekotext() {

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

    <h4 className={styles.pjtb}>Website Design 
Studio</h4>
<hr className={styles.hrr}/>
          </motion.div>

<div className={styles.txj}>
<motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ease: "easeInOut",delay: .1 }}
          variants={animationVariants}>

<h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Product Design<br/>Design System<br/>Branding</h7>
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

    <h2 className={styles.pjf}>LandingPage
</h2>
 <h5 className={styles.pjlt}>

 In this case, it is the development of a website for a creative studio.

 Beyond promoting the company, the goal was to give it personality and unique styles characteristic of the team.

 </h5>



<h2 className={styles.pjf}>My Role</h2>
 <h5 className={styles.pjlt}>
  
 I joined the team and started working with the project manager to understand the project and its objectives.

 Once I understood the project, I became interested in developing it, starting with the research phase.

</h5>

<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={teko2} alt="design system studio marketing"/>

<h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>


 <h5 className={styles.pjlt}>

 
I conducted a search for references that aligned with the ideas the team had. Based on a moodboard and subsequent brainstorming session, I shared the best ideas with the team.

Finally, we started sharing more ideas on how to give the website more voice and personalization.

</h5>



 <h5 className={styles.pjlt}>

 Once we were able to define several points, we translated those elements into wireframes to create more realistic prototypes that truly represented the studio.

 </h5>
 
 
  </div>
</div>
<Imagerowf/>
</div>  )
}

export default Tekotext