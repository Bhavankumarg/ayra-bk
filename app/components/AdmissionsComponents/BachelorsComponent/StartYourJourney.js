import React from 'react'
import Image from 'next/image'
import { HoverButton5 } from '../../../utils/HoverButton';


const StartYourJourney = () => {
    return (

        <>
            <div className='bg-[#002560] py-10 md:px-0 px-4'>
                {/* Text and first image container */}
                <div className="w-full flex flex-col items-center border-b border-dashed border-[#879BBE]">
                    <div className="relative w-full max-w-[900px] h-[200px]">
                        <Image
                            src="/admissions/bachelors_programs/start_your_journey.png"
                            alt="merit-scholarship"
                            fill
                            className="object-contain mt-4"
                            priority
                        />
                    </div>
                </div>
                <div className="text-white text-center flex flex-col items-center gap-4 py-5">
                    <p className="text-2xl font-light max-w-3xl">
                        AYRA’s Bachelor’s programs are built to give you the space, support, and structure to grow—intellectually, personally, and professionally.
                    </p>
                    <HoverButton5 text="Know More" />
                </div>
            </div>
        </>
    )
}

export default StartYourJourney
