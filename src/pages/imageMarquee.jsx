import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";



const restaurants = [
  {
    name: "Quick Eats",
    sub: "Quick Combo Meals",
    img: "https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Ffc-storage-e4fedsbpcfd8ajb9.z01.azurefd.net%2Fupload-service%2F39acf486-0bc5-4585-96ed-f42cb226c8ef%3ALASV6202-Edit.jpg&w=750&q=75",
  },
  {
    name: "Sunny sound club.",
    sub: "Good food to start your day right",
    img: "https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Ffc-storage-e4fedsbpcfd8ajb9.z01.azurefd.net%2Fupload-service%2F16871202613541bf87068-5d6f-41b4-aa08-cb4ecbd5d173&w=750&q=75",
  },
  {
    name: "Jollof & Co.",
    sub: "Delicious Everyday Naija Food",
    img: "https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Ffc-storage-e4fedsbpcfd8ajb9.z01.azurefd.net%2Fupload-service%2F1667530018644b59ab617-f3a6-49c5-afca-ca727f81be8a&w=750&q=75",
  },
{
    name: "Mama’s Kitchen",
    sub: "Authentic homemade African meals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJLhMgVZMC5wo5IuRzk9FTpAwWuD6ACc8zw&s",
  },
  {
    name: "Urban Bites",
    sub: "Modern fast food & snacks",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Grill House",
    sub: "Smoky BBQ & grilled delights",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Green Bowl",
    sub: "Healthy salads & fresh meals",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Pizza Lab",
    sub: "Stone-baked pizzas & cheesy goodness",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Street Kitchen",
    sub: "Local street food experience",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sweet Cravings",
    sub: "Desserts, cakes & pastries",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ocean Taste",
    sub: "Fresh seafood & coastal dishes",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
  },

];

const products = [
  {
    id: 1,
    title: "Event Catering",
    description:
      "Personalised catering services for all types of events, focusing on quality & customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    icon: "👥",
    button: "Contact us",
  },
  {
    id: 2,
    title: "Fresh Press by FoodCourt",
    description:
      "Freshly pressed juices and smoothies made from 100% natural, quality ingredients.",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
    icon: "🧃",
    button: "Contact us",
  },
  {
    id: 3,
    title: "Nectar by FoodCourt",
    description:
      "Delicious, high-quality juices crafted to stay fresh and flavorful for any moment.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    icon: "🍊",
    button: "Contact us",
  },
  {
    id: 4,
    title: "Freshly Baked by FoodCourt",
    description:
      "Freshly baked bread and pastries made daily with quality ingredients.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    icon: "🥐",
    button: "Contact us",
  },
  {
    id: 5,
    title: "Grill & BBQ Services",
    description:
      "Smoky, flavour-packed grilled meals prepared fresh for outdoor events and parties.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    icon: "🔥",
    button: "Contact us",
  },
  {
    id: 6,
    title: "Corporate Lunch Packages",
    description:
      "Well-balanced and timely lunch solutions designed for offices and corporate gatherings.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
    icon: "🍱",
    button: "Contact us",
  },
  {
    id: 7,
    title: "Dessert & Pastry Station",
    description:
      "A sweet selection of cakes, pastries, and desserts for events and celebrations.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    icon: "🍰",
    button: "Contact us",
  },
  {
    id: 8,
    title: "Street Food Experience",
    description:
      "Live street-style food setups bringing authentic local flavors to your events.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    icon: "🌮",
    button: "Contact us",
  },

  {
  id: 9,
  title: "Buffet Setup Services",
  description:
    "Elegant buffet arrangements with professional setup for weddings, parties, and corporate events.",
  image:
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
  icon: "🍽️",
  button: "Contact us",
},
{
  id: 10,
  title: "Breakfast Catering",
  description:
    "Fresh morning meals including pastries, tea, coffee, and full breakfast platters.",
  image:
    "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1200&auto=format&fit=crop",
  icon: "☕",
  button: "Contact us",
},
{
  id: 11,
  title: "Outdoor Picnic Catering",
  description:
    "Relaxed outdoor dining setups with fresh meals perfect for picnics and small gatherings.",
  image:
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop",
  icon: "🧺",
  button: "Contact us",
},
{
  id: 12,
  title: "Event Drinks Bar",
  description:
    "Custom drink bars with cocktails, mocktails, and fresh beverages for all events.",
  image:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
  icon: "🍹",
  button: "Contact us",
},
{
  id: 13,
  title: "Kids Party Catering",
  description:
    "Fun, colorful, and tasty meals designed specially for children’s parties and events.",
  image:
    "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=1200&auto=format&fit=crop",
  icon: "🎈",
  button: "Contact us",
},
{
  id: 14,
  title: "Luxury Dining Experience",
  description:
    "Premium dining setups with gourmet meals and elegant table service.",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  icon: "✨",
  button: "Contact us",
},
{
  id: 15,
  title: "Corporate Event Catering",
  description:
    "Professional catering solutions tailored for meetings, conferences, and business events.",
  image:
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
  icon: "🏢",
  button: "Contact us",
},
{
  id: 16,
  title: "Freshly Baked by FoodCourt",
  description:
    "Freshly baked bread and pastries made daily with quality ingredients..", 
  image:
  "https://getfoodcourt.com/_next/image?url=https%3A%2F%2Ffc-storage-e4fedsbpcfd8ajb9.z01.azurefd.net%2Fupload-service%2F27192645-1f90-415b-9a97-aa89c373c94d%3Ad61441ad-9104-4010-82d8-fb31b6cf5845_Oven%2520Fresh%2520by%2520FoodCourt.jpg.webp&w=1080&q=75",
  icon: "👨‍🍳",
  button: "Contact us",
}
];

