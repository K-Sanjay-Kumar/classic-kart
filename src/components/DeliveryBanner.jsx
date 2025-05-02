import "./DeliveryBanner.css"

const DeliveryBanner = () => {
  return (
    <div className="delivery-banner">
      <div className="banner-container">
        <div className="banner-item">
          <span className="banner-icon">🚚</span>
          <span className="banner-text">Free Delivery on All Orders</span>
        </div>
        <div className="banner-item">
          <span className="banner-icon">💵</span>
          <span className="banner-text">Cash on Delivery Available</span>
        </div>
      </div>
    </div>
  )
}

export default DeliveryBanner
