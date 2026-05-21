import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./pages/AppContext.js";
import { ThemeProvider } from "./pages/ThemeContext.jsx"; // 👈 ADD THIS

import Navbar from "./pages/Navbar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AboutFC from "./pages/AboutFC.jsx";
import Product from "./pages/Product.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Feedback from "./pages/Feedback.jsx";
import FAQs from "./pages/FAQs.jsx";
import Blog from "./pages/Blog.jsx";
import Careers from "./pages/Careers.jsx";
import ImgMarquee from "./ImgMarguee.jsx";

 
function App() {
  const userName = "Moshood";

  return (
    <AppContext.Provider value={{ userName }}>
      <ThemeProvider>          
        <BrowserRouter>
          <Navbar />
          {/* <Home/> */}
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<LandingPage/>}/>
            <Route path="/about" element={<AboutFC />} />
            <Route path="/product" element={<Product />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/imgmarquee" element={<ImgMarquee/>} /> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>      
    </AppContext.Provider>
  );
}

export default App;