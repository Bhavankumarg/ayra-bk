"use client"
import React, { useState } from "react"

const sectionsData = [
  {
    id: 1,
    title: "Through sports—Competing, training, and excelling in individual and team sports",
    bgColor: "bg-gray-150", 
  },
  {
    id: 2,
    title: "Through leadership—Taking charge in student government, clubs, and social initiatives",
    bgColor: "bg-[#F1F1F2]", 
  },
  {
    id: 3,
    title: "Through exploration—Trying out new activities, hobbies, and competitive challenges",
    bgColor: "bg-gray-150", 
  },
]

const FoldOnHoverRoll = () => {
  const [hovered, setHovered] = useState(false)
  const sectionWidth = 320
  const panelHeight = "40vh"

  return (
    <div
      className="mt-10 mb-10 flex justify-center items-center"
      style={{
        perspective: "1500px",
      }}
    >
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: `${sectionWidth * sectionsData.length}px`,
          height: panelHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {sectionsData.map((section, index) => {
          const isFirst = index === 0
          const delay = hovered
            ? index * 0.2
            : (sectionsData.length - index - 1) * 0.2

          return (
            <div
              key={section.id || index}
              className={`absolute top-0 shadow-lg ${section.bgColor}`}
              style={{
                width: `${sectionWidth}px`,
                height: panelHeight,
                left: `${index * sectionWidth}px`,
                transformOrigin: "left center",
                transform: isFirst
                  ? "rotateY(0deg)"
                  : hovered
                  ? "rotateY(0deg)"
                  : "rotateY(-90deg)",
                transition: "transform 0.7s ease-in-out, opacity 0.5s ease-in-out",
                transitionDelay: `${delay}s`,
                zIndex: sectionsData.length - index,
                backfaceVisibility: "hidden",
                opacity: isFirst || hovered ? 1 : 0,
                overflow: "hidden",
              }}
            >
              <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                <h3 className="font-semiboald text-black text-xl md:text-sm uppercase text-center md:text-left">
                  {section.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoldOnHoverRoll
