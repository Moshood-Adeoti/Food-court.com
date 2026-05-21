import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function Blog() {
  const { theme } = useContext(ThemeContext);

  const blogs = [
    {
      id: 1,
      title: "Top 5 Fast Foods You Should Try",
      desc: "Discover some of the most delicious fast foods trending this year.",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Healthy Meals For Everyday Life",
      desc: "Eating healthy doesn't have to be boring. Here are simple healthy meals.",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Why Pizza Remains Everyone’s Favorite",
      desc: "Pizza continues to dominate food culture around the world.",
      image:
        "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-[90px] px-4 md:px-10 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-3">
        📰 FOODCOURT Blog
      </h1>

      <p className="text-center opacity-70 mb-10">
        Latest food stories, updates and trends
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-2xl overflow-hidden shadow-lg ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[220px] object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-3">
                {blog.title}
              </h2>

              <p className="opacity-70 text-sm mb-4">
                {blog.desc}
              </p>

              <button className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;