
import { useState, useRef } from "react"
import "./Contact.css"
import {firestore} from "../firebase" // Import firebase configuration
import { collection, addDoc } from "firebase/firestore"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const messageRef = useRef();
  const ref = collection(firestore, "ContactUs");

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        await addDoc(ref, {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }

      setSubmitted(true)

      setFormData({
        name: "",
        email: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">Thank you for your message! We'll get back to you soon.</div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions about our products or need assistance? Fill out the form and our team will get back to you
              as soon as possible.
            </p>
            <p>You can also reach us at:</p>
            <ul>
              <li>Phone: +91 7993545724</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
