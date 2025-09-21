import React, { useContext, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataContext } from '../context/DataContext';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext); // Get products from context
  const navigate = useNavigate(); // For navigation to product details

  // Fetch products when component mounts
  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Custom Previous Arrow component
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
        <AiOutlineArrowLeft
          className="arrow"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "20px",
          }}
        />
      </div>
    );
  };

  // Custom Next Arrow component
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrow"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "20px",
          }}
        />
      </div>
    );
  };

  // Slider settings
  var settings = {
    dots: true, // Show navigation dots
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // 2 seconds per slide
    infinite: true, // Infinite looping
    pauseOnHover: true, // Pause on hover
    speed: 500, // Slide animation speed
    slidesToShow: 1, // One slide at a time
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom prev arrow
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#23243e] py-10"
            >
              <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                
                {/* Text Section */}
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-red-500 font-semibold text-sm">
                    Powering Your World with the Best in Shopping
                  </h3>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white max-w-xl lg:line-clamp-3 line-clamp-2 md:line-clamp-none sm:line-clamp-none">
                    {item.title}
                  </h1>
                  
                  <p className="text-gray-300 max-w-md mx-auto md:mx-0 line-clamp-2 lg:lg:line-clamp-5 md:line-clamp-none">
                    {item.description}
                  </p>

                  {/* Shop Now button navigates to single product page */}
                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 duration-500"
                  >
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="">
                  <img
                    onClick={() => navigate(`/products/${item.id}`)} // Navigate on image click
                    src={item.images[0]}
                    alt={item.title}
                    className="rounded-full w-60 sm:w-80 md:w-[300px] lg:w-[400px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
