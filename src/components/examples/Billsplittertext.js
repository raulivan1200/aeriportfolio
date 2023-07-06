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
     Son varias pantallas de una aplicación para pagar la cuenta de una comida en diferentes restaurantes que cuenten con el servicio. 
    <br/>
    Esta enfocada en conectar a diferentes usuarios para permitirles dividirse la cuenta según los platillos que han consumido o a partes iguales.
    <br/>
    El desarrollo de esta propuesta duró menos de 24 horas, entre UX y UI. 
     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>
     A partir de entender la principal funcionalidad que se queria desarrollar, empecé a plantear los requerimientos que debían inlcuirse y considerarse para ofrecer la mejor experiencia posible. Tomando en cuenta principalmente el ofrecer pocas pantallas y cumplir con la tarea especificada.
    <br/>
    Al finalizar la parte de el flujo y aterrizarla en wireframes, aplique los elementos visuales que se muestran en el resultado final.
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billh} alt="bill system ux ui abril rivera"/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>
     Encontre varias referencias haciendo busquedas y consultas rapidas entre diversos sitios de recursos para aterrizar las mejores referencias en un rapido moodboard.
    <br/>
    Apartir de ellas genere un estilo para las pantallas que se habían planteado, considerando igual mantener y potencializar la aplicación.
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billd} alt="billing systems design ux ui"/>
    
    
    
     <h5 className={styles.pjlt}>
     Me apoye constantemente en un sistema de diseño para lograr mantener la consistencia en las pantallas que iba armando. 
    <br/>
    Mi meta era lograr que las pantallas se vieran armoniosas y capturar un ambiente traquilo y de juego que podría conllevar estar en una comida con amigos que finalmente se reparten la cuenta al finalizar.
     </h5>
     
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={billc} alt="sistema de facturación ux ui"/>
     
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}
