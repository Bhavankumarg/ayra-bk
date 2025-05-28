import React from "react"
import AdmissionHeroBanner from "./AdmissionHeroBanner"
import Steps from "./Steps"
import EligibilityCriteria from "./EligibilityCriteria"
import AdmissionDate from "./AdmissionDate"
import InvestingInYourFuture from "./InvestingInYourFuture"

const index = () => {
  return (
    <>
      <AdmissionHeroBanner />
      <Steps />
      <AdmissionDate />
      <EligibilityCriteria />
      <InvestingInYourFuture />
    </>
  )
}

export default index
