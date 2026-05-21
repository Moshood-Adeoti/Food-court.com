import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const products = [
  {
    id: 1,
    title: "Event Catering",
    description:
      "Personalised catering services for all types of events, focusing on quality & customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    icon: "👥",
    category: "Catering",
  },
  {
    id: 2,
    title: "Fresh Press by FoodCourt",
    description:
      "Freshly pressed juices and smoothies made from 100% natural, quality ingredients.",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
    icon: "🧃",
    category: "Drinks",
  },
  {
    id: 3,
    title: "Nectar by FoodCourt",
    description:
      "Delicious, high-quality juices crafted to stay fresh and flavorful for any moment.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    icon: "🍊",
    category: "Drinks",
  },
  {
    id: 4,
    title: "Freshly Baked by FoodCourt",
    description:
      "Freshly baked bread and pastries made daily with quality ingredients.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    icon: "🥐",
    category: "Bakery",
  },
  {
    id: 5,
    title: "Grill & BBQ Services",
    description:
      "Smoky, flavour-packed grilled meals prepared fresh for outdoor events and parties.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    icon: "🔥",
    category: "Catering",
  },
  {
    id: 6,
    title: "Corporate Lunch Packages",
    description:
      "Well-balanced and timely lunch solutions designed for offices and corporate gatherings.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    icon: "🍱",
    category: "Corporate",
  },
  {
    id: 7,
    title: "Dessert & Pastry Station",
    description:
      "A sweet selection of cakes, pastries, and desserts for events and celebrations.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    icon: "🍰",
    category: "Bakery",
  },
  {
    id: 8,
    title: "Street Food Experience",
    description:
      "Live street-style food setups bringing authentic local flavors to your events.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    icon: "🌮",
    category: "Catering",
  },
  {
    id: 9,
    title: "Buffet Setup Services",
    description:
      "Elegant buffet arrangements with professional setup for weddings, parties, and corporate events.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
    icon: "🍽️",
    category: "Catering",
  },
  {
    id: 10,
    title: "Breakfast Catering",
    description:
      "Fresh morning meals including pastries, tea, coffee, and full breakfast platters.",
    image:
      "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1200&auto=format&fit=crop",
    icon: "☕",
    category: "Corporate",
  },
  {
    id: 11,
    title: "Outdoor Picnic Catering",
    description:
      "Relaxed outdoor dining setups with fresh meals perfect for picnics and small gatherings.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    icon: "🧺",
    category: "Catering",
  },
  {
    id: 12,
    title: "Event Drinks Bar",
    description:
      "Custom drink bars with cocktails, mocktails, and fresh beverages for all events.",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
    icon: "🍹",
    category: "Drinks",
  },
  {
    id: 13,
    title: "Kids Party Catering",
    description:
      "Fun, colorful, and tasty meals designed specially for children's parties and events.",
    image:
      "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=1200&auto=format&fit=crop",
    icon: "🎈",
    category: "Catering",
  },
  {
    id: 14,
    title: "Luxury Dining Experience",
    description:
      "Premium dining setups with gourmet meals and elegant table service.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    icon: "✨",
    category: "Corporate",
  },
  {
    id: 15,
    title: "Corporate Event Catering",
    description:
      "Professional catering solutions tailored for meetings, conferences, and business events.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    icon: "🏢",
    category: "Corporate",
  },
  {
    id: 16,
    title: "Oven Fresh by FoodCourt",
    description:
      "Freshly baked bread and pastries made daily with quality ingredients.",
    image:
      "https://getfoodcourt.com/_next/image?url=https%3A%2F%2Ffc-storage-e4fedsbpcfd8ajb9.z01.azurefd.net%2Fupload-service%2F27192645-1f90-415b-9a97-aa89c373c94d%3Ad61441ad-9104-4010-82d8-fb31b6cf5845_Oven%2520Fresh%2520by%2520FoodCourt.jpg.webp&w=1080&q=75",
    icon: "👨‍🍳",
    category: "Bakery",
  },
];

const categories = ["All", "Catering", "Drinks", "Bakery", "Corporate"];

function Product() {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const isDark = theme === "dark";

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className={`min-h-screen px-4 py-10 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>

      {/* ── Hero Header ── */}
      <div className="text-center mb-10">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          What We Offer
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Products & Services</h1>
        <p className={`text-sm max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          From fresh-pressed juices to full event catering — we bring quality food experiences to every occasion.
        </p>
      </div>

      {/* ── Category Filter Pills ── */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${activeCategory === cat
                ? "bg-red-500 text-white border-red-500"
                : isDark
                  ? "bg-gray-800 text-gray-300 border-gray-600 hover:border-red-400 hover:text-red-400"
                  : "bg-white text-gray-600 border-gray-300 hover:border-red-400 hover:text-red-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Product Count ── */}
      <p className={`text-center text-xs mb-6 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
        Showing {filtered.length} {filtered.length === 1 ? "service" : "services"}
      </p>

      {/* ── Products Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {filtered.map((product) => (
          <div
            key={product.id}
            className={`rounded-2xl overflow-hidden shadow-sm flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-md
              ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[180px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Category badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Icon */}
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-lg mb-3">
                {product.icon}
              </div>

              <h2 className="text-base font-semibold leading-snug">{product.title}</h2>

              <p className={`text-xs mt-2 flex-1 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {product.description}
              </p>

              <button className="mt-5 w-full border border-red-500 text-red-500 py-2 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-all duration-200">
                Contact us
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA Banner ── */}
      <div className={`mt-16 rounded-2xl p-8 text-center max-w-3xl mx-auto
        ${isDark ? "bg-gray-800" : "bg-red-50 border border-red-100"}`}>
        <h2 className="text-xl font-bold mb-2">Need a Custom Package?</h2>
        <p className={`text-sm mb-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Can't find exactly what you're looking for? We can put together a tailored solution just for you.
        </p>
        <button className="px-7 py-3 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-all duration-200">
          Get in Touch
        </button>
      </div>

    </div>
  );
}

export default Product;
