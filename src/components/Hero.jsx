import { useNavigate } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate()

  const goToProducts = () => {
    navigate("/products")
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Quality Products, Hassle-Free Shopping</h1>
        <p>Shop a wide range of trusted products with free delivery and cash on delivery options — all at great prices.</p>
        <button className="cta-button" onClick={goToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
