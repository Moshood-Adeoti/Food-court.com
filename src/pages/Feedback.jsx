import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function Feedback() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Feedback submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`min-h-screen pt-[90px] px-4 md:px-10 flex justify-center items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-10 ${
          theme === "dark" ? "bg-gray-700" : "bg-red-400"
        }`}
      >
        {/* Heading */}
        <h1 className={`text-3xl font-bold text-center mb-2 ${theme === "dark" ? "text-white" : "text-white"}`}>
          💬 Feedback
        </h1>

        <p className="text-center opacity-70 mb-8 text-white">
          We'd love to hear your thoughts about FOODCOURT
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border outline-none text-black"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border outline-none text-black"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Your Feedback
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your feedback..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border outline-none resize-none text-black"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-lg font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;