import React from 'react'
import 
 { BsSearch}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className='main-title'>
            <h3>Hello Shahrukh👋🏼,</h3>
        </div>
        <div className='header-right'>
            <BsSearch className='icon' />
            <input type="text" placeholder="Search" />
        </div>
        
        
    </header>
  )
}

export default Header