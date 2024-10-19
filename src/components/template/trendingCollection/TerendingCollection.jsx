"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TerendingCollection() {
  return (
    <div className="px-8.5 sm:px-18 py-10 md:py-20 md:px-28 ">
      <div className=" container">
        <div className="mb-10">
          <h1 className="H4Sans mb-[10px]">Trending Collection</h1>
          <p className=" font-BodySans">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className=" justify-center gap-x-8.5 hidden sm:flex">
          <div>
            <img
              src="./img/trendingCollection/Primary1.png"
              alt=""
              className="w-81"
            />
            <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
              <img
                src="./img/trendingCollection/secondary/Secondry2Primary1.png"
                alt=""
                className="w-25"
              />
              <img
                src="./img/trendingCollection/secondary/SendaryPrimary1.png"
                alt=""
                className="w-25"
              />
              <div className="w-25 h-25 bg-purple flex justify-center items-center">
                1025+
              </div>
            </div>
            <h1 className="H5Sans mt-3.75 mb-2.5">DSGN Animals</h1>
            <div className="flex items-center gap-x-3">
              <img
                src="./img/trendingCollection/profile/profile1.png"
                alt=""
                className="w-6"
              />
              <p>MrFox</p>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="./img/trendingCollection/Primary2.png"
              alt=""
              className="w-81"
            />
            <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
              <img
                src="./img/trendingCollection/secondary/primary2.png"
                alt=""
                className="w-25"
              />
              <img
                src="./img/trendingCollection/secondary/primary2 (2).png"
                alt=""
                className="w-25"
              />
              <div className="w-25 h-25 bg-purple flex justify-center items-center">
                1025+
              </div>
            </div>
            <h1 className="H5Sans mt-3.75 mb-2.5">Magic Mushrooms</h1>
            <div className="flex items-center gap-x-3">
              <img
                src="./img/trendingCollection/profile/profile2.png"
                alt=""
                className="w-6"
              />
              <p>Shroomie</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <img
              src="./img/trendingCollection/Primary3.png"
              alt=""
              className="w-81"
            />
            <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
              <img
                src="./img/trendingCollection/secondary/Primary3.png"
                alt=""
                className="w-25"
              />
              <img
                src="./img/trendingCollection/secondary/Primary3.png"
                alt=""
                className="w-25"
              />
              <div className="w-25 h-25 bg-purple flex justify-center items-center">
                1025+
              </div>
            </div>
            <h1 className="H5Sans mt-3.75 mb-2.5">Disco Machines</h1>
            <div className="flex items-center gap-x-3">
              <img
                src="./img/trendingCollection/profile/profile3.png"
                alt=""
                className="w-6"
              />
              <p>BeKind2Robots</p>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <Swiper className="mySwiper ">
            <SwiperSlide>
              <img
                src="./img/trendingCollection/Primary1.png"
                alt=""
                className="w-81"
              />
              <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
                <img
                  src="./img/trendingCollection/Primary1.png"
                  alt=""
                  className="w-25"
                />
                <img
                  src="./img/trendingCollection/Primary1.png"
                  alt=""
                  className="w-25"
                />
                <div className="w-25 bg-purple flex justify-center items-center">
                  1025+
                </div>
              </div>
              <h1 className="H5Sans mt-3.75 mb-2.5">DSGN Animals</h1>
              <div className="flex items-center gap-x-3">
                <img
                  src="./img/trendingCollection/profile/profile1.png"
                  alt=""
                  className="w-6"
                />
                <p>MrFox</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./img/trendingCollection/Primary2.png"
                alt=""
                className="w-81"
              />
              <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
                <img
                  src="./img/trendingCollection/secondary/primary2.png"
                  alt=""
                  className="w-25"
                />
                <img
                  src="./img/trendingCollection/secondary/primary2 (2).png"
                  alt=""
                  className="w-25"
                />
                <div className="w-25 h-25 bg-purple flex justify-center items-center">
                  1025+
                </div>
              </div>
              <h1 className="H5Sans mt-3.75 mb-2.5">Magic Mushrooms</h1>
              <div className="flex items-center gap-x-3">
                <img
                  src="./img/trendingCollection/profile/profile2.png"
                  alt=""
                  className="w-6"
                />
                <p>Shroomie</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./img/trendingCollection/Primary3.png"
                alt=""
                className="w-81"
              />
              <div className="flex mt-3.75 gap-x-3.75 child:rounded-2xl">
                <img
                  src="./img/trendingCollection/secondary/Primary3.png"
                  alt=""
                  className="w-25"
                />
                <img
                  src="./img/trendingCollection/secondary/Primary3.png"
                  alt=""
                  className="w-25"
                />
                <div className="w-25 h-25 bg-purple flex justify-center items-center">
                  1025+
                </div>
              </div>
              <h1 className="H5Sans mt-3.75 mb-2.5">Disco Machines</h1>
              <div className="flex items-center gap-x-3">
                <img
                  src="./img/trendingCollection/profile/profile3.png"
                  alt=""
                  className="w-6"
                />
                <p>BeKind2Robots</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
