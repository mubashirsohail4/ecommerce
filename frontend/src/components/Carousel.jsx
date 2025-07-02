import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    title: "Summer Sale",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    title: "Trendy Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    title: "New Arrivals",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setTimeout(next, 5000); // Auto-slide every 5s
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-md">
      <Link to="/store">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-6xl font-bold">
            {slide.title}
            <span className="text-xl mt-2 block">Shop Now</span>
          </div>
        </div>
      ))}
      </Link>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 btn btn-circle z-20"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 btn btn-circle z-20"
      >
        ❯
      </button>
    </div>
  );
}
