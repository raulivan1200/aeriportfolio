import React, { useEffect, useState } from 'react';
import closex from "../../../public/logos/close.svg"
import Image from 'next/image';
import open from "../../../public/logos/open.svg"
import SwitchTheme from '../SwitchTheme';
import { motion,AnimatePresence } from 'framer-motion';

function Menu({ onProjectClick, onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -40; // Offset in pixels
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
      handleClose();
    }
  };

  const handleProjectClick = () => {
    onProjectClick();
    handleScrollTo('head-section');
  };

  const handleContactClick = () => {
    onContactClick();
    handleScrollTo('grid-section');
  };

  return (
    <div className="menux">
      <div className="izqx" style={{mixBlendMode:"difference !important",width:"50%"}}>
      <Image src="./logos/open.svg" className='svco' alt='open' width={48} height={48} onClick={handleClick}></Image>
        <h5 style={{color:"var(--black)", paddingLeft:"16px"}}>
            Esmeralda Rivera
        </h5>
      </div>
      <div className="derx">
      <p className='wect'>We can <a style={{color:"var(--black)", textDecorationColor:"var(--black)", lineHeight:"26px", fontWeight:"400px",letterSpacing:"1px"}} href="mailto:someone@exemple.com?subject=Questions&body=Escribe aquí si tienes preguntas ">create together</a> </p>
        <AnimatePresence>
        {isOpen && (
          <motion.div className="menu-container" 
          initial={{ y: '100vh', opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: '100vh', opacity: 0, scale: 0 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}

          >
            <div className='mpm'> 
           <div style={{width:"100%",justifyContent:"space-between", display:"flex", flexDirection:"row"}}>
           <Image src="./logos/close.svg" className='svcom' alt='close' width={48} height={48} onClick={handleClose}></Image>
            <SwitchTheme/>
           </div>

              <h2 className='menubutton' onClick={() => handleScrollTo('head-section')} style={{width:"fit-content",fontSize:"64px",fontWeight:"600",color:"var(--black)"}}>Go Up</h2>
              <h2 className='menubutton' onClick={() => handleScrollTo('grid-section')} style={{width:"fit-content",fontSize:"64px",fontWeight:"600",color:"var(--black)"}}>Projects</h2>
              <h2 className='menubutton' onClick={() => handleScrollTo('exp-section')} style={{width:"fit-content",fontSize:"64px",fontWeight:"600",color:"var(--black)"}}>About Me</h2>
              <h2 className='menubutton' onClick={() => handleScrollTo('skills-section')} style={{width:"fit-content",fontSize:"64px",fontWeight:"600",color:"var(--black)"}}>My Journey</h2>
            <a href="mailto:vannie.aeri@gmail.com" style={{textDecoration:"none", color:"var(--black)"}}>
              <h2 style={{fontSize:"20px",fontWeight:"400",marginTop:"-1%"}}>Lic. Esmeralda Rivera</h2>
            </a>
            </div>

          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Menu;
