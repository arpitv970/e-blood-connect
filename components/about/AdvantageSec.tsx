import Image from 'next/image'
import React from 'react'

const AdvantageSec = () => {
  return (
    <div className="advantage_carousal">
      <div className="flex justify-between items-center w-[100%] mx-auto p-5">
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <div className="item_dec choose_us p-5">
            <h1 className="banner_title">
              Why Choose Us
            </h1>
            <p>Our cutting-edge technology transforms the way blood requests are fulfilled, ensuring that patients receive the vital care they deserve</p>
            {/* // <!-- <p className="banner_small_text caption_top">"EHR Logic is a highly promising HealthTech software solution provider specializing in delivering interoperability solutions for the healthcare industry in India. Our primary focus is on ensuring seamless integration within the ABDM ecosystem while streamlining the compliance process.</p> --> */}
            <ul className='pl-5'>
              <li>
                <h5>Redefining Effectiveness:</h5>
                <p className="m-0">We have redesigned the blood management procedure, minimizing delays and manual errors to expedite response times.</p>
              </li>
              <li>
                <h5>Instantaneous Communication:</h5>
                <p className="m-0">Our system ensures all involved parties stay informed through immediate notifications, enabling prompt decision-making.</p>
              </li>
              <li>
                <h5>
                  Peerless Precision:</h5>
                <p className="m-0">
                  Utilizing automation reduces the potential for human errors, enhancing both patient outcomes and operational workflows.</p>
              </li>
              <li>
                <h5>Clarity and Responsibility:</h5>
                <p className="m-0">
                  Maintaining logs of activities and tracking history fosters a culture of accountability and professionalism.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <figure>
            <Image src="/assets/images/blood-bank.svg"
              alt="bloodconnect software"
              className="img-fluid"
              width={600}
              height={600}
            />
          </figure>
        </div>

      </div>

    </div>
  )
}

export default AdvantageSec
