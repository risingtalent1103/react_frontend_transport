import { useState, useRef, useEffect } from "react";
import { testimonialInformation } from "@/stack/stack";
import ReviewCard from "./ReviewCard";


const Testimonials = () => {
    const maxScrollWidth = useRef<number>(0);
    const carousel = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const movePos = (slideNum:number) => {
        setCurrentIndex(() => slideNum);
    }

    useEffect(() => {
        
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center lg:my-16 my-5">
                <h3 className="font-semibold xl:text-xl md:text-xl sm:text-base text-base leading-loose">Testimonials</h3>
                <h1 className="font-bold xl:text-5xl md:text-4xl sm:text-2xl pb-10 text-center">
                    <span className="text-[#171718]">We Guarantee </span>
                    <span className="text-color1">Satisfaction.</span>
                </h1>
                <div className="carousel w-full" ref={carousel}>
                    {
                        testimonialInformation.map((item, index) => {
                            return <ReviewCard itemId={`item0`+index} key={item.name} item={item} className="carousel-item rounded-box mr-2 ml-2"/>
                        })
                    }
                </div>
                <div className="flex justify-center w-full py-2 gap-[10px] items-center mt-10">
                    <div onClick={() => movePos(0)} className="cursor-pointer">
                        {
                            currentIndex === 0 ? <div className={`w-5 h-5 bg-color1 rounded-[50%]`}>
                            </div> : <div className={`w-3 h-3 bg-gray-200 rounded-[50%]`}></div>
                        }
                    </div>
                    <div onClick={() => movePos(1)} className="cursor-pointer">
                        {
                            currentIndex === 1 ? <div className={`w-5 h-5 bg-color1 rounded-[50%]`}>
                            </div> : <div className={`w-3 h-3 bg-gray-200 rounded-[50%]`}></div>
                        }
                    </div>
                    <div onClick={() => movePos(2)} className="cursor-pointer">
                        {
                            currentIndex === 2 ? <div className={`w-5 h-5 bg-color1 rounded-[50%]`}>
                            </div> : <div className={`w-3 h-3 bg-gray-200 rounded-[50%]`}></div>
                        }
                    </div>
                    <div onClick={() => movePos(3)} className="cursor-pointer">
                        {
                            currentIndex === 3 ? <div className={`w-5 h-5 bg-color1 rounded-[50%]`}>
                            </div> : <div className={`w-3 h-3 bg-gray-200 rounded-[50%]`}></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;