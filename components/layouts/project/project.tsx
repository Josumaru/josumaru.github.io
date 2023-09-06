"use client"
import styles from "./project.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import person from "@/assets/images/person.jpg"
import Image from "next/image"

const Project = () => {
    return (
        <div className={`${styles.project_container} w-240 h-screen`} id={"project"} data-aos={"fade-up"}>
            <div className={`text-md font-semibold py-4`}>
                <p>Recent <span className={`text-emerald-500`}>Project</span></p>
            </div>
            <Swiper
                modules={[EffectCoverflow, Pagination, Navigation]}
                effect="coverflow"
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={10}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3.4, slideShadows: true }}
                pagination={{
                    el: ".swiper_pagination",
                    clickable: true
                }}
                navigation={{
                    nextEl: ".swiper_next",
                    prevEl: ".swiper_previous",
                }}
            >
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={person} alt={"Recent Project"} />
                </SwiperSlide>

                <div className={`${styles.swiper_controller} flex items-center justify-center flex-col`}>
                    <div className={`swiper_pagination text-center py-4`}>
                        <div className={`swipper_bullet bg-gray-400 w-2 h-2 rounded-full`}></div>
                        <div className={`swipper_dynamic bg-gray-400 w-2 h-2 rounded-full`}></div>
                        <div className={`swipper_active bg-emerald-500 w-2 h-2 rounded-full`}></div>
                    </div>
                    <div className={`flex`}>
                        <div className={`${styles.swiper_previous} font-semibold flex justify-center items-center m-4 swiper_previous w-24 h-14`}>
                            <button>Prev</button>
                        </div>
                        <div className={`${styles.swiper_next} font-semibold flex justify-center items-center m-4 swiper_next w-24 h-14`}>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Project;
