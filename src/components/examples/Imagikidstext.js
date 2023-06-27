import React from 'react'
import styles from "../../styles/pj.module.css"
import Image from 'next/image'
import wofflescreens from "/public/images/Portfolio/wofflesshoot.png"
import wofflesrule from "/public/images/Portfolio/wofflescolors.png"

import { Imagerowf } from './Imagerowf'
import Menupj from '../Menu/Menupj'

export const Imagikidstext = () => {
  return (
    <div className={styles.pm}>
  <Menupj/>
    <div className={styles.container}>
      <div className={styles.texle}>
    
        <h4 className={styles.pjtb}>App for
    baby sister
    </h4>
    
    <hr className={styles.hrr}/>
    
    <div className={styles.txj}>
    <h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>App para niñeras<br/>App para padres <br/>Design System <br/>Prototipo <br/> </h7>
    </div>
    
    <div className={styles.txj}>
    <h6 className={styles.pb6}>Tools</h6><h7 style={{color:"var(--black)"}}>Figma <br/>Photoshop<br/>Paper & Pencil</h7>
    </div>
    
    <div className={styles.txj}>
    <h6 className={styles.pb6}>Year</h6>
    <h7 style={{color:"var(--black)"}}>2022</h7>
    </div>
    
    
    
      </div>
      <div className={styles.texr}>
    
        <h2 className={styles.pjf}>ImagiKids
    </h2>
     <h5 className={styles.pjlt}>
     
     Es una aplicación que permite a una empresa de niñeras entrar en contacto con madres y padres de familia, para poder contratar servicios para sus pequeños. 
    
    La aplicación facilita la solicitud de los servicios, la comunicación, y además brinda una opción para que se pueda solicitar más tiempo del servicio.
    
     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>
     
     Este es un proyecto de prueba que desarrolle a lo largo de 1 mes. Para ello desarrolle las pantallas en base a un brief que se me brindo. 
    
    Asi mismo plantee la estructura de la información para poder ir desarrollando el proyecto.
    
    Apartir de tener las funcionalidades básicas, empecé a desarrollar wireframes considerando las funciones.
    
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflescreens} alt=""/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>
    
     A partir de el logo que la empresa ficticia poseeia, desarrolle una paleta de colores y un esquema visual.
    
    Previamente explore en una lluvia de ideas estructuras visuales que pudieran funcionar. 
    
    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflesrule} alt=""/>
    
    
    
     <h5 className={styles.pjlt}>
    
    Una vez lista esa parte aplique los colores, tipografia y estructura a las pantallas.
    
    Además de ello desarrolle el prototipó clickleable en figma.
    
    </h5>
     
     
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}