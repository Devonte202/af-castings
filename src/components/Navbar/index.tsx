'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import styles from './styles.module.css'

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__company_info}>
        <Link href="/" className={styles.navbar__logo}>
          <Image className={styles.navbar__logo_img} src="/af-castings-logo.jpg" alt="logo" height={150} width={150}/>
        </Link>
        <h1 className={styles.navbar__title} >AF Castings</h1>
      </div>
      <div className={styles.navbar__links}>
        <Link className={styles.navbar__link} href="/about">About</Link>
        <Link className={styles.navbar__link} href="/contact">Contact</Link>
        <Link className={styles.navbar__link} href="/models">Models</Link>
      </div>
      { isOpen && (
        <div className={styles.navbar__sidebar}>
          <div className={styles.navbar__topbar}>
            <div className={styles.navbar__logo}>
              <Image className={styles.navbar__logo_img} src="/af-castings-logo.jpg" alt="logo" height={150} width={150}/>
            </div>
            <button onClick={toggleMenu} className={styles.navbar__close}>
              <svg fill="#000000" height={30} width={30} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg>
            </button>
          </div>
          <div className={styles.navbar__mobilelinks}>
            <Link className={styles.navbar__link} href="/about">About</Link>
            <Link className={styles.navbar__link} href="/contact">Contact</Link>
            <Link className={styles.navbar__link} href="/models">Models</Link>
          </div>
        </div>
      )}
      <button onClick={toggleMenu} className={styles.navbar__hamburger}>
        <svg viewBox="0 0 24 24" height="40" width="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"></path> </g></svg>
      </button>
    </nav>
  )
}

export default Navbar
