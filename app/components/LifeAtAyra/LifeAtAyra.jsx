import Image from "next/image"

const lifeAtAyraData = [
  {
    title: "A GREEN CAMPUS <br /> FOR A CLEAR MIND",
    description:
      "Surrounded by lush, open spaces, our campus provides the perfect setting for both focus and relaxation. Take a break in the courtyards, walk along tree-lined pathways, or find inspiration in the natural surroundings—because great ideas come from spaces that let you breathe.",
    image: "/life-at-ayra/student-life/img01.png",
  },
  {
    title: "THE LIBRARY – <br /> A SPACE FOR DISCOVERY",
    description:
      "Explore an extensive collection of books, research materials, and digital resources in a library designed for both quiet study and collaboration.",
    image: "/life-at-ayra/student-life/img02.png",
  },
  {
    title: "STATE-OF-THE-ART GYM <br /> & WELLNESS SPACES",
    description:
      "A fully equipped gym and fitness facilities to help you stay active, recharge, and build resilience, because well-being is key to success.",
    image: "/life-at-ayra/student-life/img03.png",
  },
  {
    title: "STUDENT CLUBS – <br /> FIND YOUR PEOPLE",
    description:
      "What excites you outside of academics? At AYRA, there’s a club for that. Whether you’re passionate about arts, business, technology, social impact, or adventure, student-run clubs give you the platform to learn, lead, and create.",
    image: "/life-at-ayra/student-life/img04.png",
  },
]

const LifeAtAyra = () => {
  return (
    <>
      {lifeAtAyraData.map((item, idx) => {
        const isEven = idx % 2 === 0
        return (
          <div className="" key={idx}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 max-w-7xl mx-auto">
              {/* Center Vertical Dashed Border */}
              <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-dashed-border" />

              {/* Left Side */}
              {isEven ? (
                <>
                  {/* Title Left */}
                  <div className="pr-6 md:pr-12">
                    <h2
                      className="text-4xl md:text-5xl text-[#002561] font-extrabold leading-tight text-center md:text-left"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                  {/* Description Right */}
                  <div className="pl-6 md:pl-12 space-y-5 text-[#002561] text-base md:text-lg">
                    <div className="flex items-center gap-3">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Description Left */}
                  <div className="pr-6 md:pr-12 space-y-5 text-[#002561] text-base md:text-lg">
                    <div className="flex items-center gap-3">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  {/* Title Right */}
                  <div className="pl-6 md:pl-12">
                    <h2
                      className="text-4xl md:text-5xl text-[#002561] font-extrabold leading-tight text-center md:text-right"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="w-full max-w-7xl mx-auto">
              <Image
                src={item.image}
                alt="student life"
                width={1786}
                height={640}
                className="w-full h-auto object-cover"
                priority={idx === 0}
              />
            </div>
            <hr className="border-t border-dashed border-gray-300 mt-10" />
          </div>
        )
      })}
    </>
  )
}

export default LifeAtAyra
