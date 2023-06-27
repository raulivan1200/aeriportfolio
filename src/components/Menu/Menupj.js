import React from 'react'
import SwitchTheme from '../SwitchTheme'
const Menupj = () => {
  return (
    <div className='menux'>
        <div className='izqx'>
        <svg className='svco ssm' xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="20"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
        <h6 className='wh'> Back</h6>
        </div>
        <div className='derx' >
        <SwitchTheme/>
        </div>

    </div>
  )
}

export default Menupj