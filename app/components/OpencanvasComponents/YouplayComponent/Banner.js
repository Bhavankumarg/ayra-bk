import React from "react"

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-banner-you-play.jpg')] h-[90vh] bg-cover bg-center text-white relative">
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-10 text-center px-4 w-1/2 left-[76%] transform -translate-x-1/2">
          <p className="text-base font-light text-start w-2/3 mx-auto opacity-90 ">
            Your education should reflect who you are and where you want to go.
            At AYRA, you have the freedom to design a path that adapts to your
            interests, evolves with your ambitions, and leads to new
            possibilities.
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
