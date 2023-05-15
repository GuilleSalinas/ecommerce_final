import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
// import { RxDotFilled } from 'react-icons/rx';

function SliderPromotion() {
  const slides = [
    {
      url: "../../public/Banner/banner1.png",
    },
    {
      url: "../../public/Banner/banner2.png",
    },
    {
      url: "../../public/Banner/banner3.png",
    },

    {
      url: "../../public/Banner/banner4.png",
    },
    {
      url: "../../public/Banner/banner5.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1680px] h-[400px] w-full m-auto py-4 px-1 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <LeftOutlined onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <RightOutlined onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {/* <PlusCircleFilled className=" accent-black"/> */}
            <svg height="100" width="50">
              <circle
                cx="20"
                cy="20"
                r="8"
                stroke="#1c9d94"
                stroke-width="3"
                fill="#1c9d94"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderPromotion;
