import React from 'react'

const ContactPanel = () => {
  return (
    
       <div className="w-full lg:w-2/3 bg-[#0D2556] text-white mt-10 lg:mt-10 lg:p-20 p-5 space-y-8 ">
        {/* Email Us */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">EMAIL US</h3>
          <p className="text-md text-[#D7DEEB]">
            For inquiries, program details, or application guidance, drop us a
            message
          </p>
          <p className="font-semibold mt-5 text-xl">contact.ayra.com</p>
        </div>
        <hr className="border-[#A9B8D5] border-dashed" />

        {/* Call Us */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">CALL US</h3>
          <p className="text-md text-[#D7DEEB]">
            Prefer to speak with someone directly? Our admissions and support
            teams are happy to assist.
          </p>
          <p className="font-bold mt-5 text-xl">1800 102 3330</p>
        </div>
        <hr className="border-[#A9B8D5] border-dashed" />

        {/* Visit Us */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">VISIT US</h3>
          <p className="text-md text-[#D7DEEB]">
            Come explore our campus, meet faculty and students, and experience
            AYRA in person. Schedule a visit or attend one of our open house
            events
          </p>
          
        </div>
      </div>

  )
}

export default ContactPanel
