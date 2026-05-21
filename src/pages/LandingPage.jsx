import { useState, useEffect } from "react";
import './landingPage.css'
import ImageMarquee from "./imageMarquee";

// import ImageAutoSlide from "./ImageAutoSlide";

const sliderImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
  
];

let play = "data:image/jpeg;base64,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"
let app = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhHmgbliDpr1p6UZU8m8XwxdfrKg6u5VZgg&s"

function LandingPage() {
  
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-[300px] text-center px-4 pb-[40px]">


      {/* Heading */}
<h1 className="text-[55px] font-bold leading-[1.1] tracking-tight max-w-[550px] mt-[60px]">
  Good Food, Made Easy
</h1>
      <p className="text-gray-500 text-[16px] mt-4">
        Chef Prepared meals, at the click of a button
      </p>

      
      <div className="flex gap-[20px] mt-8">

        {/* Apple App Store */}
        <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-[12px] w-[200px]">
           <img src={app} alt="" className="h-[30px] w-[35px]"/> 
          <span className="text-left">
            <p className="text-[10px] text-gray-300">Download on the</p>
            <p className="text-[16px] font-bold">App Store</p>
          </span>
        </button>

        {/* Google Play */}
        <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-[12px] w-[200px]">
           <img src={play} alt="" className="h-[30px] w-[40px]"  />
          <span className="text-left">
            <p className="text-[12px] text-gray-300">Get it on</p>
            <p className="text-[16px] font-bold">Google Play</p>
          </span>
        </button>

      </div>

 
      <div className="flex items-center gap-2 mt-6 border border-gray-200 rounded-full px-4 py-2">
        <span className="text-gray-600 text-sm">Backed by</span>
        <span className="bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-sm">Y</span>
        <span className="text-orange-500 text-sm font-medium">Combinator</span>
      </div>
       

       {/* //changing of image */}
      <img
        src={sliderImages[currentSlide]}
        alt="slideshow"
        className="w-[80%] h-[550px] object-cover transition-all   mb-8 rounded-[13px]"/>
<div className="h-[36px] w-full bg-green-700 overflow-hidden flex items-center">
  <div className="whitespace-nowrap animate-marquee flex gap-10 text-white text-[14px]">
    <span>POCKET FRIENDLY PRICES</span>
    <span>FAST DELIVERY</span>
    <span>TOP CHEFS</span>
    <span>DELICIOUS MEALS</span>

    {/* double or duplicate */}
    <span>POCKET FRIENDLY PRICES</span>
    <span>FAST DELIVERY</span>
    <span>TOP CHEFS</span>
    <span>DELICIOUS MEALS</span>
  </div> 
</div>


<h1 className="text-[32px] font-medium leading-[1.1] tracking-tight max-w-[390px] mt-[40px]">The best online restaurants in one place</h1>
    <p className="text-gray-600 t-[12px]"> Order all of your favorites in one basket </p>
   
    <ImageMarquee/>
    </div>
  );

  
}

export default LandingPage;