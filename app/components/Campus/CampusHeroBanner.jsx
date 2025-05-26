import React from "react"

const CampusHeroBanner = () => {
  return (
    <div className="bg-[url('/campus/campus-banner.png')] h-[90vh] bg-cover bg-center flex pb-16 px-52">
      <div className="flex items-end max-w-3xl">
        <p className="text-lg text-white px-16">
          Whether you need a quiet corner to think, a dynamic hub to exchange
          ideas, or high-tech labs to bring your vision to life, every space at
          AYRA is built to support your journey.
        </p>
      </div>
    </div>
  )
}

export default CampusHeroBanner
