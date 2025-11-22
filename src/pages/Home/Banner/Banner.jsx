import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner1.jpg'
import bannerImg2 from '../../../assets/banner2.jpg'
import bannerImg3 from '../../../assets/banner3.jpg'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div className="relative h-[500px] pt-10">
                <img src={bannerImg1} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">Welcome to TechPortal</h1>
                    <p className="text-lg mt-2">Your Gateway to Future IT Trends</p>
                </div>
            </div>
            <div className="relative h-[500px]">
                <img src={bannerImg2} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">Learn Modern Technologies</h1>
                    <p className="text-lg mt-2">Programming • AI • Cybersecurity • Web Dev</p>
                </div>
            </div>
            <div className="relative h-[500px]">
                <img src={bannerImg3} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">Shape Your Future Career</h1>
                    <p className="text-lg mt-2">Start Learning Today</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;