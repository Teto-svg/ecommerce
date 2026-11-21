"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

interface slide{
    src:string,
    label:string
}

interface CommonSlideProps{
    slides:slide[],
    variant:'main' | 'category',
    swiperOptions:SwiperOptions
}


export default function CommonSlider({slides,variant,swiperOptions}:CommonSlideProps) {
  return (
    <>
      <Swiper  {...swiperOptions}  pagination={{clickable:true,

    bulletClass:"swiper-pagination-bullet !size-4 !border-2 border-green-800",
    bulletActiveClass:"swiper-pagination-bullet-active !bg-green-500"
   }} modules={[Pagination]} className="mySwiper h-100">
      {slides.map((slide)=>{
        return <SwiperSlide>
          <Image src={slide.src} className={`max-h-100  ${variant == 'category' ? 'h-60' : 'h-100'}`} width={1920} height={300} alt='img'/>
          {variant == 'category' ? <h2>{slide.label}</h2> : ''}
        </SwiperSlide>
      })}
    </Swiper>  
    </>
  )
}
