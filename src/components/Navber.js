import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/S__48349327.jpg"

const Navber = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="車星" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="nav-link "
            activeClassName="active-link"
          >
            首頁
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/allcarsPage"
            className="nav-link "
            activeClassName="active-link"
          >
            所有車種
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/tags"
            className="nav-link "
            activeClassName="active-link"
          >
            精選好車
          </Link>
          <Link
            onClick={() => setShow(false)}
            to="/about"
            className="nav-link "
            activeClassName="active-link"
          >
            關於車星
          </Link>
          <div className="nav-link contact-link">
            <Link onClick={() => setShow(false)} to="/contact" className="btn">
              與我聯繫
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navber
