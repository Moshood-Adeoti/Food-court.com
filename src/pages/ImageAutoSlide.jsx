import { useState, useEffect } from "react";

const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];

function ImageAutoSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className="w-full h-[400px] object-cover transition-all duration-500"
      />
    </div>
  );
}

export default ImageAutoSlide;