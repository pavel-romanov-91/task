import React from 'react'
import './Footer.css'

function Footer({contacts, copy}) {
  return (
    <div className='footer'>
      <span>{contacts}</span>
      <span>{copy}</span>
    </div>
  )
}

export default Footer