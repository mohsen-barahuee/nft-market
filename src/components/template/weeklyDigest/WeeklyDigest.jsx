import React from "react";

export default function WeeklyDigest() {
  return (
    <div>
      <div className=" container mt-10">
        <div className="flex flex-col sm:flex-row gap-y-8.5 gap-x-8.5 md:gap-x-20 px-8.5 py-10 md:p-15 md:pl-53 sm:bg-grayText-300 rounded-xl">
          <div>
            <img
              src="./img/weeklyDigest/banner.png"
              alt=""
              className="w-[450px] h-[280px] md:w-[525px] md:h-auto"
            />
          </div>
          <div className="md:flex flex-col justify-center">
            <div>
              <h3 className="H4Sans md:H3Sans">Join our weekly </h3>
              <h3 className="H4Sans md:H3Sans">digest</h3>
              <p className="font-BodySans mt-2.5">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-y-4 md:relative">
              <input
                type="text"
                placeholder="Enter your email here"
                className="py-3 px-5 md:p-5 w-full md:w-[425px] rounded-3xl text-black outline-none font-BodySans"
              />
              <button className="bg-purple rounded-3xl py-3 px-5 md:py-5 md:px-13 md:absolute md:right-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
