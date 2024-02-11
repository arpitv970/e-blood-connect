import React from 'react'
import HeroSec from './HeroSec'
import AboutSec from '../about/AboutSec'
import FeatureSec from '../features/FeatureSec'
import FindBloodBag from '../blood-banks/FindBloodBag'
import UpComingCamps from '../blood-camps/UpComingCamps'

const HomePage = () => {
  return (
    <>
      <HeroSec />
      <AboutSec />
      <FeatureSec />
      <FindBloodBag />
      <UpComingCamps />
    </>
  )
}

export default HomePage
