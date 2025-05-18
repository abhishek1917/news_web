"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const heroSlides = [
  {
    title: "Breaking News: Global Climate Summit",
    description:
      "World leaders gather to discuss urgent climate action and sustainable solutions.",
    imageUrl: "/news/image-1.jpg",
    category: "World",
    link: "/news/image-1.jpg",
  },
  {
    title: "Breaking News: Market Crash",
    description:
      "World leaders gather to discuss urgent climate action and sustainable solutions.",
    imageUrl: "/news/image-1.jpg",
    category: "StockMarket",
    link: "/news/image-1.jpg",
  },
  {
    title: "Tech Revolution: AI Transforms Industries",
    description:
      "Artificial Intelligence is reshaping business, healthcare, and everyday life.",
    imageUrl: "/news/image-2.jpg",
    category: "Technology",
    link: "/news/image-2.jpg",
  },
  {
    title: "Economic Insights: Market Trends 2025",
    description:
      "Experts predict significant shifts in global economic landscapes.",
    imageUrl: "/news/image-3.jpg",
    category: "Business",
    link: "/news/image-3.jpg",
  },
];

const HeroSlider = () => {
  return (
    <section className="w-full bg-transparent py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1, // no delay between slides
          disableOnInteraction: false,
        }}
        speed={3000} // slow and smooth scroll
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        className="w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
           <div className="bg-red rounded-3xl shadow-2xl overflow-hidden m-6 max-w-[400px] md:max-w-[500px] lg:max-w-[600px] transition-transform duration-500 hover:scale-105">

              <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={1000}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-indigo-500 font-bold uppercase">
                  {slide.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{slide.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{slide.description}</p>
                <a
                  href={slide.link}
                  className="inline-block mt-4 text-indigo-600 hover:underline text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
