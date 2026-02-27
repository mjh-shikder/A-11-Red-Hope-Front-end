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
    <div className="  ">
      <div className="">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="h-125   "
        >
          <SwiperSlide className=" ">
            {" "}
            <div className=" flex justify-center items-center w-full h-full bg-cover  bg-[url(https://images.unsplash.com/photo-1615461065624-21b562ee5566?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
              <div
                className="flex flex-col items-center space-y-5 
      backdrop-blur-md rounded-xl brightness-90 saturate-120 px-10 py-8"
              >
                <h1 className=" md:text-5xl text-3xl text-white font-semibold">
                  Need Emergency Blood?
                </h1>
                <p className="text-white ">Find The Donators Near you</p>
                <div className="flex gap-2.5 md:gap-5">
                  <Link
                    className="btn rounded-xl btn-primary btn-lg text-white"
                    to={"/dashboard/create-donation-request"}
                  >
                    Request Donation
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className=" flex justify-center items-center w-full h-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1733119883210-04f09d5f86df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
              <div
                className="flex flex-col items-center space-y-5 
      backdrop-blur-md rounded-xl brightness-90 saturate-120 px-10 py-8"
              >
                <h1 className=" md:text-5xl text-3xl text-white  font-semibold">
                  Be Someone's Hero Today
                </h1>
                <p className="text-white ">Your Blood Can Save a Life</p>
                <div className="flex gap-2.5 md:gap-5">
                  <Link
                    className="btn  rounded-xl btn-primary btn-lg text-white"
                    to={"/register"}
                  >
                    Become a Donor
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            {" "}
            <div className=" flex justify-center items-center w-full h-full bg-cover  bg-[url(https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
              <div
                className="flex flex-col items-center space-y-5 
      backdrop-blur-md rounded-xl brightness-90 saturate-120 px-10 py-8"
              >
                <h1 className=" md:text-5xl  text-3xl text-white font-semibold">
                  Want To Donate Blood?
                </h1>
                <p className="text-white ">
                  Find the people who need blood right now
                </p>
                <div className="flex gap-2.5 md:gap-5">
                  <Link
                    className="btn rounded-xl btn-accent btn-lg text-white "
                    to={"/search"}
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* over lay */}
    </div>
  );
};

export default Banner;
