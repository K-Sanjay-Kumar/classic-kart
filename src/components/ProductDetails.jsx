import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import OrderForm from "./OrderForm"
import ImageGallery from "./ImageGallery"
import DeliveryHighlights from "./DeliveryHighlights"
import "./ProductDetails.css"

import teddyImg1 from "../assets/images/Teddy-Bear/main-img.png"
import teddyImg2 from "../assets/images/Teddy-Bear/teddy-1.jpg"
import teddyImg3 from "../assets/images/Teddy-Bear/teddy-2.webp"
import teddyImg4 from "../assets/images/Teddy-Bear/teddy-3.jpg"
import teddyVideo from "../assets/images/Teddy-Bear/breathing-teddy.mp4"

import product2Img1 from "../assets/images/Hair Styler/main-pic.jpg"
import product2Img2 from "../assets/images/Hair Styler/hair-dryer-1.jpg"
import product2Img3 from "../assets/images/Hair Styler/hair-dryer-2.jpg"

import product3Img1 from "../assets/images/Magnetic-Charging-Cabel/main-pic.jpg"
import product3Img2 from "../assets/images/Magnetic-Charging-Cabel/MCC-1.jpeg"
import product3Img3 from "../assets/images/Magnetic-Charging-Cabel/MCC-2.jpeg"
import product3Img4 from "../assets/images/Magnetic-Charging-Cabel/MCC-3.png"

import product4Img1 from "../assets/images/Mini grinder bottle/main-pic.jpg"
import product4Img2 from "../assets/images/Mini grinder bottle/main-pic-1.jpg"
import product4Img3 from "../assets/images/Mini grinder bottle/main-pic-2.jpg"

import product5Img1 from "../assets/images/Mini-Portable-Washnig-Machine/main-pic.jpg"
import product5Img2 from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washnig-machine-1.jpg"
import product5Img3 from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washnig-machine-2.jpg"
import product5Img4 from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washnig-machine-3.jpg"
import product5Img5 from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washnig-machine-4.jpg"
import product5Img6 from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washnig-machine-5.jpg"
import product5Video from "../assets/images/Mini-Portable-Washnig-Machine/Portable-washing-machine-video.mp4"

import product6Img1 from "../assets/images/Mops/main-pic.jpg"
import product6Img2 from "../assets/images/Mops/Mop-1.jpg"
import product6Img3 from "../assets/images/Mops/Mop-2.jpg"
import product6Img4 from "../assets/images/Mops/Mop-3.jpg"
import product6Img5 from "../assets/images/Mops/Mop-4.jpg"

import product7Img1 from "../assets/images/Portable Mini Fan/main-pic.jpg"
import product7Img2 from "../assets/images/Portable Mini Fan/fan-1.jpg"
import product7Img3 from "../assets/images/Portable Mini Fan/fan-2.jpg"
import product7Img4 from "../assets/images/Portable Mini Fan/fan-3.jpg"
import product7Img5 from "../assets/images/Portable Mini Fan/fan-4.jpg"

import product8Img1 from "../assets/images/Smart Watch/main-pic.jpg"
import product8Img2 from "../assets/images/Smart Watch/watch-1.jpg"
import product8Img3 from "../assets/images/Smart Watch/watch-2.jpg"
import product8Img4 from "../assets/images/Smart Watch/watch-3.jpg"

import product9Img1 from "../assets/images/Trimmer/main-pic.jpg"
import product9Img2 from "../assets/images/Trimmer/trimmer-1.jpg"

import product10Img1 from "../assets/images/Usb Reachargeable Mini Juice Mixer/main-pic.jpg"
import product10Img2 from "../assets/images/Usb Reachargeable Mini Juice Mixer/mixer-1.jpg"
import product10Img3 from "../assets/images/Usb Reachargeable Mini Juice Mixer/mixer-2.jpg"
import product10Img4 from "../assets/images/Usb Reachargeable Mini Juice Mixer/mixer-3.jpg"
import product10Img5 from "../assets/images/Usb Reachargeable Mini Juice Mixer/mixer-4.jpg"


