import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

let app = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfILv5pL50m7RPcHzK18E6bcO-uuDPJuMr7bIfCxW24A&s";
let play = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4PzcL50dTW9_WP447x5oU_zg9iAW3HvKHg&s";

// let darkTheme = "https://www.flaticon.com/free-icons/ramadan"
// let lightTheme = "cdn-icons-png.flaticon.com/512/1164/1164954.png";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between w-full h-[60px] px-4 md:px-[60px] fixed z-50 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-[#e8f0fb] via-[#f9f9f9] to-[#fce8ec] text-black"
      }`}
    >
      {/* Logo */}
      <h1 className="text-red-700 font-bold text-xl">
        <Link to="/">FOODCOURT</Link>
      </h1>

      {/* Hamburger (mobile only) */}
    <button
  className="md:hidden text-2xl"
  onClick={() => {
    console.log("clicked");
    setOpen(!open);
  }}
>
  ☰
</button>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-[30px] text-sm font-medium">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About FC</Link></li>
        
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-[10px]">
        <img src={app} className="w-[32px] h-[32px] rounded-full border" />
        <img src={play} className="w-[32px] h-[32px] rounded-full border" />

       <button onClick={toggleTheme} className="text-2xl">
  {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
</button>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div
    className={`absolute top-[60px] left-0 w-full flex flex-col gap-4 p-4 md:hidden z-[999] ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
    }`}
  >

    <div className="bg-red-500 text-white p-4">
  MENU OPENED
</div>
          <Link onClick={() => setOpen(false)} to="/home">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About FC</Link>
          <Link onClick={() => setOpen(false)} to="/restaurants">Restaurants</Link>
          <Link onClick={() => setOpen(false)} to="/product">Products</Link>
          <Link onClick={() => setOpen(false)} to="/careers">Careers</Link>
          <Link onClick={() => setOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setOpen(false)} to="/feedback">Feedback</Link>
          <Link onClick={() => setOpen(false)} to="/faqs">FAQs</Link>

          <div className="flex items-center gap-3 mt-3">
            <img src={app} className="w-[32px] h-[32px] rounded-full border" />
            <img src={play} className="w-[32px] h-[32px] rounded-full border" />

          <button onClick={toggleTheme} className="text-2xl">
  {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;