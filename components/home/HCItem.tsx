import React from 'react'
import { IhCItem } from '@/lib/types'

import {
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HCItem = ({ title, subTitle, quote, cta, index }: IhCItem) => {
  return (
    <CarouselItem key={index}>
      <div className="c-item">
        <div className="w-full md:w-7/12 md:order-first order-last">
          <div className='item_desc'
            data-aos="fade-right"
            data-aos-duration="2000"
          >

            <h1 className='banner_title'>{title}</h1>
            <p>{subTitle}</p>
            {
              quote && <p className='banner_small_text'>“{quote}”</p>
            }
            {
              cta && <Button>{cta.title}</Button>
            }
          </div>
        </div>

        <div className="w-full md:w-7/12 md:order-first order-last">
          <figure>
            <Image
              src={'/assets/images/hero_slider_1.png'}
              alt='Slider Image'
              width={500}
              height={500}
            />
          </figure>
        </div>
      </div>
    </CarouselItem>

  )
}

export default HCItem
