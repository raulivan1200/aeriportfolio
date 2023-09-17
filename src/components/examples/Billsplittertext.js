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
          variants={animationVariants}

        >
        <h4 className={styles.pjtb}>User segment</h4>
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
 
     I designed the key screens of a mobile app for online restaurant payments, with the main goal of facilitating and improving the user experience at checkout. The app allows users to have different payment methods available, making it more convenient and flexible for them to pay.
        <br/><br/>
        Using UX/UI principles, I created an intuitive and visually appealing interface that simplifies the payment process and significantly improves usability and user satisfaction.    
        <br/><br/>
        The main challenge was to consider the multiple scenarios that the app needed to cover, such as different payment methods, restaurant types, and user needs. Another important consideration was the short development time of the project, which was less than 24 hours.  
     </h5>
    
     <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billc} alt="sistema de facturación ux ui"/>
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>
  
     I developed the project independently, from the initial concept to the prototype.
         <br/><br/>
         My process began with a brief analysis of the needs that needed to be met. Based on this analysis, I set a series of goals to define a coherent user flow.
         <br/><br/>
         Next, I analyzed existing apps that could be related and collected information and images to create a mood board.
         <br/><br/>
          Once I had the flow defined, I proceeded to develop wireframes to validate the flow and then moved on to a more polished version, applying visual styles. All of this was done in Figma.
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billh} alt="bill system ux ui abril rivera"/>
    
    <h2 className={styles.pjf}>RESULTS</h2>
     <h5 className={styles.pjlt}>

     The interface design effectively communicated the functionality and also allowed for the visualization of future integrations. 
         <br/><br/>
         The feedback from users in the tests was positive, with 93% of comments being positive. All feedback was recorded and will be used to make necessary improvements.  
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billd} alt="billing systems design ux ui"/>
    
    
    
     <h5 className={styles.pjlt}>
      This required a focus on improving the user experience and developing an attractive interface that communicates the desired concepts and functionality.     
         <br/><br/>
     Using my skills in time management and efficient design, I was able to complete the project in a short timeframe while maintaining a high level of quality.
      </h5>
     
     
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}
