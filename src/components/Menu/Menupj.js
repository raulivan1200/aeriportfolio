import React from 'react'
import SwitchTheme from '../SwitchTheme'
import logoback from "../../../public/logos/back.svg"
import Image from 'next/image'
const Menupj = () => {
  return (
    <div className='menux'>
      <div className='wmpm'>
        
<div className='izqx'>
  <a href="/" style={{textDecoration: "none",display: "flex", alignItems: "center",gap:"12px"}}>
    <div style={{display: "flex"}}>
      <Image src={logoback} alt="logo" className="svco ssm" width={48} height={48} />

    </div>
    <h5 className='wh' >Back</h5>
    
  </a>
      </div>
        <div className='derx' >
        <p className='wect'>We can <a style={{ color: "var(--black)", textDecorationColor: "var(--black)", lineHeight: "26px", fontWeight: "400px", letterSpacing: "1px" }} href="mailto:someone@exemple.com?subject=Questions&body=Escribe aquí si tienes preguntas ">create together</a> </p>        
        </div>
</div>

    </div>
  )
}

export default Menupj