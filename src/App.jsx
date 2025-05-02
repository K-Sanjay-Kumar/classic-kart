
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import DeliveryBanner from "./components/DeliveryBanner"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ContactPage from "./pages/ContactPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import "./App.css"

function App() {
  return (
    <div className="app">
      <DeliveryBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
