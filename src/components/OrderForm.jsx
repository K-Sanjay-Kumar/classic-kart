
import { useState, useEffect, useRef } from "react"
import "./OrderForm.css"
import emailjs from "emailjs-com";
import {firestore} from "../firebase" // Import firebase configuration
import { collection, addDoc } from "firebase/firestore"

const OrderForm = ({ product, quantity = 1, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate customer name
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required"
    }

    // Validate mobile number
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required"
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number"
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate state
    if (!formData.state.trim()) {
      newErrors.state = "State is required"
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    // Validate pincode
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required"
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = "Please enter a valid 6-digit pincode"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const messageRef = useRef();
  const ref = collection(firestore, "Orders");

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const orderData = {
      product: {
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity,
      totalPrice: (product.price * quantity).toFixed(2),
      customerDetails: formData,
      timestamp: new Date().toISOString(),
    };

    const generateOrderHTML = (orders) => {
      return orders.map(order => `
        <table style="width: 100%; border-collapse: collapse">
          <tr style="vertical-align: top">
            <td style="padding: 24px 8px 0 4px; display: inline-block; width: max-content">
              <img style="height: 64px" height="64px" src="${order.image_url}" alt="item" />
            </td>
            <td style="padding: 24px 8px 0 8px; width: 100%">
              <div>${order.product_name}</div>
              <div style="font-size: 14px; color: #888; padding-top: 4px">QTY: ${order.units}</div>
            </td>
            <td style="padding: 24px 4px 0 0; white-space: nowrap">
              <strong>$${order.product_price}</strong>
            </td>
          </tr>
        </table>
      `).join("")
    }
    

    const ordersArray = [
      {
        product_name: product.name,
        product_price: product.price.toFixed(2),
        units: quantity,
        image_url: product.image, // Public URL
      },
    ];

    const templateParams = {
      customer_name: formData.customerName,
      mobile_number: formData.mobileNumber,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      address: formData.address,
      pincode: formData.pincode,
      order_id: "101",
      total_cost: (product.price * quantity).toFixed(2),
      orders_html: generateOrderHTML(ordersArray), // 👈 Injected here
    };

    try {
      await emailjs.send("service_6wrmyhx", "template_dhibr51", templateParams, "1MDuGm218X0MEce6V");
  
      await addDoc(ref, orderData); // Store order in Firebase Firestore
  
      onSubmit({
        product,
        quantity,
        customerDetails: formData,
      });
  
      alert("Order placed and confirmation email sent!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

  }

  const totalPrice = product ? (product.price * quantity).toFixed(2) : "0.00"

  return (
    <div className="order-form-overlay" onClick={onClose}>
      <div className="order-form-container" onClick={(e) => e.stopPropagation()}>
        <div className="order-form-header">
          <h2>Complete Your Order</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="order-form">
          <div className="product-summary">
            <h3>Order Summary</h3>
            <div className="product-info-row">
              <span>Product:</span>
              <span>{product?.name}</span>
            </div>
            <div className="product-info-row">
              <span>Quantity:</span>
              <span>{quantity}</span>
            </div>
            <div className="product-info-row total">
              <span>Delivery Fee:</span>
              <span>0.00</span>
            </div>
            <div className="product-info-row total">
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          <div className="form-section">
            <h3>Customer Information</h3>
            <div className="form-group">
              <label htmlFor="customerName">Full Name *</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className={errors.customerName ? "error" : ""}
              />
              {errors.customerName && <span className="error-message">{errors.customerName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number *</label>
              <input
                type="number"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={errors.mobileNumber ? "error" : ""}
                placeholder="10-digit mobile number"
              />
              {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
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
          </div>

          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={errors.state ? "error" : ""}
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? "error" : ""}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? "error" : ""}
              ></textarea>
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={errors.pincode ? "error" : ""}
                placeholder="6-digit pincode"
              />
              {errors.pincode && <span className="error-message">{errors.pincode}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderForm
