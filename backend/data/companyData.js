export const companyData = {
  name: "WearWell",
  description:
    "WearWell is a modern ecommerce store offering premium shirts, shoes, watches, and paints with fast delivery and easy returns.",

  categories: [
    "Shirts",
    "Shoes",
    "Watches",
    "Paints"
  ],

  products: [
    // 👕 SHIRTS
    {
      id: 1,
      category: "Shirts",
      name: "Classic Cotton Shirt",
      description: "Breathable 100% cotton shirt for everyday comfort.",
      price: 29,
      currency: "USD",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Blue"],
      material: "100% Cotton",
      gender: "Men",
      features: ["Machine washable", "Slim fit", "Lightweight"],
      stock: 120,
      rating: 4.5,
      warranty: "No warranty",
      returnEligible: true
    },
    {
      id: 2,
      category: "Shirts",
      name: "Premium Linen Shirt",
      description: "Lightweight linen shirt perfect for summer.",
      price: 45,
      currency: "USD",
      sizes: ["M", "L", "XL"],
      colors: ["Beige", "Sky Blue"],
      material: "Linen",
      gender: "Men",
      features: ["Breathable fabric", "Relaxed fit"],
      stock: 80,
      rating: 4.7,
      returnEligible: true
    },

    // 👟 SHOES
    {
      id: 3,
      category: "Shoes",
      name: "Urban Runner Sneakers",
      description: "Comfortable sneakers for daily wear.",
      price: 59,
      currency: "USD",
      sizes: ["40", "41", "42", "43"],
      colors: ["Black", "White"],
      material: "Mesh & Rubber",
      gender: "Unisex",
      features: ["Shock absorbing", "Breathable", "Lightweight"],
      stock: 150,
      rating: 4.6,
      warranty: "6 months warranty",
      returnEligible: true
    },
    {
      id: 4,
      category: "Shoes",
      name: "Leather Formal Shoes",
      description: "Genuine leather shoes for professional look.",
      price: 89,
      currency: "USD",
      sizes: ["41", "42", "43"],
      colors: ["Brown", "Black"],
      material: "100% Leather",
      gender: "Men",
      features: ["Durable sole", "Premium stitching"],
      stock: 60,
      rating: 4.8,
      warranty: "1 year warranty",
      returnEligible: true
    },

    // ⌚ WATCHES
    {
      id: 5,
      category: "Watches",
      name: "ChronoX Smart Watch",
      description: "Smartwatch with health and notification features.",
      price: 129,
      currency: "USD",
      features: ["Heart rate monitor", "Bluetooth calling", "Water resistant"],
      batteryLife: "48 hours",
      compatibility: ["Android", "iOS"],
      stock: 90,
      rating: 4.4,
      warranty: "1 year warranty",
      returnEligible: true
    },
    {
      id: 6,
      category: "Watches",
      name: "Elite Classic Watch",
      description: "Luxury analog stainless steel watch.",
      price: 149,
      currency: "USD",
      features: ["Quartz movement", "Scratch resistant glass"],
      waterResistance: "5 ATM",
      stock: 40,
      rating: 4.9,
      warranty: "2 years warranty",
      returnEligible: true
    },

    // 🎨 PAINTS
    {
      id: 7,
      category: "Paints",
      name: "Interior Premium Wall Paint",
      description: "Smooth matte finish interior paint.",
      price: 45,
      currency: "USD",
      finish: "Matte",
      coverage: "400 sq ft per gallon",
      waterproof: false,
      features: ["Low odor", "Washable", "Fade resistant"],
      stock: 200,
      rating: 4.5,
      returnEligible: false
    },
    {
      id: 8,
      category: "Paints",
      name: "WeatherShield Exterior Paint",
      description: "Durable waterproof exterior paint.",
      price: 65,
      currency: "USD",
      finish: "Gloss",
      coverage: "350 sq ft per gallon",
      waterproof: true,
      features: ["UV protection", "Crack resistant", "Waterproof"],
      stock: 140,
      rating: 4.7,
      returnEligible: false
    }
  ],

  shipping: {
    standardDelivery: "3-5 business days",
    expressDelivery: "1-2 business days",
    internationalShipping: true,
    freeShippingAbove: 100,
    shippingPartners: ["DHL", "FedEx", "UPS"]
  },

  paymentMethods: [
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Stripe",
    "Cash on Delivery"
  ],

  returnPolicy: {
    returnWindowDays: 30,
    condition: "Product must be unused and in original packaging.",
    refundProcessingTime: "5-7 business days",
    nonReturnableItems: ["Paints"]
  },

  orderTracking: {
    available: true,
    method: "Tracking link is sent via email after order confirmation."
  },

  discounts: {
    seasonalSale: "Up to 30% off on selected items.",
    couponSupport: true
  },

  customerSupport: {
    email: "support@wearwell.com",
    phone: "+1 (800) 555-9090",
    workingHours: "Monday-Saturday: 9AM - 8PM"
  }
};