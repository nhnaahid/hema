/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick, currentSlide, totalSlides } = props;
    console.log("current slide: ", currentSlide, totalSlides);
    return (
        <div className={`${(currentSlide == 7 || currentSlide == 9 || currentSlide == 10) && "hidden"} absolute right-0 top-1/2 -translate-y-1/2 p-3 md:p-5 rounded-full bg-white text-lg md:text-xl cursor-pointer`} onClick={onClick} >
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;
    return currentSlide > 0 ? (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 md:p-5 z-10 text-lg md:text-xl cursor-pointer" onClick={onClick} >
            <FaArrowLeft />
        </div>
    ) : null;
}


const HappyBanner = () => {
    const [categories, setCategories] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    // Add window resize listener
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > 1024) {
                const total = Math.ceil(categories.length / 4);
                setTotalSlides(total);
            }
            else if (windowWidth > 768) {
                const total = Math.ceil(categories.length / 2);
                setTotalSlides(total);
            }
            else {
                const total = Math.ceil(categories.length / 1);
                setTotalSlides(total);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [categories.length, windowWidth]);


    const settings = {
        infinite: false,
        speed: 500,
        initialSlide: 0,
        slidesToShow: windowWidth > 1024 ? 4 : windowWidth > 768 ? 2 : 1,
        slidesToScroll: windowWidth > 1024 ? 4 : windowWidth > 768 ? 2 : 1,
        nextArrow: (
            <SampleNextArrow
                currentSlide={currentSlide}
                totalSlides={totalSlides} // Use calculated total slide count
            />
        ),

        prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
        afterChange: (current) => setCurrentSlide(current),
    };

    return (
        <div className='bg-[#9c1aff] flex flex-col-reverse md:flex-row items-center justify-between w-[99%] md:w-[90%] mx-auto rounded-xl mt-16 px-10 pt-10 pb-36 relative'>
            <div className='text-white w-full md:w-1/3 space-y-5 h-[400px]'>
                <h2 className='text-3xl md:text-5xl font-bold mt-5 md:mt-0'>20% off almost everything!</h2>
                <p>Today only until 23:59 20% discount on almost all items in the range. </p>
                <button className='border-2 w-3/5 rounded-lg p-3 font-bold hover:bg-white hover:text-black hover:border-white'>shop</button>
            </div>
            <figure className="w-full md:w-3/5">
                <img src="/public/images/banner/happy.webp" alt="" />
            </figure>
            <div className="slider-container w-[85%] md:w-[90%] mx-auto my-5 absolute -bottom-1/3 md:-bottom-1/2 lg:-bottom-1/3">

                <Slider {...settings} className="relative">
                    {categories.slice(1, 12).map(cat => (
                        <div key={cat.id} className="space-y-2 relative">
                            <figure className="bg-[#f6f6f6] rounded-xl overflow-hidden ml-5">
                                <img className="w-full h-full rounded-xl hover:scale-105 duration-500" src={cat.image} alt="" />
                            </figure>
                            <p className="text-center font-bold">{cat.category}</p>
                            <p className="text-center">valid till {cat.date}</p>

                            <div className="absolute bg-red-600 text-white rounded-md p-2 z-50 top-0 left-7">
                                <p className="text-2xl font-bold">{cat.discount}%</p>
                                <p className="font-bold">discount</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HappyBanner;