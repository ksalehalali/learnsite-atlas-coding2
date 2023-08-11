import React from 'react'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <div className='layout'>
        <Navbar/>
         {props.children}
         
         </div>

  )
}

export default Layout