const CARDS_PER_VIEW = 4;

function ImageMarquee() {
  const { theme } = useContext(ThemeContext);

  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = Math.ceil(products.length / CARDS_PER_VIEW);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleProducts = products.slice(
    pageIndex * CARDS_PER_VIEW,
    pageIndex * CARDS_PER_VIEW + CARDS_PER_VIEW
  );



  const [showAll, setShowAll] = useState(false)


    const visibleRestaurants = showAll
  ? restaurants
  : restaurants.slice(0, 3);


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">

  {visibleRestaurants.map((el, i) => (
    <div key={i} className="rounded-xl overflow-hidden shadow-md">

      <img
        src={el.img}
        alt={el.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold">{el.name}</h2>
        <p className="text-sm text-gray-500">{el.sub}</p>
      </div>

    </div>
  ))}
</div>
const navigate = useNavigate()
  return (

    
    <div className="w-full py-4 space-y-6">

      {/* ── RESTAURANTS MARQUEE ── */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] px-4">
          {[...restaurants, ...restaurants].map((r, i) => (
            <div
              key={i}
              className={`w-[24vw] flex-shrink-0 rounded-xl border overflow-hidden
              ${theme === "dark"
                ? "bg-gray-700 text-white border-white"
                : "bg-white text-black border-black"}`}
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-[32vh] object-cover"
              />
              <div className="p-3">
                <p className="font-medium text-sm mt-4">{r.name}</p>
                <p className="text-xs">{r.sub}</p>
              </div>

            </div>
          ))}
        </div>
      </div>


       <button
  onClick={() =>  navigate("/imgmarquee")}
  className="px-5 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
>
    Show All Projects
</button> 

      {/* ── PRODUCTS GRID (AUTO-SWAPPING) ── */}
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 transition-all duration-500">

          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl overflow-hidden shadow-sm flex flex-col
              ${theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[180px] object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-lg mb-3">
                  {product.icon}
                </div>

                <h2 className="text-base font-semibold">{product.title}</h2>

                <p className={`text-xs mt-2 flex-1
                  ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {product.description}
                </p>

                <button className="mt-5 w-full border border-red-500 text-red-500 py-2 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-6">
  {Array.from({ length: totalPages }).map((_, i) => (
    <button
      key={i}
      onClick={() => setPageIndex(i)}
      className={`transition-all duration-300 rounded-full
        ${i === pageIndex
          ? "w-8 h-2.5 bg-red-500"
          : "w-2.5 h-2.5 bg-gray-300"
        }`}
    />
  ))}
</div>

    </div>
  );
}

export default ImageMarquee;

        // {/* ── Dot indicators ── */}
        // <div className="flex justify-center items-center gap-2 mt-6">
        //   {Array.from({ length: totalSlides }).map((_, i) => (
        //     <button
        //       key={i}
        //       onClick={() => setCurrentIndex(i)}
        //       className={`transition-all duration-300 rounded-full
        //         ${i === currentIndex
        //           ? "w-8 h-2.5 bg-red-500"    // active: wide red pill
        //           : "w-2.5 h-2.5 bg-gray-300" // inactive: small gray circle
        //         }`}
        //     />
        //   ))}
        // </div>

      