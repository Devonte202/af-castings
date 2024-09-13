import React from "react"

import Navbar from "../Navbar"

type LayoutProps = { 
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
