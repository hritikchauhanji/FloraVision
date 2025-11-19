import React from "react";
import { Button, HeroBanner } from "../../components";

function HeroMain() {
  return (
    <section className="relative">
      {/* Background Image */}
      <HeroBanner className="top-[-140px]">
        {/* Content Overlay */}
        <div className="px-10">
          <div className="grid md:grid-cols-2">
            {/* Left Upper Part */}
            <div className="text-white/75 mt-[340px] ml-5">
              <span className="text-[116px] font-inter font-semibold">
                Earth's Exhale
              </span>

              <p className="font-inter font-medium text-[23px] pr-1">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's
                natural environment and its essential role in sustaining life.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <Button>Buy Now</Button>

                <div className="flex justify-center w-[70px] h-[70px] items-center border-2 border-white rounded-full">
                  <img
                    src="images/hero/right_arrow.png"
                    alt="right arrow"
                    className="w-5"
                  />
                </div>

                <span className="font-indie text-[25px]">Live Demo...</span>
              </div>
            </div>
            {/* Right Card */}
            <div className="hidden lg:flex justify-end relative top-[280px] mr-7">
              <div className="relative w-full max-w-[490px] ">
                {/* Card Container */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-[70px] p-6 shadow-xl relative mt-20 pl-20 pb-10">
                  {/* Plant Image (Floating Above Card) */}
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[459px]">
                    <img
                      src="/images/hero/Rose_Gold_Feminine_Calligraphy_Monogram_Logo.png"
                      alt="Aglaonema plant"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>

                  {/* Spacer for Image */}
                  <div className="h-64"></div>

                  {/* Text Section */}
                  <div className="space-y-1 mt-20">
                    <div className="text-white/75 text-[23px] font-inter">
                      Indoor Plant
                    </div>
                    <span className="flex items-center justify-between mb-4">
                      <span className="text-white/75 text-[38px]">
                        Aglaonema plant
                      </span>
                      {/* Arrow Icon */}
                      <img
                        src="public/images/hero/card-right-arror.png"
                        alt="right arrow"
                        className="text-white w-5"
                      />
                    </span>

                    {/* Buy Button */}
                    <Button className="text-white/75">Buy Now</Button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-6 gap-2">
                      <div className="w-5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left bottom Part */}
          </div>
        </div>
      </HeroBanner>
    </section>
  );
}

export default HeroMain;
