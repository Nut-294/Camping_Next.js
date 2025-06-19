"use client";
import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {landmarks.map((Landmark) => {
          return (
           
              <SwiperSlide key={Landmark.image} className="group">
                <div className="relative rounded-md overflow-hidden">
                  <img
                    className="w-full h-[400px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                    src={Landmark.image}
                  />
                </div>
              </SwiperSlide>
  
          );
        })}
      </Swiper>
    </div>
  );
};
export default Hero;
