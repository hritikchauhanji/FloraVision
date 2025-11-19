import React from "react";

const HeroProductCard = ({
  image,
  category = "Indoor Plant",
  name = "Aglaonema plant",
  onBuyNow,
  onViewDetails,
}) => {
  return (
    <div className="relative w-full max-w-md bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] rounded-3xl p-6 shadow-2xl border-2 border-[#4CAF50]/30">
      {/* Top Icons Bar */}
      <div className="flex items-center justify-between mb-4">
        {/* User Avatar with Colorful Border */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all border border-white/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all border border-white/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all border border-white/20">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Plant Image */}
      <div className="relative h-64 flex items-end justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain drop-shadow-2xl"
        />

        {/* Small Avatar Badge */}
        <div className="absolute bottom-2 left-6 w-12 h-12 rounded-full border-4 border-[#1a2e1a] overflow-hidden shadow-lg">
          <img
            src="/images/avatar/user.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Category */}
        <p className="text-gray-400 text-sm font-medium">{category}</p>

        {/* Name and Arrow */}
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <button
            onClick={onViewDetails}
            className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={onBuyNow}
          className="w-full py-3 bg-transparent border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-200"
        >
          Buy Now
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductCard;
