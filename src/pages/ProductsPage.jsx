
import { useState } from "react"
import Products from "../components/Products"

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return <Products currentPage={currentPage} onPageChange={handlePageChange} />
}

export default ProductsPage
