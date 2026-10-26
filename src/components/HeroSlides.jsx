import { useState, useEffect, useRef } from "react";
import LeftArrow from "../icons/LeftArrow.jsx";
import RightArrow from "../icons/RightArrow.jsx";
const slides = [
  {
    id: 0,
    title: "Main Hero",
    bgClass: "public/Images/quesaBirria.png",
    CTA: "Experience the flavors of traditional Mexican cooking with fresh ingredients and authentic recipes. We are a seed oil free kitchen.",
    button: "Order now",
  },
  {
    id: 1,
    title: "Desert Hero",
    bgClass: "public/Images/desertHero.svg",
    CTA: "A Sweet Ending Starts Here",
    description:
      "Homemade flan and key lime pie that hit the sweet spot every time.",
    button: "Order now",
  },
  {
    id: 2,
    title: "Papa's Coffecitos",
    popsLogo: "public/Images/papa'sLogo.png",
    bgClass: "public/Images/Papas-HeroBG.svg",
    CTA: "A Classic Flavor With A Coffee Twist",
    description: "Homemade paired with bold espresso in every cup.",
    button: "Cafecito Menu",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  // const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef(null);

  const goTo = (index, dir) => {
    if (animate) return;
    setDirection(dir);
    setAnimate(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setAnimate(false);
      setDirection(null);
    });
  };

  const prev = () => {
    const index = (current - 1 + slides.length) % slides.length;
    goTo(index, "left");
  };

  const next = () => {
    const index = (current + 1) % slides.length;
    goTo(index, "right");
  };

  useEffect(() => clearTimeout(timeoutRef.current), []);

  return (
    <>
      <section
        id="heroSlideContainer"
        className=" w-screen h-full overflow-hidden flex flex-col items-center justify-center bg-accent-red relative "
      >
        <div
          key={current}
          className={`slide-track w-full h-full ${
            animate
              ? direction === "right"
                ? "exiting-to-left"
                : "exiting-to-right"
              : direction === "right"
                ? "entering-from-right"
                : direction === "left"
                  ? "entering-from-left"
                  : ""
          }`}
        >
          {/* Slide content */}
          <div
            id="slideContent"
            style={{
              backgroundImage: `
              url(${slides[current].bgClass})`,
            }}
            className="w-screen h-100 bg-no-repeat flex flex-col  justify-center items-center text-1xl bg-cover bg-center  relative"
          >
            {/* Title on the hero */}
            <h1
              id="heroTitle"
              className="w-screen h-20 flex justify-center items-center font-agbalumo text-4xl md:text-5xl  text-white [-webkit-text-stroke:2px_black] "
            >
              {slides[current].title}

              {/* {slides[current].popsLogo && (
                <img
                  src={slides[current].popsLogo}
                  alt="Papa's Coffecitos Logo"
                  className="w-20 h-40 object-cover pt-5 "
                />
              )} */}
            </h1>
            {/* Call to Action */}
            <div id="CTA" className=" w-full h-auto flex-row ">
              <p className="text-black text-1xl font-bold font-agbalumo text-center bg-amber-300/80 ">
                {slides[current].CTA}
              </p>
            </div>
          </div>
        </div>
        {/* Hero Nav Arrows */}
        <div className="nav-arrows w-full h-full flex items-center justify-between z-40 p-5 bottom-1 absolute">
          <button
            className="nav-btn"
            onClick={prev}
            aria-label="Previous slide"
          >
            <LeftArrow />
          </button>

          <button className="nav-btn" onClick={next} aria-label="Next slide">
            <RightArrow />
          </button>
        </div>
      </section>
    </>
  );
}
