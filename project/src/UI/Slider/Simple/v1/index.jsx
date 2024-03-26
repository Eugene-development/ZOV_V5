'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// import { images } from '@/lib/images'

// import 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default () => {
    return (
        <section className='py-12'>
            <div className='container'>
                <Swiper
                    navigation
                    pagination={{ type: 'fraction' }}
                    modules={[Navigation, Pagination]}
                    // onSwiper={swiper => console.log(swiper)}
                    className='h-96 w-full rounded-lg'
                >

                    <SwiperSlide >
                        {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
                        <p>1</p>
                    </SwiperSlide>
                    <SwiperSlide >
                        {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
                        <p>2</p>
                    </SwiperSlide>
                    <SwiperSlide >
                        {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
                        <p>3</p>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}