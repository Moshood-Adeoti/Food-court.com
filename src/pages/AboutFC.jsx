import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function AboutFC() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen px-[60px] py-[40px] ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
    }`}>

      {/* Header */}
      <h1 className="text-red-700 font-bold text-4xl mb-4">About FoodCourt</h1>
      <p className="text-lg mb-8">
        FoodCourt is your go-to platform for discovering the best restaurants,
        meals, and food experiences near you.
      </p>

      
      <div className={`rounded-lg p-6 mb-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}>
        <h2 className="text-red-700 font-bold text-2xl mb-2">Our Mission</h2>
        <p>
          To connect food lovers with the best local restaurants and deliver
          an unforgettable dining experience — whether at home or on the go.
        </p>
      </div>

      {/* Why Us */}
      <div className={`rounded-lg p-6 mb-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}>
        <h2 className="text-red-700 font-bold text-2xl mb-2">Why FoodCourt?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wide variety of restaurants and cuisines</li>
          <li>Fast and reliable delivery</li>
          <li>Easy and secure payments</li>
          <li>Real-time order tracking</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
 
      <div className={`rounded-lg p-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`}>
        <h2 className="text-red-700 font-bold text-2xl mb-2">Our Team</h2>
        <p>
          We are a passionate team of food lovers, developers, and designers
          working together to make food ordering simple, fast, and enjoyable.
        </p>
      </div>

    </div>
  );
}

export default AboutFC;