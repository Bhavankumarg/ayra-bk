import React from "react"
import CampusHeroBanner from "./CampusHeroBanner"
import FutureReadyLearning from "./FutureReadyLearning"
import DesignedForCommunity from "./DesignedForCommunity"
import SustainabilitySection from "./Sustainability"
import Explore from "./Explore"
import Video from "./Video"

const index = () => {
  return (
    <>
      <CampusHeroBanner />
      <FutureReadyLearning />
      <DesignedForCommunity />
      <SustainabilitySection />
      <Explore />
      <Video />
    </>
  )
}

export default index
