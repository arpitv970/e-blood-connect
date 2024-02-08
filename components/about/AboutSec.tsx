import React from 'react'
import AdvantageSec from './AdvantageSec'

const AboutSec = () => {
  return (
    <div className="advantage_styling">
      <section className="advantage">
        <div className="container">
          <div className="row">
            <div className="sec_detail text-center">
              <h1>
                About eBloodConnect</h1>
              <p>Welcome to eBlood Connect, where compassion meets innovation. We are dedicated to transforming the landscape of blood donation and management, ensuring a secure, efficient, and life-saving process for donors, recipients, and healthcare providers alike.
                Our journey began with a simple yet powerful idea – to leverage cutting-edge technology to bridge the gap between blood donors and those in need. This vision has fueled the development of a state-of-the-art platform that seamlessly integrates every facet of the blood donation ecosystem.

              </p>
            </div>
            <AdvantageSec />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSec
