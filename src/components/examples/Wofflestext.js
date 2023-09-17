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
  const isInView = useInView(ref, { once: true,amount:.3 });

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
<h7 style={{color:"var(--black)"}}>2023</h7>
          </motion.div>
</div>



  </div>
  <div className={styles.texr}>

    <h2 className={styles.pjf}>Woofles
</h2>
 <h5 className={styles.pjlt}>
 In this project, we developed a landing page for a restaurant.
 <br/>
<br/>
In general, restaurants display their menu and locations. In the case of Woofles, we focused on the ability to order delivery, taking into account the ease with which people can learn about the variety of customizations they can choose from. 
</h5>



<h2 className={styles.pjf}>My Role</h2>
 <h5 className={styles.pjlt}>
 I joined the team, working with the restaurant owner and their marketing and design team.
<br/><br/> 
Once we had a clear idea of what we wanted to achieve, we got to work.</h5>
<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflescreens} alt="restaurant design ux ui abril rivera"/>

<h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
 <h5 className={styles.pjlt}>
 We worked together to develop a personality for the website, based on the elements that the company already uses. 
 <br/><br/>
 I created a moodboard of different layouts and structures to share with the team and brainstorm ideas.
</h5>
<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflesrule} alt="abril aeri ux ui design"/>



 <h5 className={styles.pjlt}>
 
 Throughout the project, I enjoyed developing the different elements and experimenting with the shapes of the graphical elements.
 <br/> <br/>
Finally, animations were added to the product, which is still under development and awaiting launch.


 </h5>
 
 
  </div>
</div>
<Imagerowf/>
</div>  )
}

export default Wofflestext