import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import './Hero.css';
import 'swiper/css';



function Hero() {
    const swiperRef = useRef(null);

    const slides = [
        "/Manset/1.webp",
        "/Manset/2.webp",
        "/Manset/3.webp",
        "/Manset/4.webp"
    ]

    return (
        <div className="flex justify-center items-center md:pt-8 pt-4">

                {/*
                <div className="hidden md:flex mt-6 justify-center items-center flex-col w-full">
                    <h2 className="clamp-h2 font-black">MANŞETLER</h2>
                    <span className="block w-150 h-[2px] bg-linear-to-r from-(--primary) to-(--secondary)"/>
                </div>
                */}

                <div className="w-full relative overflow-hidden">
                    <button className='leftButton
                            absolute z-1000 rounded-[100%] w-[30px] h-[30px] md:w-[50px] md:top-[45%] top-[35%] transform-[translateY(-50%)] md:h-[50px] bg-white shadow-md flex justify-center items-center text-[12px] md:text-[22px] cursor-pointer transition duration-300 m-8
                            hover:bg-[rgb(138, 138, 138)] hover:text-white
                        '
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaChevronLeft />
                    </button>
                    <button className='rightButton
                            absolute z-1000 rounded-[100%] w-[30px] h-[30px] md:w-[50px] md:top-[45%] top-[35%] right-[0] transform-[translateY(-50%)] md:h-[50px] bg-white shadow-md flex justify-center items-center text-[12px] md:text-[22px] cursor-pointer transition duration-300 m-8
                            hover:bg-[rgb(138, 138, 138)] hover:text-white
                            '
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaChevronRight />
                    </button>

                    <div className="w-full flex items-center justify-center overflow-hidden flex-col">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            autoplay={{ delay: 15000, disableOnInteraction: false }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Autoplay]}
                            className="w-full h-full"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="w-full h-full flex justify-center items-center relative">
                                    <div className="w-full h-full flex flex-col text-white text-center justify-center items-center relative">
                                        <img src={slide} className="w-full aspect-18/9 max-w-[1400px] xl:rounded-xl object-cover" alt="slideimg" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
        </div>
    )
}

export default Hero