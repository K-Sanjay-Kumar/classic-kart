
import { useState } from "react"
import "./ImageGallery.css"

const ImageGallery = ({ images, videos }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeType, setActiveType] = useState("image")

  const allMedia = [
    ...(images || []).map((src) => ({ type: "image", src })),
    ...(videos || []).map((src) => ({ type: "video", src })),
    ]

  console.log("allMedia:", allMedia)

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
    setActiveType(allMedia[index].type)
  }

  if (!allMedia || allMedia.length === 0) {
    return (
      <div className="image-gallery">
        <div className="main-image-container">
          <img src="/placeholder.svg" alt="Product" className="main-image" />
        </div>
      </div>
    )
  }

  return (
    <div className="image-gallery">
      <div className="main-media-container">
        {activeType === "image" ? (
          <img
            src={allMedia[activeIndex].src || "/placeholder.svg"}
            alt={`Product view ${activeIndex + 1}`}
            className="main-image"
          />
        ) : (
          <video src={allMedia[activeIndex].src} controls className="main-video" />
        )}
      </div>

      {allMedia.length > 1 && (
        <div className="thumbnails-container">
          {allMedia.map((media, index) => (
            <div
              key={index}
              className={`thumbnail ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              {media.type === "image" ? (
                <img src={media.src || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
              ) : (
                <div className="video-thumbnail">
                  <img
                    src={media.src.replace(".mp4", "-thumb.png") || "/placeholder.svg"}
                    alt={`Video thumbnail ${index + 1}`}
                  />
                  <div className="play-icon">▶</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
