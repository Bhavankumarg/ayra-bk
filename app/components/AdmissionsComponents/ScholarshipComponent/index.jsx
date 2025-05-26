import React from 'react'
import Banner from './Banner'
import MeritSchollership from './MeritScholarship'
import AcademicAchievements from './AcademicAchievements'
import ConditionsForScholarship from './ConditionsForScholarship'

const Index = () => {
    return (
        <div className="flex flex-col">
            <Banner />
            <MeritSchollership />
            <AcademicAchievements />
            <ConditionsForScholarship />
        </div>
    )
}

export default Index
