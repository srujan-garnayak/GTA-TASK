import React from "react";

function HeroSection() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dhkfjehat/image/upload/v1748934327/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_efvkyk.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl">
          Game To Aim.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 font-light drop-shadow-lg">
          Level up your play.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto bg-black/80 hover:bg-black/90 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-200 border-2 border-white/20 hover:border-white/40 hover:border-2">
            <a href="#join">Join Now</a>
          </button>
          <button className="w-full sm:w-auto text-white hover:text-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm bg-white/10 hover:bg-white/20">
            <a href="#about">Explore</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;