import React from 'react'
import Image from 'next/image'
import { HoverButton5 } from '../../../utils/HoverButton';


const StartYourJourney = () => {
    return (

        <>
            <div className='bg-[#002560] py-10 md:px-0 px-4'>
                {/* Text and first image container */}
                <div className="w-full flex flex-col items-center border-b border-dashed border-[#879BBE pb-10">
                    <div className="relative w-full max-w-[700px] h-[200px]">
                        <Image
                            src="/admissions/masters_programs/ayra_edge.png"
                            alt="merit-scholarship"
                            fill
                            className="object-contain my-4"
                            priority
                        />
                    </div>
                </div>
                <div className="text-white text-center flex flex-col items-center gap-4 py-5">
                    <p className="text-2xl font-light max-w-6xl">
                        Our master’s programs offer more than specialisation—they offer transformation. Whether you’re looking to deepen your skills, shift careers, or move into leadership, you’ll find the platform here.
                    </p>
                    <HoverButton5 text="Know More" />
                </div>
            </div>
        </>
    )
}

export default StartYourJourney
