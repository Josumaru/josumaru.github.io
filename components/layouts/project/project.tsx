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
    const pagination = {
        clickable: true,
        renderBullet: function(classname) {
            return "<div className={`" + classname + " bg-red-500 h-2 w-2`}></div>"
        }
    }
    
    return (
        <div className={`${styles.project_container} w-240 h-screen`} id={"project"}>
            <div className={`text-md font-semibold py-4`}>
                <p>Recent <span className={`text-emerald-500`}>Project</span></p>
            </div>
            <Swiper
                modules={[EffectCoverflow, Pagination, Navigation]}
                effect="coverflow"
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={10}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3.5, slideShadows: true }}
                // pagination={{
                //     el: ".swiper_pagination",
                //     clickable: true
                // }}
                pagination={pagination}
                navigation={{
                    nextEl: ".swiper_next",
                    prevEl: ".swiper_previous",
                }}
                // style={{
                //     '--swiper-pagination-color': '#fff',
                // }}
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

                <div className={`${styles.swiper_controller} items-center justify-center flex-col`}>
                    <div className={`flex`}>
                        <div className={`swiper_previous`}>
                            <button>Prev</button>
                        </div>
                        <div className={`swiper_next`}>
                            <button>Next</button>
                        </div>
                    </div>
                    <div className={`swiper_pagination`}>
                        <div className={`swipper_bullet bg-gray-400 w-2 h-2 rounded-full`}></div>
                        <div className={`swipper_dynamic bg-gray-400 w-2 h-2 rounded-full`}></div>
                        <div className={`swipper_active bg-emerald-500 w-2 h-2 rounded-full`}></div>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Project;