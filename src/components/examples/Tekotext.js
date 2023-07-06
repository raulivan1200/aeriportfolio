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

En este caso es el desarrollo de un website para un estudio creativo.

Más allá de promocionar la empresa se buscaba darle personalidad y estilos propios y caracteristicos del equipo.

 </h5>



<h2 className={styles.pjf}>My Role</h2>
 <h5 className={styles.pjlt}>
  
 Me uní al equipo de trabajo. empecé a trabjar con el project manager, para entender el proyecto y los objetivos del mismo.

Al entender el proyecto, me empecé a interesar por desarrollarlo partiendo por la investigación.

</h5>

<Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={teko2} alt="design system studio marketing"/>

<h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>


 <h5 className={styles.pjlt}>

 Hice una busqueda de referencias que fueran alineadas con las ideas que el equipo tenía. A partir de un moodboard y una lluvia de ideas posterior a ello comparti con el equipo las mejores ideas.

Finalmente empezamos a compartir más ideas de como podría darsele más voz y personalización a la pagina. 

</h5>



 <h5 className={styles.pjlt}>

 Una vez logramos definir varios puntos, aterrizamos los elementos en wireframes para pasar a prototipos más reales que representaran realmente al estuidio.  

 </h5>
 
 
  </div>
</div>
<Imagerowf/>
</div>  )
}

export default Tekotext