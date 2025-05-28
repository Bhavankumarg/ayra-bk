"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const images = [
  "/opencanvas/rocket1.png",
  "/opencanvas/rocket2.png",
  "/opencanvas/rocket3.png",
  "/opencanvas/rocket4.png",
  "/opencanvas/rocket5.png",
  "/opencanvas/rocket6.png",
  "/opencanvas/rocket7.png",
]

const headings = [
  "How will you define your academic journey?",
  "What does learning mean to you?",
  "Design your unique path to excellence",
  "Turn challenges into stepping stones",
  "Dream big. Learn endlessly. Succeed consistently.",
  "Reimagine your learning experience",
  "Empower your future, one step at a time",
]

const subtexts = [
  "Become a trusted expert in your domain with relentless curiosity.",
  "Unlock new perspectives and reshape how you absorb knowledge.",
  "Forge your own way with courage, creativity, and consistency.",
  "Every obstacle is an opportunity to grow stronger and wiser.",
  "Your journey to success begins with a hunger to evolve every day.",
  "Discover how personalized learning can unlock your true potential.",
  "Build resilience, leadership, and confidence with every challenge.",
]

export default function PaperFoldingScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollPerSection, setScrollPerSection] = useState(500)

  useEffect(() => {
    setScrollPerSection(window.innerHeight / 1.5)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const trackEl = trackRef.current
      const sectionEl = sectionRef.current
      if (!trackEl || !sectionEl) return

      const scrollY = window.scrollY
      const trackTop = trackEl.offsetTop
      const maxIndex = headings.length - 1

      const scrollOffset = scrollY - trackTop

      if (scrollOffset >= 0) {
        let newIndex = Math.floor(scrollOffset / scrollPerSection)
        newIndex = Math.min(Math.max(newIndex, 0), maxIndex)
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex)
        }
      } else {
        if (activeIndex !== 0) setActiveIndex(0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollPerSection, activeIndex])

  const trackHeight = `calc(100vh + ${(headings.length - 1) * scrollPerSection}px)`

  return (
    <div ref={trackRef} style={{ height: trackHeight }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center"
      >
        <div className="relative z-10 flex flex-col-reverse md:flex-row-reverse w-full container mx-auto gap-6 md:gap-4 h-auto md:h-[100vh] py-10 md:py-0">
          
          {/* Image on right */}
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center gap-4 mb-6 md:mb-0">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <Image
                src={images[activeIndex]}
                alt={`Rocket ${activeIndex + 1}`}
                className="w-full h-full object-contain"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300 relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l border-dashed border-gray-400 h-full" />
          </div>

          {/* Text on left */}
          <div className="w-full md:w-[70%] flex flex-col justify-center px-4 md:pr-4 relative text-center md:text-left">
            <div className="h-auto">
              <h2 className="text-2xl md:text-5xl font-extrabold text-[#002561] mb-4 leading-tight">
                {headings[activeIndex]}
              </h2>
              <p className="text-base md:text-xl text-[#002561] font-medium">
                {subtexts[activeIndex]}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
