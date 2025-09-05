import React, { useContext, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataContext } from '../context/DataContext';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  const navigate = useNavigate()
  useEffect(() => {
    fetchAllProducts();
  }, []);

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

  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white max-w-xl lg:line-clamp-3 line-clamp-2 md:line-clamp-none sm:line-clamp-none">
                    {item.title}
                  </h1>
                  
                  <p className="text-gray-300 max-w-md mx-auto md:mx-0 line-clamp-2 lg:lg:line-clamp-5 md:line-clamp-none">
                    {item.description}
                  </p>
                  <button  onClick={() => navigate(`/products/${item.id}`)}
                   className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 duration-500">
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="">
                  <img onClick={() => navigate(`/products/${item.id}`)}
                    src={item.image}
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
