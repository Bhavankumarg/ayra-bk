import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('/admissions/scholarship/scholarship_banner.png')] h-[90vh] bg-cover bg-center text-white relative">

            {/* Rotated tagline in custom position */}
            <div className="absolute bottom-[25%] left-[25%] rotate-[-12deg]">
                <p className="text-base font-light opacity-90">Supporting Your Journey. Investing in Your Potential.</p>
            </div>

            {/* Centered paragraph at bottom */}
            <div className="absolute bottom-10 text-center px-4 w-1/2 left-[35%] transform -translate-x-1/2">
                <p className="text-base font-light text-start w-2/3 mx-auto opacity-90">
                    In our endeavour to encourage and support meritorious and deserving students achieve their aspirations,
                    we offer many merit-based scholarships and need-based financial support.
                </p>
            </div>

        </div>
    );
};

export default Banner;
