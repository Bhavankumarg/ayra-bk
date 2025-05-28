import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-banner02-pace.jpg')] h-[90vh] bg-cover bg-center text-white relative">
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-10 md:bottom-20 text-center px-4 w-full md:w-1/2 left-1/2 lg:left-[25%] transform -translate-x-1/2">
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90">
            At AYRA, learning isn’t one-size-fits-all. Whether you prefer
            structured coursework, self-directed exploration, or hands-on
            experiences, you’ll find a rhythm that works for you.
          </p>
        </div>
      </div>

      <div className="bg-[url('/opencanvas/opc-bg-img.png')] lg:h-[40vh] bg-cover bg-center relative px-4 md:px-20 border-b-2 border-dotted border-gray-300">
        <div className="container mx-auto pt-6 md:pt-10 pb-6 md:pb-10">
          <Image
            src="/opencanvas/opc-img-boat.png"
            alt="Next Section"
            className="w-full h-auto"
            width={1500}
            height={1000}
          />
        </div>
      </div>
    </>
  )
}

export default Banner
