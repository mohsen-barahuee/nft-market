import React from "react";

export default function HowWork() {
  return (
    <div className="mt-10 md:mt-20">
      <div className=" container px-8.5">
        <div className="flex justify-between ">
          <div>
            <h1 className="H4Sans md:H3Sans mb-1">How it works</h1>
            <p className="font-BodySans">Find out how to get started</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-5 md:gap-x-20 mt-10 md:mt-12">
          <div className="flex gap-x-5 sm:flex-col items-center bg-grayText-300 pt-2.5 pb-8.5 px-8.5 rounded-3xl">
            <img
              src="./img/howItWork/icon.png"
              alt=""
              className="w-25 md:w-63 "
            />
            <div className="flex flex-col items-start sm:items-center">
              <span className="font-BodySansBold sm:text-center md:H5Sans whitespace-nowrap">
                Setup Your wallet
              </span>
              <span className="sm:text-center text-xs sm:text-lg mt-2.5 sm:mt-5 font-BodySans">
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </span>
            </div>
          </div>
          <div className="flex gap-x-5 sm:flex-col items-center bg-grayText-300 pt-2.5 pb-8.5 px-8.5 rounded-3xl">
            <img
              src="./img/howItWork/icon (2).png"
              alt=""
              className="w-25 md:w-63 "
            />
            <div className="flex flex-col items-start sm:items-center ">
              <span className="font-BodySansBold sm:text-center md:H5Sans whitespace-nowrap ">
                Create Collection
              </span>
              <span className="sm:text-center text-xs sm:text-lg mt-2.5 sm:mt-5 font-BodySans">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </span>
            </div>
          </div>
          <div className="flex gap-x-5 sm:flex-col items-center bg-grayText-300 pt-2.5 pb-8.5 px-8.5 rounded-3xl">
            <img
              src="./img/howItWork/icon.png"
              alt=""
              className="w-25 md:w-63 "
            />
            <div className="flex flex-col items-start sm:items-center">
              <span className="font-BodySansBold sm:text-center md:H5Sans whitespace-nowrap">
                Start Earning
              </span>
              <span className="sm:text-center text-xs sm:text-lg mt-2.5 sm:mt-5 font-BodySans">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