const ProductDetails = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [showOrderForm, setShowOrderForm] = useState(false)

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProductDetails = () => {
      setLoading(true)

      // Simulated product data - same as in Products.jsx but with multiple images
      const dummyProducts = [
        {
          id: 1,
          name: "Breathing Teddy Bear, Plush Sound Machine Baby Gift with Music, Lights & Breathing Motion, Infant Toys for Newborns Soft Breathing Stitch Teddy",
          oldPrice: 1499.29,
          price: 899.99,
          image: teddyImg1,
          images: [teddyImg2, teddyImg3, teddyImg4],
          videos: [teddyVideo],
          description:
            "The Breathing Teddy Bear is a soothing bedtime companion specially designed for newborns and infants. With its gentle breathing motion, soft lullabies, and calming lights, it helps babies relax and drift off to sleep peacefully. Made from ultra-soft, baby-safe fabric, it's perfect for cuddling and comfort. Its smart sensor detects fussiness and responds with soothing features, making nighttime easier for both babies and parents. Whether it’s for naps or nighttime routines, this teddy offers security and serenity all in one adorable package.",
          features: [
            "Breathing Motion: Gently moves up and down to mimic real breathing, helping calm and soothe babies",
            "Soft Music & Lights: Plays gentle music and soft lights to create a peaceful sleeping environment",
            "Customizable Settings: Up to 30 minutes of music and sounds with adjustable volume control.",
            "11 Sensory Discoveries: Engages baby's senses of sight, hearing, and touch with lights, sounds, and textures.",
            "Extra-Soft Fabric: Made from super soft cotton, safe for newborns and toddlers.",
            "Smart Sensor: Detects when your baby is fussy and soothes them automatically.",
            "Perfect Gift Idea: A thoughtful gift for new parents, baby showers, or birthdays.",
          ],
          specifications: {
            Dimensions: "25.3 x 21.7 x 11.9 cm",
            Weight: "350 grams",
            Colour: "Multicolor",
            Recommended_Age: "5 months to 6 years",
          },
        },
        {
          id: 2,
          name: "5-in-1 Hair Dryer Brush |Multifunctional Hot Air Styler |Detachable Brush for Drying, Curling & Straightening, All Hair Types with Auto-Curl Function",
          oldPrice: 2899.00,
          price: 1999.00,
          image: product2Img1,
          images: [product2Img1, product2Img2, product2Img3],
          description:
            "Transform your hair care routine with the ultimate 5-in-1 Hair Dryer Brush — a salon-grade styling tool designed for convenience and versatility. Whether you're looking to dry, straighten, curl, volumize, or smoothen your hair, this multifunctional device does it all. Featuring five detachable brush heads and advanced ionic technology, it minimizes heat damage while taming frizz and flyaways. The ergonomic and lightweight design ensures easy handling, and the customizable heat settings make it safe and effective for all hair types. From sleek straight styles to bouncy curls, this tool delivers professional-quality results from the comfort of your home. Ideal for everyday styling or special occasions, it also makes a thoughtful gift for beauty enthusiasts.",
          features: [
            "5-in-1 Styling Tool: Dry, curl, straighten, and volumize with one device, thanks to 5 detachable brush heads.",
            "Advanced Ionic Technology: Reduces frizz and static, leaving hair smooth, shiny, and manageable.",
            "Customizable Heat Settings: 3 heat modes plus a cool shot function for optimal control on different hair types.",
            "Ergonomic & Lightweight Design: Comfortable grip for easy use without hand fatigue — perfect for everyday styling.",
            "Ceramic-Coated Bristles: Protects hair from excessive heat and prevents damage while promoting even heat distribution.",
            "Safe and Gentle: Anti-scald design and 3D airflow technology for fast, safe drying and styling.",
            "Perfect Gift Option: Great for birthdays, holidays, or special occasions — ideal for anyone who loves styling their hair.",
          ],
          specifications: {
            Brand: "Drumstone",
            Model_Name: "Hair Styler",
            Hair_Type: "Suitable for all hair types",
            Power_Source: "Electric",
            Size: "Standard",
            Product_Dimensions: "30 x 6 x 6 cm",
          },
        },
        {
          id: 3,
          name: "Fast Charging 3in1 Magnetic USB Charging Data Cable",
          oldPrice: 349.00,
          price: 229.08,
          image: product3Img1,
          images: [product3Img1, product3Img2, product3Img3, product3Img4],
          description:
            "Charge your devices faster and more conveniently with the Lowfe 3-in-1 Magnetic Charging Cable. Designed with a 360° magnetic connection and LED light, Tired of messy cables and slow charging? The 3-in-1 Magnetic USB Charging Cable is here to simplify your digital life. With interchangeable connectors — Micro USB, Type-C, and Lightning — this all-in-one solution is perfect for charging almost every device you own. Its 360° rotating magnetic head allows for effortless attachment, reducing wear and tear on your device’s port. Built with fast-charging capabilities and a glowing LED indicator, this cable ensures you stay powered up day and night. Whether you’re driving, multitasking, or just looking for convenience, this cable offers safe, single-handed operation with a strong magnetic grip that won’t slip off. Durable and versatile, it’s the only cable you’ll ever need. cable allows easy one-handed charging, even in the dark.",
          features: [
            "3-in-1 Multi Connector: Comes with Micro USB, Type-C, and iPhone connectors — suitable for almost all smartphones and gadgets.",
            "360° Magnetic Adsorption: Easily attaches to your device from any angle for quick, hassle-free charging.",
            "Fast Charging: Supports charging speeds up to 2.4A, ensuring quicker charging than standard cables.",
            "LED Light Indicator: Built-in blue LED light makes it easy to locate your cable in the dark and shows charging status.",
            "One-Handed Operation: Convenient magnetic connection allows you to plug in your device using just one hand — ideal for driving or multitasking.",
          ],
          specifications: {
            Connector_Type: "Micro USB, Type-C, Lightning (iPhone)",
            Compatible_Devices: "All smartphones (Android & iOS), tablets, electronic gadgets",
            Material: "Plastic & Metal (Outer Material: Nylon)",
            Recommended_Use: "Charging",
            Item_Weight: "74 grams",
            Model_Name: "All Smartphone",
          },
        },
        {
          id: 4,
          name: "Electric USB Juice Maker, Juicer, Juicer Bottle, Blender, Grinder Mixer",
          oldPrice: 2499.29,
          price: 1999.09,
          image: product4Img1,
          images: [product4Img1, product4Img2, product4Img3],
          description:
            "Enjoy fresh, nutrient-rich drinks wherever you go with the Electric USB Juice Maker — your personal portable blender. Designed for health-conscious individuals and frequent travelers, this device blends smoothies, juices, and shakes right in the bottle. With its powerful stainless steel blades and 2000mAh rechargeable battery, you can blend everything from soft fruits to ice cubes in seconds. The user-friendly design includes a safety lock, fast charging, and a self-cleaning mechanism for added convenience. Whether you're at home, at work, in the gym, or on a camping trip, this compact blender ensures you never miss your daily dose of vitamins and freshness.",
          features: [
            "Portable & Lightweight: Easy to carry to the gym, office, or while traveling.",
            "USB Rechargeable: Convenient charging with any USB device; can be used multiple times per charge.",
            "High-Speed Stainless Blades: Easily crushes ice, fruits, and vegetables.",
            "Safe to Use: Built-in safety lock design.",
            "Easy to Clean: Just add water and blend to clean quickly.",
          ],
          specifications: {
            Capacity: "420ml",
            Material: "Plastic + Stainless Steel",
            Charging_Time: "About 3 hours",
            Blade_Material: "6-leaf stainless steel",
            Battery: "2000mAh rechargeable battery",
          },
        },
        {
          id: 5,
          name: "Mini Portable Washing Machine",
          oldPrice: 2199.89,
          price: 1099.99,
          image: product5Img1,
          images: [product5Img2, product5Img3, product5Img4, product5Img5, product5Img6, product5Video],
          description:
            "Say goodbye to hand-washing and hello to the future of compact cleaning with this Mini Portable Washing Machine. Ideal for travel, small apartments, or washing baby clothes and delicates, this smart washer uses ultrasonic turbo technology to remove dirt and stains with high-frequency vibrations. Foldable and lightweight, it can be easily stored or carried in a backpack. It’s energy efficient, using very little water and power, while still delivering a thorough wash. Low noise and user-friendly, it's perfect for those seeking a convenient laundry solution on the go — whether at the office, on vacation, or in a hostel.",
          features: [
            "Ultrasonic Turbo Cleaning: High-frequency vibration removes dirt effectively.",
            "Foldable & Lightweight: Easy to store and carry.",
            "Low Noise Operation: Wash clothes without disturbing your environment.",
            "Energy Efficient: Uses minimal water and power.",
          ],
          specifications: {
            Capacity: "0.5 kg",
            Material: "ABS plastic",
            Power: "10W",
            Voltage: "DC 5V",
            Size: "Folded Size: 11 x 11 x 5 cm",
          },
        },
        {
          id: 6,
          name: "Hand Free Spin Mop | Self-Wringing Floor Mop | 360 Rotatable Adjustable Cleaning Mop",
          oldPrice: 1099.89,
          price: 599.09,
          image: product6Img1,
          images: [product6Img2, product6Img3, product6Img4, product6Img5],
          description:
            "Upgrade your cleaning game with this Hand-Free Spin Mop, engineered for convenience and hygiene. Thanks to its self-wringing system, you’ll never have to touch dirty mop heads again. The 360° rotatable mop head ensures you can easily clean under furniture, around corners, and into tight spaces. The adjustable stainless steel handle offers flexibility, allowing you to clean comfortably without straining your back. Made with super-absorbent microfiber, it effectively picks up dust, dirt, and spills, making it suitable for all floor types — tile, wood, laminate, and more. Compact, durable, and easy to use, this mop is a must-have tool for every home.",
          features: [
            "Self-Wringing System: No more dirty hands while cleaning.",
            "360° Rotatable Mop Head: Reaches every corner easily.",
            "Adjustable Handle: Customize handle length for comfortable cleaning.",
            "Highly Absorbent Mop Head: Picks up dirt and water quickly.",
          ],
          specifications: {
            Material: "Stainless Steel + Microfiber",
            Handle_Length: "Up to 130cm",
            Mop_Head_Diameter: "36cm",
            Color: "Blue/White",
          },
        },
        {
          id: 7,
          name: "USB Foldable Fan",
          oldPrice: 849.89,
          price: 599.00,
          image: product7Img1,
          images: [product7Img2, product7Img3, product7Img4, product7Img5],
          description:
            "Beat the heat anywhere, anytime with the ultra-portable USB Foldable Fan. Designed for travel and versatility, this fan combines a compact foldable structure with powerful airflow. Whether you’re working at your desk, relaxing outdoors, or commuting, the three-speed settings allow you to customize the breeze to your comfort. Powered by a 2000mAh rechargeable battery, it operates quietly and efficiently for up to 6 hours. Its USB charging port is compatible with laptops, power banks, and adapters, so you’re never without relief on a hot day. Lightweight and easy to carry, it’s the perfect companion for summer adventures or everyday use.",
          features: [
            "USB Rechargeable: Works with laptops, power banks, and USB adapters.",
            "Foldable Design: Adjust the fan angle for convenience.",
            "Three-Speed Control: Low, Medium, and High airflow settings.",
            "Portable & Lightweight: Easy to carry in bags.",
          ],
          specifications: {
            Battery_Capacity: "2000mAh",
            Material: "Plastic",
            Speed_Modes: "3",
            Charging_Time: "2-3 hours",
            Working_Time: "2-6 hours depending on speed",
          },
        },
        {
          id: 8,
          name: "Ultra Smart Watch",
          oldPrice: 5899.00,
          price: 2879.99,
          image: product8Img1,
          images: [product8Img1, product8Img2, product8Img3, product8Img4],
          description:
            "Revolutionize your lifestyle with the Ultra Smart Watch — a seamless blend of fashion, fitness, and functionality. With its vibrant 1.75-inch touchscreen and sleek design, this smartwatch keeps you connected and motivated. Track your steps, calories, heart rate, and sleep patterns while staying updated with real-time notifications from your smartphone. Multiple sports modes help you monitor performance across different activities, and the IP-rated water resistance ensures it's ready for workouts, rain, or sweat. Compatible with both Android and iOS, and offering up to 7 days of battery life, it’s your all-in-one wearable companion for health, style, and convenience.",
          features: [
            "Fitness & Activity Tracker: Steps, calories, heart rate, sleep monitoring.",
            "Water Resistant Design: Sweat and splash-proof.",
            "Multiple Sports Modes: Track running, cycling, walking, and more.",
            "Notification Alerts: Stay updated with calls, messages, and apps.",
          ],
          specifications: {
            Screen_Size: "1.75 inches",
            Connectivity: "Bluetooth 5.0",
            Battery_Life: "Up to 7 days",
            Compatibility: "iOS and Android",
          },
        },
        {
          id: 9,
          name: "T-Blade Trimmer",
          oldPrice: 2499.00,
          price: 1199.00,
          image: product9Img1,
          images: [product9Img1, product9Img2],
          description:
            "Perfect your grooming routine with the T-Blade Trimmer — designed for precision, performance, and style. Featuring a sleek body and a T-shaped stainless steel blade, it delivers ultra-close cuts for sharp lines, fades, and clean beard edges. This cordless and rechargeable trimmer offers up to 90 minutes of use on a single charge, making it great for home or travel grooming. The low-noise motor ensures a smooth experience, while the included guide combs let you customize your trim length effortlessly. Whether you're shaping a full beard, creating intricate hair designs, or maintaining your neckline, this trimmer has you covered.",
          features: [
            "T-Shaped Blade: For precise edges and clean lines.",
            "Cordless & Rechargeable: Up to 90 minutes usage.",
            "Low Noise Motor: Smooth trimming experience.",
            "Multiple Guide Combs: For different hair lengths.",
          ],
          specifications: {
            Blade_Material: "Stainless Steel",
            Battery: "1500mAh",
            Charging_Time: "2 hours",
            Usage_Time: "90 minutes",
          },
        },
        {
          id: 10,
          name: "Plastic USB Juicer Bottle Blender, for Home, 420 ml",
          oldPrice: 2299.00,
          price: 1499.99,
          image: product10Img1,
          images: [product10Img1, product10Img2, product10Img3, product10Img4, product10Img5],
          description:
            "Make healthy living easy and mobile with this Plastic USB Juicer Bottle Blender. This stylish, compact blender is perfect for whipping up fresh juices, smoothies, protein shakes, and even baby food, all in one convenient bottle. With a 420ml capacity and four sharp stainless-steel blades, it crushes fruits and ice with ease. Its USB charging interface allows you to power it through your laptop, power bank, or any USB port. Featuring one-touch blending and a self-cleaning function, it’s incredibly easy to use and maintain. Ideal for gym-goers, students, and travelers, it's your on-the-go solution for a nutritious lifestyle.",
          features: [
            "Portable Juicer Bottle: Blend and drink from the same bottle.",
            "USB Charging: Convenient and reusable anywhere.",
            "Compact & Lightweight: Ideal for travel, gym, office.",
            "Easy Cleaning: One-button cleaning function.",
          ],
          specifications: {
            Capacity: "420ml",
            Material: "Plastic",
            Charging_Interface: "USB",
            Blade_Material: "4-leaf Stainless Steel",
          },
        },
      ];
      

      // Find the product with the matching ID
      const foundProduct = dummyProducts.find((p) => p.id === Number.parseInt(productId))
      setProduct(foundProduct)
      setLoading(false)
    }

    // Simulate network delay
    setTimeout(fetchProductDetails, 800)
  }, [productId])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleOrderNow = () => {
    setShowOrderForm(true)
  }

  const handleCloseOrderForm = () => {
    setShowOrderForm(false)
  }

  const handleOrderSubmit = (orderData) => {
    // In a real app, this would send the order data to a server
    console.log("Order submitted:", orderData)
    alert("Your order has been placed successfully!")
    setShowOrderForm(false)
  }

  const handleGoBack = () => {
    navigate("/products")
  }

  if (loading) {
    return (
      <section className="product-details-section">
        <div className="container">
          <div className="loading">Loading product details...</div>
        </div>
      </section>
    )
  }

  if (!product) {
    return (
      <section className="product-details-section">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>Sorry, we couldn't find the product you're looking for.</p>
            <button className="back-button" onClick={handleGoBack}>
              Back to Products
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="product-details-section">
      <div className="container">
        <button className="back-button" onClick={handleGoBack}>
          &larr; Back to Products
        </button>

        <div className="product-details-container">
          <div className="product-gallery-container">
            <ImageGallery images={product.images || [product.image]} videos={product.videos || []} />
          </div>

          <div className="product-details-info">
            <h1 className="product-details-title">{product.name}</h1>
            <p className="product-details-price">
              <span className="old-price">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
              <span className="new-price">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
            </p>

            <div className="product-delivery-info">
              <DeliveryHighlights size="large" />
            </div>

            {product.description && (
              <div className="product-description">
                <p>{product.description}</p>
              </div>
            )}

            <div className="product-purchase">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" min="1" value={quantity} onChange={handleQuantityChange} />
              </div>
              <button className="order-now-btn" onClick={handleOrderNow}>
                Order Now
              </button>
            </div>
          </div>
        </div>

        {product.features && (
          <div className="product-additional-info">
            <div className="product-features">
              <h2>Features</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {product.specifications && (
              <div className="product-specifications">
                <h2>Specifications</h2>
                <table>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {showOrderForm && (
        <OrderForm product={product} quantity={quantity} onClose={handleCloseOrderForm} onSubmit={handleOrderSubmit} />
      )}
    </section>
  )
}

export default ProductDetails
