import { HoverButton3 } from "@/app/utils/HoverButton"
import Image from "next/image"
import React from "react"

const Leadership = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] container mx-auto my-10">
      {/* Background Image */}
      <Image
        src="/life-at-ayra/leadership.png"
        alt="Leadership & Entrepreneurship Clubs"
        fill
        className="object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 top-40 flex justify-end items-center">
        <div className="text-white max-w-[50%]">
          <div className="space-y-4">
            <h3 className="text-4xl text-white font-bold">
              Develop skills, organise events, and make an impact.
            </h3>
            <p className="text-lg font-light text-white">
              This is Your Space. Embrace It.
            </p>
            <div className="group inline-block">
              <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                Explore Clubs
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadership
