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
        <div className={`${(currentSlide == 8 || currentSlide == 10 || currentSlide == 13) && "hidden"} absolute right-0 top-1/2 -translate-y-1/2 p-3 md:p-5 rounded-full bg-white text-lg md:text-xl cursor-pointer`} onClick={onClick} >
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


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        fetch('/categories.json')
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
                const total = Math.ceil(categories.length / 8);
                setTotalSlides(total);
            }
            else if (windowWidth > 768) {
                const total = Math.ceil(categories.length / 6);
                setTotalSlides(total);
            }
            else {
                const total = Math.ceil(categories.length / 3);
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
        slidesToShow: windowWidth > 1024 ? 8 : windowWidth > 768 ? 6 : 3,
        slidesToScroll: windowWidth > 1024 ? 8 : windowWidth > 768 ? 6 : 3,
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
        <div className="slider-container w-[85%] md:w-[90%] mx-auto mb-5 mt-7">
            <Slider {...settings} className="relative ">
                {categories.map(cat => (
                    <div key={cat.id} className="space-y-3">
                        <figure className="bg-[#f6f6f6] rounded-full w-20 md:24 xl:w-32 mx-auto overflow-hidden">
                            <img className="w-full h-full rounded-full hover:scale-110 duration-500" src={cat.image} alt="" />
                        </figure>
                        <p className="text-center font-semibold">{cat.category}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default Categories;