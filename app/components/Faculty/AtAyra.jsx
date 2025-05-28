import React from "react"

const AtAyra = () => {
  return (
    <div className="my-5 flex flex-col items-center gap-3">
      <p className="text-3xl text-black font-semibold">
        At AYRA, you’re not just taught—you’re seen, heard, and supported.
      </p>
      <p className="text-lg text-black font-light">
        Our faculty believe in potential, not perfection. And they’re here to
        help you unfold yours.
      </p>

      <div className="flex gap-3">
        <div className="group inline-block">
          <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Explore Faculty by School
          </button>
        </div>
        <div className="group inline-block">
          <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Discover Faculty-Led Projects
          </button>
        </div>
        <div className="group inline-block">
          <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Meet Visiting Experts
          </button>
        </div>
      </div>
    </div>
  )
}

export default AtAyra
