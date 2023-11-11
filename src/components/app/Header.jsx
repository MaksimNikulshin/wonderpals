//Import components
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Import styles
import 'styles/app/header.scss'

export default function Header() {
  const [burger, setBurger] = useState(false)

  useEffect(() => {
    setBurger(false)
  }, [location.pathname])

  return (
    <header>
      <nav>
        <div>
          <Link>WONDERPALS</Link>
        </div>
        <div className={burger ? 'sub-menu active' : 'sub-menu'}>
          <Link>ABOUT</Link>
          <Link>SERVICES</Link>
          <Link>NEWS</Link>
          <Link>CONTACTS</Link>
          <Link>EN</Link>
        </div>
        <div
          className={burger ? 'burger active' : 'burger'}
          onClick={() => setBurger(!burger)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  )
}
