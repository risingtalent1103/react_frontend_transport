import OneStopContact from "@/components/Hompage/OneStopContact";
import Testimonials from "@/components/Hompage/Testimonials";

import HowWedo from "@/components/HowWeDo";

import { HowWoDoData } from "@/stack/stack";
import Button from "@/components/Button";

const HomePage = () => {
    return (
        <>
            <div className="w-full">
                <div className="container xl:mt-[50.5px] lg:mt-[50px] mt-5">
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <div className="w-full lg:relative">
                            <img className="w-full h-full" src="/images/banner.jpg" alt="banner" />
                            <div className="h-full static lg:absolute lg:top-0 lg:left-0 flex flex-col gap-3 lg:gap-4 lg:pl-[8%] lg:w-[70%] xl:w-[65%] justify-center ">
                                <h2 className="font-bold text-black lg:text-white text-[1.5rem] lg:text-[3rem]: xl:text-[3.5rem]">
                                    Your Growth Catalyst in Inbound and Outbound Excellence.
                                </h2>
                                <p className="font-normal lg:font-medium text-gray1 lg:text-white text-sm xl:text-base mb-3">With over three decades of proven success, we specialize in tailored solutions that elevate your sales, enhance brand quality, and secure increased revenue. Count on us for unwavering authority and reliability, guiding your business towards unparalleled success.</p>
                                <Button content="Get Start" />
                            </div>
                        </div>
                    </div>
                    <OneStopContact />
                    <div className="font-semibold lg:text-xl text-base flex justify-center text-gray1">
                        How We Do It
                    </div>
                    <div className="xl:w-[75%] lg:w-[90%] mx-auto font-bold xl:text-5xl lg:text-[36px] text-2xl justify-center text-center">
                        <span className="text-[#171718]">Generating </span>
                        <span className="text-color1">Actionable Leads</span>
                        <span className="text-[#171718]"> and unlocking opportunities for your brand.</span>
                    </div>
                    {
                        HowWoDoData.map((item, index) => {
                            return (
                                <HowWedo
                                    key={index}
                                    idNum={index}
                                    title={item.title}
                                    content={item.content}
                                    details={item.details}
                                    imgUrl={item.imgUrl}
                                    arrange={item.arrange}
                                />
                            )
                        })
                    }
                    <Testimonials />
                </div>
                <img className="absolute xl:left-[-150px] xl:top-[980px] lg:left-[-20px] lg:top-[1000px] xl:w-[488px] xl:h-[406px] lg:w-[384px] lg:h-[319px] hidden lg:block" src="/opacitybackground/twocodes.svg"></img>
                <img className="absolute xl:left-[-170px] xl:top-[1630px] lg:left-[-100px] lg:top-[1550px] xl:w-[465px] xl:h-[465px] lg:w-[299px] lg:h-[299px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                <img className="absolute xl:right-[-150px] xl:top-[3830px] lg:right-[-120px] lg:top-[4000px] xl:w-[465px] xl:h-[465px] lg:w-[299px] lg:h-[299px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                <img className="absolute xl:right-[-150px] xl:top-[1280px] lg:right-[-150px] lg:top-[1120px] w-[488px] h-[406px] hidden lg:block" src="/opacitybackground/righttwocodes.svg"></img>
            </div>
        </>
    )
}
export default HomePage;