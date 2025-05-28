import Image from "next/image"
import React from "react"

const OurFacultyPhilosophy = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto flex items-center justify-between pl-16">
        <h1 className="text-8xl font-schabo text-[#2050B1] tracking-wide">
          OUR FACULTY <br /> PHILOSOPHY
        </h1>

        <Image
          src="/faculty/our-faculty-philosophy.png"
          width={500}
          height={400}
          alt="our faculty philosophy"
        />
      </div>
    </div>
  )
}

export default OurFacultyPhilosophy
