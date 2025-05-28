import React from 'react'
import Banner from './Banner'
import YourApplication from './YourApplication'
import WhoCanApply from './WhoCanApply'
import ReadyToApply from './ReadyToApply'
import ApplicationForm from './ApplicationForm'

const index = () => {
  return (
    <div>
      <Banner/>
      <YourApplication/>
      <WhoCanApply/>
      <ReadyToApply/>
      <ApplicationForm/>
    </div>
  )
}

export default index
