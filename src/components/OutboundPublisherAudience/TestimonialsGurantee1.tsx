
import { useState, useRef, useEffect } from "react";
import ReviewCardVertical from "../OutboundContentMarketing/ReviewCardVertical";
import { testimonialInformation } from "@/stack/stack";
import uparr from "/icons/uparr.svg";
import downarr from "/icons/downarr.svg";
import uparr1 from "/icons/uparr1.svg";
import downarr1 from "/icons/downarr1.svg";

const ericInfo = {
    image: "/images/person/ERICMUENCH.png",
    name: "ERIC MUENCH",
    career: "Director of Audience Development @ Trade Press Media Group, Inc.",
    content: "The Contact Center. is my exclusive telemarketing vendor. I appreciate the total package that they provide. From scripting and set up, to reporting and campaign management, right through to delivery of the final data files, everything has been 100% reliable, professional, and on time."
}


const TestimonialsGurantee1 = () => {
    const maxScrollHeight = useRef<number>(0);
    const carousel = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    }

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current?.offsetHeight * currentIndex <= maxScrollHeight.current
        ) {
            setCurrentIndex((prevState) => prevState + 1)
        }
    }

    const isDisabled = (direction:string) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current?.offsetHeight * currentIndex >= maxScrollHeight.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollTop = carousel.current.offsetHeight * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollHeight.current = carousel.current
            ? carousel.current.scrollHeight - carousel.current.offsetHeight
            : 0;
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">
                <h3 className="font-semibold xl:text-xl md:text-xl sm:text-base text-base leading-loose hidden lg:block">Testimonials</h3>
                <h1 className="font-bold xl:text-5xl md:text-[32px] sm:text-2xl pb-10 hidden lg:block text-center">
                    <span className="text-[#171718]">We Guarantee </span>
                    <span className="text-color1">Satisfaction.</span>
                </h1>
                <div className="flex xl:flex-row flex-col">
                    <div className="basis-1/2 flex justify-center items-center">
                        <div className="xl:w-[80%] lg:w-[90%]">
                            <div className="flex xl:gap-10 lg:gap-6 sm:gap-4">
                                <img src={ericInfo.image} className="lg:w-[150px] lg:h-[150px] sm:w-[105px] sm:h-[105px]"></img>
                                <div className="flex flex-col justify-center">
                                    <p className="font-semibold lg:text-xl sm:text-base text-[#171718] leading-loose">{ericInfo.name}</p>
                                    <p className="font-normal xl:text-base lg:text-[14px] sm:text-[12px] text-gray1">{ericInfo.career}</p>
                                </div>
                            </div>
                            <div className="font-normal xl:text-base lg:text-[14px] sm:text-[12px] text-gray1 mt-12">
                                {ericInfo.content}
                            </div>
                        </div>
                    </div>
                    <h3 className="font-semibold text-base leading-loose block lg:hidden text-center pt-10">Testimonials</h3>
                    <h1 className="font-bold text-2xl pb-10 block lg:hidden text-center">
                        <span className="text-[#171718]">We Guarantee </span>
                        <span className="text-color1">Satisfaction.</span>
                    </h1>
                    <div className="basis-1/2">
                        <div className="lg:flex hidden gap-[10px] w-full justify-end mb-3">
                            <button className="w-[24px] h-[24px] flex justify-center items-center" onClick={movePrev} disabled={isDisabled('prev')}><img src={ isDisabled('prev') ? uparr1 : uparr} className="h-[21px]"></img></button>
                            <button className="w-[24px] h-[24px] flex justify-center items-center" onClick={moveNext} disabled={isDisabled('next')}><img src={ isDisabled('next') ? downarr1 : downarr} className="h-[21px]"></img></button>
                        </div>
                        <div className="carousel w-full xl:h-[480px] lg:h-[420px] sm:h-[210px] carousel-vertical" ref={carousel}>
                            {
                                testimonialInformation.map((item, index) => {
                                    return <ReviewCardVertical itemId={`item` + index} key={index} item={item} className="carousel-item rounded-box mt-2 mb-2" />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsGurantee1;