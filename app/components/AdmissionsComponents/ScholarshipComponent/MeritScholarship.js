import React from 'react'
import Image from 'next/image'

const Meritscholarship = () => {
  return (
    <>
      {/* Text and first image container */}
      <div className="w-full flex flex-col items-center bg-gray-100 py-10">
        <div className="relative w-full max-w-[800px] h-[200px]">
          <Image
            src="/admissions/scholarship/merit_scholarship.png"
            alt="merit-scholarship"
            fill
            className="object-contain mt-4"
            priority
          />
        </div>
        <div className="w-full max-w-[800px] px-4 text-center pt-5">
          <p>
            A number of merit-based scholarships are awarded to the applicants at the time of admissions.
            The scholarship may range from partial to full fee waivers. The amount of scholarship awarded
            to an individual applicant shall be informed in the admission offer letter.
          </p>
        </div>
      </div>

      {/* Second image with full width blue background */}
      <div className="w-full bg-[#002561] py-8 flex justify-center">
        <div className="relative w-full max-w-[700px] h-[300px]">
          <Image
            src="/admissions/scholarship/merit_scholarship.png"
            alt="merit-scholarship"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default Meritscholarship
