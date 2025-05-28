import React from "react"

const Ayraadapts = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-img02-pace.jpg')] h-[90vh] bg-cover bg-center text-white relative m-4 md:m-10">
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-6 md:bottom-10 text-center px-4 w-full md:w-1/2 left-1/2 md:left-[75%] transform -translate-x-1/2">
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90 mb-4">
            Learning at AYRA is designed to be as dynamic as you are. Whether
            you want to fast-track your degree, earn industry certifications, or
            take the time to explore multiple disciplines, your journey is yours
            to shape. With multiple exit points, entrepreneurial incubators, and
            experiential learning opportunities, we ensure that education adapts
            to you, not the other way around.
          </p>
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90">
            This is your education. At your pace. In your way.
          </p>
        </div>
      </div>
    </>
  )
}

export default Ayraadapts
