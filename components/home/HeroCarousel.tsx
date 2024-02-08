import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import HCItem from './HCItem'
import { CAROUSEL_ITEM } from '@/lib/constant'

const HeroCarousel = () => {
  return (
    <Carousel className="hero_carousel">
      <CarouselContent>
        {CAROUSEL_ITEM.map((item, index) => (
          <HCItem
            title={item.title}
            subTitle={item.subTitle}
            quote={item.quote}
            cta={item.cta}
            index={index}
            key={index}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default HeroCarousel
