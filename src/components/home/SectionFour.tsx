/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionFour = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-8 sm:px-12 md:px-32 xl:px-52">
      <div className="flex flex-col items-center gap-6 w-full lg:flex-row-reverse lg:justify-between">
        <div className="lg:w-2/5">
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="man-wearing-headphones"
            className="rounded-lg phones:hidden"
          />
          <img
            src="/assets/shared/tablet/image-best-gear.jpg"
            alt="man-wearing-headphones"
            className="rounded-lg hidden phones:flex lg:hidden"
          />
          <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="man-wearing-headphones"
            className="rounded-lg hidden lg:flex w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full sm:px-12 lg:px-0 rounded-lg flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h3 className="font-bold text-3xl md:text-5xl xl:text-7xl mb-6 tracking-wider">
            BRINGING YOU THE <span className="text-clr-accent">BEST</span> AUDIO
            GEAR
          </h3>
          <p className="text-lg text-clr-dark lg:w-fit font-fw-bold opacity-70 tracking-wider leading-[2.3rem]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
