import Image from "next/image"
import React from "react"

const LifeAtAyraHeroBanner = () => {
  return (
    <div className="relative h-[90vh] w-full pb-16 px-52">
      <Image
        src="/life-at-ayra/student-life-banner.png"
        alt="Student Life Banner"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute bottom-[130px] left-[28%]">
        <p className="text-lg text-white -rotate-[14deg]">
          Beyond the Classroom, Into Possibility
        </p>
      </div>

      <div className="absolute bottom-4 right-16 max-w-3xl">
        <p className="text-lg text-white">
          At AYRA, your experience isn’t just about academics—it’s about the
          spaces you explore, the connections you make, and the passions you
          pursue. Whether you’re looking for a quiet corner to reflect, a
          dynamic space to collaborate, or a place to challenge yourself
          physically and creatively, AYRA gives you the freedom to shape your
          student life, your way.
        </p>
      </div>
    </div>
  )
}

export default LifeAtAyraHeroBanner
