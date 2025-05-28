import Image from "next/image"
import React from "react"
import Accordion from "./Accordion"

const EligibilityCriteria = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto mb-10">
        <Image
          src="/admissions/eligibility.png"
          width={600}
          height={300}
          alt="eligibility"
        />
      </div>
      <hr className="border-t border-dashed border-gray-300" />
      <div className="container mx-auto px-4 md:px-0 py-10">
        <Accordion />
      </div>
    </div>
  )
}

export default EligibilityCriteria
