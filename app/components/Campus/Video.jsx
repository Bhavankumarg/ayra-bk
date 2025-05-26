import Image from "next/image"
import React from "react"

const Video = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-10">
      <Image
        src="/campus/video.png"
        alt="Sustainability Banner"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  )
}

export default Video
