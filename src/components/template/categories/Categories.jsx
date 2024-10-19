import React from "react";

export default function Categories() {
  return (
    <div className=" px-8.5">
      <div className="container mb-10 md:mb-20">
        <div className="mt-10 sm:mt-20 mb-15">
          <h1 className="H4Sans sm:H3Sans">Browse Categories</h1>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8.5 ">
          <div>
            <div>
              <img src="./img/categories/art.png" className="w-full" />
            </div>
            <div className="p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-2xl ">Art</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/collectibles.png" className="w-full" />
            </div>
            <div className="p-8 flex justify-center bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-xl ">Collectibles</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/music.png" className="w-full" />
            </div>
            <div className="p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-2xl ">Music</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/photography.png" className="w-full" />
            </div>
            <div className="p-8 flex justify-center bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-xl ">Photography</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/video.png" className="w-full" />
            </div>
            <div className="p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-2xl ">Video</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/utilitys.png" className="w-full" />
            </div>
            <div className="p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-2xl ">Utilitys</h1>
            </div>
          </div>
          <div>
            <div>
              <img src="./img/categories/sport.png" className="w-full" />
            </div>
            <div className="p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-2xl ">Sport</h1>
            </div>
          </div>
          <div>
            <div>
              <img
                src="./img/categories/virtual-worlds.png"
                className="w-full"
              />
            </div>
            <div className="p-5 md:p-8 bg-grayText-300 rounded-b-3xl md:rounded-b-[40px]">
              <h1 className="font-BodySansBold text-xl md:text-xl ">
                virtual worlds
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
