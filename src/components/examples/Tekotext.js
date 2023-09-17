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

 In this case, the goal was to develop a website for a creative studio that would promote the company while also reflecting its unique personality and style.



 </h5>



<h2 className={styles.pjf}>My Role</h2>
 <h5 className={styles.pjlt}>
  
 I joined the team and collaborated with the project manager to gain a deep understanding of the project and its objectives.
 <br/><br/>
  Once I had a solid understanding of the project, I was eager to begin developing it, starting with the research phase.



</h5>

<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={teko2} alt="design system studio marketing"/>

<h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>


 <h5 className={styles.pjlt}>

 To align with the team's ideas, I conducted research for relevant references. Based on the moodboard and brainstorming session, I shared the most promising ideas with the team. 
 <br/><br/>
 Finally, we collaborated to develop more ideas for giving the website voice and personalization.

</h5>

<h2 className={styles.pjf}>DEVELOPMENT</h2>


 <h5 className={styles.pjlt}>

 Once we had defined several key elements, we translated them into wireframes to create realistic prototypes that truly captured the essence of the studio.


 </h5>
 
 
  </div>
</div>
<Imagerowf/>
</div>  )
}

export default Tekotext