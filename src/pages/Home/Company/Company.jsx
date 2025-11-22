import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import all images
import amazon from "../../../assets/bands/amazon.png";
import brainstation from "../../../assets/bands/brainstation.png";
import codechef from "../../../assets/bands/codechef.png";
import codeforce from "../../../assets/bands/codeforce.png";
import leetcode from "../../../assets/bands/leetcode.png";
import star from "../../../assets/bands/star.png";
import samsung from "../../../assets/bands/samsung.png";
import learnathon from "../../../assets/bands/learnathon.png";
import moonstar from "../../../assets/bands/moonstar.png";
import microsoft from "../../../assets/bands/microsoft.png";
import Google from "../../../assets/bands/google.png";
import Grameenphone from "../../../assets/bands/Grameenphone.png";

// All logos
const brandLogos = [
    amazon,
    brainstation,
    codechef,
    codeforce,
    leetcode,
    star,
    Grameenphone,
    Google,
    learnathon,
    leetcode,
    microsoft,
    moonstar,
    samsung,
];

const Company = () => {
    return (
        <div className="py-12">

            {/* ---------- TITLE + DESCRIPTION ---------- */}
            <div className="text-center mb-8">

                <h2 className="text-3xl font-bold text-gray-800">
                    Top Global Tech Companies
                </h2>

                <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                    Our tech team members are preparing to contribute their skills and expertise to these leading global companies.
                </p>

            </div>
            <style>
                {`.brand-logo {width: 90px; height: 90px; object-fit: contain; display: block; margin: auto; transition: 0.3s ease;}}
                  .brand-logo:hover {
                   transform: scale(1.1);} */
                `}
            </style>

            <div className="swiper-container-custom">
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    grabCursor={true}
                    spaceBetween={40}
                    speed={1500}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0, // continuous movement
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                >
                    {brandLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-5 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r
                             hover:from-sky-100 hover:to-purple-100 dark:hover:from-sky-500 dark:hover:to-purple-600 hover:text-black">
                                <img src={logo} className="w-20 h-20 object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Company;
