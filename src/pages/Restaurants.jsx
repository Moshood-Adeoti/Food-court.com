import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function Restaurants() {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fast Food",
    "Local Dishes",
    "Pizza",
    "Healthy",
    "Drinks",
    "Dessert",
  ];

const restaurants = [
  {
    id: 1,
    name: "Mama Put Deluxe",
    category: "Local Dishes",
    rating: 4.5,
    desc: "Authentic Nigerian meals made fresh daily",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtSPzl4yZ-VxwgoP1Zh5F7HroLFQw81qOFQ&s",
  },
  {
    id: 2,
    name: "Pizza World",
    category: "Pizza",
    rating: 4.2,
    desc: "Cheesy, crispy and oven fresh pizzas",
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Burger Hub",
    category: "Fast Food",
    rating: 4.6,
    desc: "Juicy burgers with fresh ingredients",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Green Bowl",
    category: "Healthy",
    rating: 4.3,
    desc: "Fresh salads and healthy meals",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Chicken Republic Style",
    category: "Fast Food",
    rating: 4.4,
    desc: "Crispy fried chicken and spicy wings",
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Grill House",
    category: "Grilled Food",
    rating: 4.6,
    desc: "Smoky grilled chicken and BBQ meals",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm4xIz5yeB44JcZHr5lcyRo4inAqaaf87_Q&s",
  },
  {
    id: 7,
    name: "Pizza Hub Express",
    category: "Pizza",
    rating: 4.3,
    desc: "Fast, cheesy and delicious pizzas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiAaF-Wv70rRyhgHjkd3niWAMSjP79CI0Cw&s",
  },
  {
    id: 8,
    name: "Italian Pizza Corner",
    category: "Pizza",
    rating: 4.7,
    desc: "Authentic Italian style pizza experience",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Burger Station",
    category: "Fast Food",
    rating: 4.5,
    desc: "Juicy burgers and crispy fries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekF9oBhgvlsxqpMjD6yn-CdkIBvpHtedytw&s",
  },
  {
    id: 10,
    name: "Snack World",
    category: "Fast Food",
    rating: 4.2,
    desc: "Quick bites and tasty street food",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Green Life Kitchen",
    category: "Healthy",
    rating: 4.6,
    desc: "Fresh salads and organic meals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqy4zD14nFau9k3Y1FIkT4qRFuUpL7BsZzw&s"
  },
  {
    id: 12,
    name: "Fit Bowl Center",
    category: "Healthy",
    rating: 4.4,
    desc: "Healthy bowls packed with nutrients",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQzK3zBDtZSSzbix5TzgvtYKrrp504wiJ-Q&s",
  },
  {
    id: 13,
    name: "Smoothie Spot",
    category: "Drinks",
    rating: 4.3,
    desc: "Fresh fruit smoothies and shakes",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Juice World",
    category: "Drinks",
    rating: 4.5,
    desc: "Natural juices and energy drinks",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  },
];

  

  // FILTER LOGIC
  const filteredRestaurants =
    selectedCategory === "All"
      ? restaurants
      : restaurants.filter((r) => r.category === selectedCategory);

  return (
    <div
      className={`min-h-screen pt-[80px] px-4 md:px-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-6">
        🍽️ Restaurants
      </h1>

      {/* CATEGORY BAR */}
      <div className="flex gap-3 overflow-x-auto py-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 whitespace-nowrap rounded-full transition ${
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FEATURED SECTION */}
      <h2 className="text-xl font-semibold mt-6 mb-3">
        ⭐ Featured Restaurants
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {restaurants.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={item.image}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm opacity-80">{item.desc}</p>
              <p className="text-sm mt-1">⭐ {item.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ALL RESTAURANTS */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        🍔 All Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRestaurants.map((rest) => (
          <div
            key={rest.id}
            className= {`rounded-xl overflow-hidden shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white" }`}
          >
            <img
              src={rest.image}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{rest.name}</h2>
              <p className="text-sm opacity-70">{rest.desc}</p>

              <div className="flex justify-between items-center mt-3">
                <span>⭐ {rest.rating}</span>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;