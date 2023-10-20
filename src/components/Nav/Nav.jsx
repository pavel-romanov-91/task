import React from 'react'
import './Nav.css'

function Nav({menu_items}) {
    const items = menu_items.map((item)=>({...item,id:Math.random()}))
    return (
      <div>
       {
       items.map((item)=>(
        <div key={item.id}>{item.title}</div>
      ))}

      </div>
    )
  }

export default Nav