
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Classic Kart</h1>
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


