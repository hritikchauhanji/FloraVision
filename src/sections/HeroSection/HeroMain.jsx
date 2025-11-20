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
              <span className="text-7xl 2xl:text-8xl font-inter font-semibold">
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
            <div className="flex justify-end relative top-[280px] mr-7">
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
            <div className="flex flex-col bg-white/5 backdrop-blur-sm border border-white/20 rounded-[45px] p-8 shadow-xl gap-7 w-[409px]">
              <div className="flex gap-7">
                <img
                  src="images/hero/girl_image.png"
                  alt="girl_image"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-inter text-[22px] text-white">
                    Ronnie Hamill
                  </span>
                  <ul className="flex gap-2">
                    <li>
                      <img
                        src="images/hero/star.png"
                        alt="star image"
                        className="w-[15px]"
                      />
                    </li>
                    <li>
                      <img
                        src="images/hero/star.png"
                        alt="star image"
                        className="w-[15px]"
                      />
                    </li>
                    <li>
                      <img
                        src="images/hero/star.png"
                        alt="star image"
                        className="w-[15px]"
                      />
                    </li>
                    <li>
                      <img
                        src="images/hero/star.png"
                        alt="star image"
                        className="w-[15px]"
                      />
                    </li>
                    <li>
                      <img
                        src="images/hero/half_star.png"
                        alt="star image"
                        className="w-[7.5px]"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="font-inter text-[17px] text-white/75">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </div>
            </div>
          </div>
          {/* Trendy Plants Heading */}
          <div className="relative w-full flex justify-center mt-32 mb-10 md:col-span-2">
            <h2 className="text-white text-[55px] font-inter md:text-5xl font-semibold relative inline-block px-6">
              <span className="absolute left-3 top-[40%] -translate-y-1/2 w-[55px] h-[55px] border-l-5 border-t-5 border-yellow-400/50 rounded-tl-[20px]"></span>
              Our Trendy plants
              <span className="absolute right-3 top-[60%] -translate-y-1/2 w-[55px] h-[55px] border-r-5 border-b-5 border-yellow-400/50 rounded-br-[20px]"></span>
            </h2>
          </div>
        </div>
        {/* Trendy Plants Card */}
        <div className="flex justify-end relative top-[280px] mr-7">
          <div className="relative w-full">
            {/* Card Container */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-[70px] p-6 shadow-xl relative mt-20 pl-20 pb-10">
              {/* Plant Image (Floating Above Card) */}
              <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-full max-w-[601px]">
                <img
                  src="images/hero/Rose_Gold_Feminine_Calligraphy_Monogram_Logo(23).png"
                  alt="Rose_Gold_Feminine_Calligraphy_Monogram_Logo(23)"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              <div>
                <span className="font-inter text-[38px] font-semibold text-white">
                  For Your Desks Decorations
                </span>
                <span className="font-inter text-xl font-semibold text-white">
                  I recently added a beautiful desk decoration plant to my
                  workspace, and it has made such a positive difference!
                </span>
                <span className="font-inter text-xl font-semibold text-white">
                  Rs. 599/-
                </span>
                <div>
                  <Button className="text-white/75">Explore</Button>
                  <Button className="text-white/75">
                    <img src="" alt="" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroBanner>
    </section>
  );
}

export default HeroMain;
