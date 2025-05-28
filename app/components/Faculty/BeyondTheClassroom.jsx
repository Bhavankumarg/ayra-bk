import Image from "next/image"

const BeyondTheClassroom = () => {
  const highlights = [
    "Capstone projects and research",
    "Career mentoring and domain insights",
    "Startups and innovation labs",
    "Conferences, competitions, and fieldwork",
    "Internships and industry collaboration",
  ]

  return (
    <div className="border-b border-dashed border-gray-300 mb-5">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 container mx-auto">
        {/* Center Vertical Dashed Border */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-dashed-border" />

        {/* Description */}
        <div className="pr-6 md:pr-12 space-y-5 text-[#002561] text-base md:text-lg">
          <h2 className="text-2xl text-black font-extrabold leading-tight">
            AYRA faculty don’t disappear after lectures—they stay engaged,
            offering guidance on:
          </h2>
          <ul className="mt-6 space-y-4 text-sm md:text-base text-black">
            {highlights.map((text, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                <Image
                  src="/rocket-icon.svg"
                  width={20}
                  height={16}
                  className="w-5 h-4 rotate-45 mt-1.5"
                  alt="rocket-logo"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-xl text-black font-extrabold leading-tight">
            They are sounding boards, accountability partners, and trusted
            guides throughout your time at AYRA.
          </h2>
        </div>

        <div className="pl-6 md:pl-12">
          {/* Title Left */}
          <Image
            src="/faculty/beyond-the-classroom.png"
            width={500}
            height={300}
            alt="faculty highlights"
            className="object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default BeyondTheClassroom
