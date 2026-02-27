import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className=" relative ">
      <div className="relative ">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="h-125   "
        >
          <SwiperSlide className="rounded-2xl  ">
            <div className=" w-full h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
                src="https://images.unsplash.com/photo-1683791895200-201c0c40310f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            {" "}
            <div className=" w-full h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
                src="https://images.unsplash.com/photo-1615461065624-21b562ee5566?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl ">
            {" "}
            <div className=" w-full h-full">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center 
                 md:object-[50%_28%] lg:object-[50%_45%]"
                src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        </Swiper>
          </div>
          

{/* over lay */}
      <div className="absolute z-10 top-44 md:left-160 left-8 flex flex-col items-center space-y-5">
        <h1 className=" md:text-5xl text-3xl text-white font-semibold">Be Someone's Hero Today</h1>
        <p className="text-white ">Your Blood Can Save a Life</p>
        <div className="flex gap-2.5 md:gap-5">
          <Link
            className="btn rounded-xl btn-primary text-white"
            to={"/register"}
          >
            Become a Donor
          </Link>
          <Link
            className="btn rounded-xl btn-accent text-white "
            to={"/search"}
          >
            Search Donors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
