import React from 'react'
import Image from 'next/image'
import styles from "../../styles/pj.module.css"
import wofflescreens from "../../../public/images/sample.jpg"
import wofflesrule from "../../../public/images/sample.jpg"
import { Imagerowf } from './Imagerowf'


export const Sfs = () => {
  return (
    <div className={styles.pm}>


    <div className={styles.container}>
      <div className={styles.texle}>
    
        <h4 className={styles.pjtb}>Segmento de 
    aplicación</h4>
    
    <hr className={styles.hrr}/>
    
    <div className={styles.txj}>
    <h6 className={styles.pb6}>Deliverables</h6> <h7 style={{color:"var(--black)"}}>Product Design<br/>Design System<br/>Branding </h7>
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
    
        <h2 className={styles.pjf}>System for sales
    </h2>
     <h5 className={styles.pjlt}>

     En este caso trabajé de cerca con un equipo con conocimientos en diferentes ambitos para lograr desarrollar un programa que facilitar su trabajo día a día.

Para empezar se realizó un analisis de las necesidades de los usuarios de este sistema que se deseaba desarrollar.

A partir de ello se construyó la arquitectura de la información, considerando las funcionalidades de cada una de las secciones.

     </h5>
    
    
    
    <h2 className={styles.pjf}>My Role</h2>
     <h5 className={styles.pjlt}>

     Para este proyecto participe en las entrevistas con los usuarios principales.

A partir de la información recopilada avanzamos y desarrollamos detalladamente las secciones a nivel wireframe de nivel medio.

Se realizaron pruebas con los usuarios además de nuevas entrevistas para probar que los elementos que se estaban desarrollando realmente funcionaran para lo que querian lograr. 

    </h5>
    <Image   className={styles.radim} width={1920} height={1080} style={{height:"auto",width:"100%", objectFit:"scale-down"}} src={wofflescreens} alt=""/>
    
    <h2 className={styles.pjf}>BRANDING & LOGOMARK</h2>
     <h5 className={styles.pjlt}>

     En este caso exploramos con pequeños elementos presentes actualmente en el logo de la marca, centrandonos principalmente en las funciones del sistema.

    </h5>
      </div>
    </div>
    <Imagerowf/>
    </div>
  )
}
