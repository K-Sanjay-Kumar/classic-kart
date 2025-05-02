
import { useState } from "react"
import "./Footer.css"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState(null) // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    // Clear any previous status when user starts typing again
    if (subscribeStatus) {
      setSubscribeStatus(null)
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setSubscribeStatus("error")
      setErrorMessage("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setSubscribeStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    // In a real app, this would send the email to a server
    console.log("Subscribing email:", email)

    // Simulate successful subscription
    setSubscribeStatus("success")
    setEmail("")

    // Reset success message after 5 seconds
    setTimeout(() => {
      if (subscribeStatus === "success") {
        setSubscribeStatus(null)
      }
    }, 5000)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-subscription">
          <div className="subscription-content">
            <h3>Stay Updated</h3>
            <p>Subscribe with your email to receive the latest updates on our products and exclusive offers.</p>

            <form className="subscription-form" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className={subscribeStatus === "error" ? "error" : ""}
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </div>

              {subscribeStatus === "error" && <p className="error-message">{errorMessage}</p>}
              {subscribeStatus === "success" && <p className="success-message">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <div className="footer-logo">
              <h2>Classic Kart</h2>
            </div>
            <p className="footer-tagline">Timeless Classics, Delivered to You</p>
          </div>
          {/* <p className="copyright">&copy; {new Date().getFullYear()} Classic Kart. All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
