import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import SendMail from "@/components/OutboundContentMarketing/SendMail";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";
import ContentMarketing from "@/components/OutboundContentMarketing/ContentMarketing";
import OutBoundWeDo from "@/components/OutBoundWeDo";
import { OutBoundWeDoData } from "@/stack/stack";


const OutboundContentMarketing = () => {
    return (
        <>
            <div className="w-full">
                <div className="container xl:mt-[70px] lg:mt-[50px] mt-[30px]">
                    <SendMail />
                    <div className="xl:mt-[150px] lg:mt-[100px] mt-[0px]">
                        {
                            OutBoundWeDoData.map((item, index) => {
                                return (
                                    <OutBoundWeDo
                                        key={index}
                                        title={item.title}
                                        content1={item.content1}
                                        content2={item.content2}
                                        imgUrl={item.imgUrl}
                                        arrange={item.arrange}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bg-color2 py-3 xl:mt-[100px] lg:mt-[0px] relative overflow-hidden">
                    <div className="container">
                        <ContentMarketing />
                    </div>
                    <img className="absolute lg:left-[0px] lg:bottom-[-110px] lg:w-[223px] lg:h-[223px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                </div>
                <div className="w-full relative">
                    <div className="container">
                        <TestimonialsGurantee/>
                        <ContactLogo/>
                    </div>
                    <img className="absolute lg:left-[-90px] lg:top-[40%] lg:w-[180px] lg:h-[180px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                    <img className="absolute lg:left-[15%] xl:left-[20%] lg:top-[50%] lg:w-[89px] lg:h-[70px]  hidden lg:block" src="/opacitybackground/shape1.svg"></img>
                </div>
                <div className="bg-color2 relative overflow-hidden">
                    <ClaimConnect/>
                    <img className="absolute xl:left-[-180px] xl:top-0 xl:w-[410px] xl:h-[410px]  hidden xl:block" src="/opacitybackground/doublering.svg"></img>
                </div>
                <img className=" -z-50 absolute xl:left-[-70px] xl:top-[251px] lg:left-[-100px] lg:top-[50px] xl:w-[223px] xl:h-[223px] lg:w-[299px] lg:h-[299px] hidden xl:block" src="/opacitybackground/circle3.svg"></img>
                <img className=" -z-50 absolute xl:right-[-50px] xl:top-[125px] lg:right-[-120px] lg:top-[40px] xl:w-[223px] xl:h-[223px] lg:w-[299px] lg:h-[299px] hidden xl:block" src="/opacitybackground/circle3.svg"></img>
                <img className=" -z-50 absolute xl:left-[600px] xl:top-[600px] lg:left-[500px] lg:top-[600px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>
            </div>
        </>
    )
}

export default OutboundContentMarketing;