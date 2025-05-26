import Image from "next/image"
import React from "react"

const Explore = () => {
  return (
    <div className="flex justify-center max-w-5xl mx-auto my-10 px-4 md:px-0">
      <Image
        src="/campus/ExploreWhatYourLife.png"
        width={1299}
        height={339}
        alt="Explore What Your Life"
        className="w-full"
      />
    </div>
  )
}

export default Explore
