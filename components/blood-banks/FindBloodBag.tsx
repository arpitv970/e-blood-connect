import React from 'react'
import FindBloodForm from './FindBloodForm'

const FindBloodBag = () => {
  return (
    <div className="blood-resource mb-5" data-aos="zoom-out-up" data-aos-duration="1000">
      <div className="container">
        <div className="blood-resource-form-fields">
          <div className="title">
            <h4>Find Nearby Blood Resources</h4>
          </div>
          <FindBloodForm />
        </div>
      </div>
    </div >
  )
}

export default FindBloodBag
