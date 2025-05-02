import "./DeliveryHighlights.css"

const DeliveryHighlights = ({ size = "medium" }) => {
  return (
    <div className={`delivery-highlights ${size}`}>
      <div className="highlight free-delivery">
        <span className="highlight-icon">🚚</span>
        <span className="highlight-text">Free Delivery</span>
      </div>
      <div className="highlight cash-on-delivery">
        <span className="highlight-icon">💵</span>
        <span className="highlight-text">Cash on Delivery</span>
      </div>
    </div>
  )
}

export default DeliveryHighlights
