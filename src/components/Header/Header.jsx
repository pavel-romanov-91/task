import React from 'react'
import './Header.css'


function Header({logo_src}) {
  return (
    <div className='header_container'>
        <img src={logo_src} width='100' alt='bla bla'/>
        <div>
        <h2>Рога и копыта</h2>
        <span>Зицпредседатель Фунт всегда сидел</span>
        </div>
        
    </div>
  )
}

export default Header