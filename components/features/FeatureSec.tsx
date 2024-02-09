import { FEATURES } from '@/lib/constant'
import React from 'react'
import FeatureCard from './FeatureCard'
import Link from 'next/link'
import { Button } from '../ui/button'

const FeatureSec = () => {
  return (
    <div className="feature_innovation">
      <div className="feature">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <div className="featured_title" data-aos="fade-up-right" data-aos-duration="3000">
                <h3>Elevate Your Productivity with Our Innovative Features</h3>
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
              <div className="featured_subtitle" data-aos="fade-up-left" data-aos-duration="3000">
                <p>The system implements a robust user management module that provides various role-based access controls.
                  Administrators can assign different roles (e.g., blood bank staff, doctors, tability throughout the
                  system).</p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {
              FEATURES.map((feature, i) => (
                <FeatureCard
                  key={i}
                  {...feature}
                />
              ))
            }
          </div>
          <div className="view-all-featured mt-5">
            <Button>View All Features</Button>
            {/* <Link href="/" className="btn primary_btn pe_4">View All Features */}
            {/*   <span className="right_arrow_link right_arrow featured-main"></span> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSec
