import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css/effect-coverflow';
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
        <div className="flex justify-center items-center">
            <div className="w-[100%] md:w-[80%] max-w[1400px]">

                <div className="hidden md:flex mt-6 justify-center items-center flex-col w-full">
                    <h2 className="clamp-h2 font-black">MANŞETLER</h2>
                    <span className="block w-150 h-[2px] bg-linear-to-r from-(--primary) to-(--secondary)"/>
                </div>

                <div className="w-full md:h-[70vh] sm:h-[50vh] h-auto relative overflow-hidden">
                    <button className='leftButton
                            absolute z-1000 rounded-[100%] w-[50px] top-[45%] transform-[translateY(-50%)] h-[50px] bg-white shadow-md flex justify-center items-center text-[22px] cursor-pointer transition duration-300 m-8
                            hover:bg-[rgb(138, 138, 138)] hover:text-white
                        '
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <FaChevronLeft />
                    </button>
                    <button className='rightButton
                            absolute z-1000 rounded-[100%] w-[50px] top-[45%] right-[0] transform-[translateY(-50%)] h-[50px] bg-white shadow-md flex justify-center items-center text-[22px] cursor-pointer transition duration-300 m-8
                            hover:bg-[rgb(138, 138, 138)] hover:text-white
                            '
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <FaChevronRight />
                    </button>

                    <div className="w-full md:h-[70vh] sm:h-[50vh] h-auto  flex items-center justify-center overflow-hidden flex-col">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            autoplay={{ delay: 15000, disableOnInteraction: false }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 300,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Autoplay, EffectCoverflow]}
                            className="w-full h-full"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="w-full h-full flex justify-center items-center relative">
                                    {({ isActive }) => (
                                        <div className="w-full h-full flex flex-col text-white text-center justify-center items-center relative ">
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                animate={{ scale: isActive ? 1 : 1 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <img src={slide} className="md:h-[64vh] sm:h-[44vh] h-auto object-contain" alt="slideimg" />
                                            </motion.div>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero