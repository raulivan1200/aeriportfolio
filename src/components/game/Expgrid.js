import React from 'react'
import styles from "../../styles/Skills.module.css"
function Expgrid() {
  return (
    <div className={styles.parentskilll}>
                <div className={styles.padlef}>
                <h1 className='wh' style={{textDecoration:"underline",textDecorationThickness:"1.7px", textUnderlineOffset:"12.3px"}}>
        My Journey
        </h1>
                </div>

    <div className={styles.parentexp}>

    <div className={styles.containerexpsk}>
        
    <div className={styles.ex1}>
<h2 className='wh'>Minami Design</h2>
<h3 className='wh lnh'>Ux Ui Designer</h3>
    </div>
    <div className={styles.ex2}><h6 className={styles.mcero}> Participated in the design of intuitive and attractive interfaces for more than 14 projects, using methodologies such as SCRUM, Lean design, and User Journeys. Designed websites and responsive versions, landing pages, and created sitemaps and user journeys. Developed a base design system that increased project development speed by 64%.</h6></div>
    <div className={styles.ex3}>
    <h2 className='wh'>Teko Estudio</h2>
<h3 className='wh lnh'>Ux Ui Designer</h3>
    </div>
    <div className={styles.ex4}><h6 className={styles.mcero}>Designed different flows and screens for systems and applications using UX and UI knowledge, exceeding customer and user expectations. Collaborated closely with other areas of the company, employing agile communication and project control.</h6></div>
    <div className={styles.ex5}>
    <h2 className='wh'>Chiquimundo</h2>
<h3 className='wh lnh'>Web Content designer</h3>
    </div>
    <div className={styles.ex6}><h6 className={styles.mcero}>Designed content using design strategies, increasing the company's visibility by 24% by considering trends. Led and coordinated content development projects using design strategies to give visibility to the company. Created mailing banners.</h6></div>
  </div>
    </div>
    </div>
  )
}

export default Expgrid
