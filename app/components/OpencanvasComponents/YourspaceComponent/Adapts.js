import React from "react"

const Adapts = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-img-01.jpg')] h-[90vh] bg-cover bg-center text-white relative m-10 md:m-10 mx-4 sm:mx-2">
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-10 text-center px-4 w-full md:w-1/2 left-1/2 md:left-[75%] transform -translate-x-1/2">
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90 mb-4">
            At AYRA, we know that no two students are the same. That’s why we
            don’t shape you—you shape your own experience. Whether you need a
            quiet space to think, a lively hub to discuss ideas, or hands-on
            opportunities to create and innovate, we provide an environment that
            adapts to your learning style.
          </p>
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90">
            Our classrooms, research spaces, and discussion areas are designed
            for collaboration, exploration, and growth, ensuring that you own
            your education in a way that’s meaningful to you. Here, you won’t
            just study—you’ll shape your future, one idea at a time.
          </p>
        </div>
      </div>
    </>
  )
}

export default Adapts
