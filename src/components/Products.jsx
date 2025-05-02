import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import OrderForm from "./OrderForm"
import "./Products.css"
import image1 from "../assets/images/Teddy-Bear/main-img.png"
import image2 from "../assets/images/Hair Styler/main-pic.jpg"
import image3 from "../assets/images/Magnetic-Charging-Cabel/main-pic.jpg"
import image4 from "../assets/images/Mini grinder bottle/main-pic.jpg"
import image5 from "../assets/images/Mini-Portable-Washnig-Machine/main-pic.jpg"

import image6 from "../assets/images/Mops/main-pic.jpg"
import image7 from "../assets/images/Portable Mini Fan/main-pic.jpg"
import image8 from "../assets/images/Smart Watch/main-pic.jpg"
import image9 from "../assets/images/Trimmer/main-pic.jpg"
import image10 from "../assets/images/Usb Reachargeable Mini Juice Mixer/main-pic.jpg"

const Products = ({ currentPage, onPageChange }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showOrderForm, setShowOrderForm] = useState(false)

  const productsPerPage = 8

  // Simulated product data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProducts = () => {
      setLoading(true)

      // Simulated product data
      const dummyProducts = [
        { id: 1, name: "Breathing Teddy Bear", oldPrice: 1499.29, price: 899.99, image: image1 },
        { id: 2, name: "5-in-1 Hair Dryer Brush |Multifunctional Hot Air Styler |Detachable Brush for Drying, Curling & Straightening, All Hair Types with Auto-Curl Function", oldPrice: 2899.00, price: 1999.00, image: image2 },
        { id: 3, name: "Fast Charging 3in1 Magnetic USB Charging Data Cable", oldPrice: 349.00, price: 229.08, image: image3 },
        { id: 4, name: "Electric USB Juice Maker, Juicer, Juicer Bottle, Blender, Grinder Mixer", oldPrice: 2499.99, price: 1999.09, image: image4 },
        { id: 5, name: "Mini portable washing machine", oldPrice: 2199.89, price: 1099.99, image: image5 },
        { id: 6, name: "Hand Free Spin Mop || Self-Wringing Floor Mop || 360 Rotatable Adjustable Cleaning Mop, ||", oldPrice: 1099.89, price: 599.09, image: image6 },
        { id: 7, name: "USB Foldable Fan", oldPrice: 849.89, price: 599.00, image: image7 },
        { id: 8, name: "Ultra Smart Watch", oldPrice: 5899.00, price: 2879.99, image: image8 },
        { id: 9, name: "T-Blade Trimmer", oldPrice: 2499.00, price: 1199.00, image: image9 },
        { id: 10, name: "Plastic Usb Juicer Bottle Blender, for Home, 420 ml", oldPrice: 2299.00, price: 1499.99, image: image10 },
      ]

      setProducts(dummyProducts)
      setLoading(false)
    }

    // Simulate network delay
    setTimeout(fetchProducts, 800)
  }, [])

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const handleOrderNow = (product) => {
    setSelectedProduct(product)
    setShowOrderForm(true)
  }

  const handleCloseOrderForm = () => {
    setShowOrderForm(false)
    setSelectedProduct(null)
  }

  const handleOrderSubmit = (orderData) => {
    // In a real app, this would send the order data to a server
    console.log("Order submitted:", orderData)
    alert("Your order has been placed successfully!")
    setShowOrderForm(false)
    setSelectedProduct(null)
  }

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>

        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <>
            <div className="products-grid">
              {currentProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    </Link>
                  </div>
                  <div className="product-info">
                    <h3>
                      <Link to={`/product/${product.id}`} className="product-name-link">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="product-price">
                      <span className="old-price">
                        {/* ₹{product.oldPrice.toFixed(2)} */}
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="new-price">
                        {/* ₹{product.price.toFixed(2)} */}
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </p><br />
                    <button className="order-now-btn" onClick={() => handleOrderNow(product)}>
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}

        {showOrderForm && selectedProduct && (
          <OrderForm
            product={selectedProduct}
            quantity={1}
            onClose={handleCloseOrderForm}
            onSubmit={handleOrderSubmit}
          />
        )}
      </div>
    </section>
  )
}

export default Products
