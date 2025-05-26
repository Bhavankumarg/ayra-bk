'use client';
import Image from 'next/image';
import React from 'react';
import { academicContent, sportsContent, achievementImages, entrepreneurShip, sustainability, arts, communityDevelopment } from '../../../utils/AdmissionData/scholarshipData/scholarshipData';

const AcademicAchievements = () => {
  return (
    <>
    <div className=" w-full flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 container mx-auto">
          {/* Left Content */}
          <div className="lg:w-[60%] space-y-10 mt-20">
            {/* Academic Section */}
            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{academicContent.title}</h1>
              <p className="mt-2 text-gray-600">{academicContent.description}</p>
            </div>

            {/* Sports Section */}
            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{sportsContent.title}</h1>
              <p className="mt-2 text-gray-600">{sportsContent.description}</p>
              <p className="mt-2 font-bold">{sportsContent.subTitle}</p>

              <ul className="mt-4 space-y-3 text-gray-700">
                {sportsContent.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src="/rocket-icon.svg"
                      alt="Bullet Icon"
                      width={16}
                      height={16}
                      className="mt-1 rotate-[50deg]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>



            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{entrepreneurShip.title}</h1>
              <p className="mt-2 text-gray-600">{entrepreneurShip.description}</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{sustainability.title}</h1>
              <p className="mt-2 text-gray-600">{sustainability.description}</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{arts.title}</h1>
              <p className="mt-2 text-gray-600">{arts.description}</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold whitespace-pre-line">{communityDevelopment.title}</h1>
              <p className="mt-2 text-gray-600">{communityDevelopment.description}</p>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-[35%] flex flex-col items-center">
            {achievementImages.map((src, index) => {
              const isFirst = index === 0;
              const isLast = index === achievementImages.length - 1;

              return (
                <div
                  key={index}
                  className={`
                  border border-dashed border-[#3B76CB] p-10 w-full
                  ${isFirst ? 'border-t-0' : ''}
                  ${isLast ? 'border-b-0' : ''}
                `}
                >
                  <Image
                    src={src}
                    alt={`Achievement ${index + 1}`}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AcademicAchievements;
