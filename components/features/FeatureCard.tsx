import { IFeatureCard } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeatureCard = ({ Icon, IconHover, title, desc, url }: IFeatureCard) => {

  return (
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 mt-5 mb-4" >
      <div className="featured_one " data-aos="flip-left" data-aos-duration="2000">
        <div className="icon">
          <Image
            src={Icon}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <div className="icon-hover">
          <Image
            src={IconHover}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <h4>{title}</h4>
        <p>
          {desc}
        </p>
        <Link href={url} className="light_shade_link">Read more</Link>
      </div>
    </div >
  )
}

export default FeatureCard
