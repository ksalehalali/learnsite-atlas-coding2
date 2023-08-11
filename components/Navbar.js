import Link from 'next/link'
import Styles from './../styles/Navbar.module.css'

import React from 'react'
import { ST } from 'next/dist/shared/lib/utils'

function Navbar() {
  return (

<nav className={Styles.nav}>
<div className={Styles.container + " container"}>
    <div className={Styles.logo}>ThisisLogo</div>

<ul>
    <li>
        <Link href="/">
            Home 
        </Link>
    </li>
    <li> 
        <Link href="/about">
            About
        </Link>
    </li>
    <li>
        <Link href="/cart">
            Cart
        </Link>
    </li>
</ul>
</div>
</nav>
  )
}

export default Navbar