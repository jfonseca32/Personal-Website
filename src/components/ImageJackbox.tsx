import { useState } from "react";
import me from "../assets/jackbox/IMG_2166.jpg";
import logo from "../assets/logos/JPDFlogo.png";

export default function ImageJackbox() {
  // Array of image URLs with different sizes to make changes visible
  const images = [logo, me];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotateImage = () => {
    var nextIndex = (currentImageIndex + 1) % images.length;
    if (nextIndex == 0) {
      nextIndex++;
    }
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div
      className="h-14 w-14 cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg outline-4 outline-offset-2 outline-slate-200 transition-all duration-300 hover:scale-105 hover:outline md:left-16"
      onClick={rotateImage}
      onMouseEnter={rotateImage}
      onMouseLeave={() => setCurrentImageIndex(0)}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
