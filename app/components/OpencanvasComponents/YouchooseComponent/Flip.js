"use client"
import React, { useState } from "react"
import { RiArrowRightUpFill } from "react-icons/ri"
import { sectionsData } from "@/app/utils/FlipData"

const FoldOnHoverRoll = () => {
  const [hovered, setHovered] = useState(false)
  const sectionWidth = 320
  const height = "50vh"

  return (
    <div
      className="relative mt-10 mb-10 container mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1500px",
        height,
        width: `${sectionWidth * sectionsData.length}px`,
      }}
    >
      {sectionsData.map((section, index) => {
        const isFirst = index === 0
        const delay = hovered
          ? index * 0.3 // unfold: left to right
          : (sectionsData.length - index - 1) * 0.3 // fold: right to left

        return (
          <div
            key={index}
            className={`absolute top-0 transition-all duration-700 ease-in-out shadow-md p-5 ${section.bgColor}`}
            style={{
              width: `${sectionWidth}px`,
              height,
              left: `${index * sectionWidth}px`,
              transformOrigin: "left center",
              transform: isFirst
                ? "rotateY(0deg)"
                : hovered
                ? "rotateY(0deg)"
                : "rotateY(-90deg)",
              transitionDelay: `${delay}s`,
              zIndex: sectionsData.length - index,
              backfaceVisibility: "hidden",
              opacity: isFirst || hovered ? 1 : 0,
            }}
          >
            <h3 className="font-bold text-blue-800 mb-12 text-xl">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-800 text-md"
                >
                  <RiArrowRightUpFill className="text-blue-800 mt-1 w-10" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default FoldOnHoverRoll
