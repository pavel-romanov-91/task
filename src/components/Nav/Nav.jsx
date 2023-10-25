import React from 'react'
import './Nav.css'

function Nav({menu_items}) {
    const items = menu_items.map((item)=>({...item,id:Math.random()}))
    return (
      <div>
        <ul className='nav_ul'>
       {
       items.map((item)=>(
          <li className='nav_li'key={item.id}><a href='#'>{item.title} </a></li>
      ))}
        </ul>
      </div>
    )
  }

export default Nav