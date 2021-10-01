import React from "react"
import Navbar from "./Navber"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
