import { services } from "../data/services";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "./Card";

function Services() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef, prevRef, nextRef]);

  return (
    <div className="px-[20px] md:px-[80px] bg-[#3D5E66] text-white py-20 h-[100vh] relative z-20">
      <h2 className="text-[32px] font-semibold text-center">Our Services</h2>

      <Swiper
        ref={swiperRef}
        className="py-5"
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Default for small screens
        slidesPerGroup={1} // Move one slide at a time
        loop={true}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {services.map((item, index) => (
          <SwiperSlide className="p-4 z-20" key={index}>
            <div className="z-10">
              <Card data={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="hidden md:flex justify-between mt-5">
        <button ref={prevRef} className="swiper-button-prev text-white">
          Prev
        </button>
        <button ref={nextRef} className=" hidden md:flex swiper-button-next text-white">
          Next
        </button>
      </div> */}
    </div>
  );
}

export default Services;
