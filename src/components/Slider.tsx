"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/slider1.jpg",
  },
  {
    id: 2,
    image: "/images/slider2.jpg",
  },
  {
    id: 3,
    image: "/images/slider3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full z-10 lg:h-[456px] relative pt-[50%] lg:pt-0">
      <Image
        src={data[currentSlide].image}
        alt="slider"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Slider;
