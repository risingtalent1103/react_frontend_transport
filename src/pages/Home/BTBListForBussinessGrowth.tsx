import OurPortFolioSays from "@/components/BTBListForBussinessGrowth/OurPortfolioSays";
import ProspectingJustSimpler from "@/components/BTBListForBussinessGrowth/ProspectingJustSimpler";
import QuestionsAnswered from "@/components/BTBListForBussinessGrowth/QuestionsAnswered";
import SendMail3 from "@/components/BTBListForBussinessGrowth/SendMail3";
import SimplifyJourney from "@/components/BTBListForBussinessGrowth/SimplifyJourney";
import Understanding from "@/components/BTBListForBussinessGrowth/Understanding";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";

const BTBListForBussinessGrowth = () => {
    return (
        <>
            <div className="container xl:mt-[70px] lg:mt-[50px] mt-[30px] mb-24">
                <SendMail3 />
            </div>
            <div className="bg-color2 py-12">
                <div className="container">
                    <ProspectingJustSimpler />
                </div>
            </div>
            <div className="container py-12">
                <Understanding />
            </div>
            <div className="bg-color2 py-12">
                <div className="container">
                    <SimplifyJourney />
                </div>
            </div>
            <div className="container py-12 hidden lg:block">
                <OurPortFolioSays />
            </div>
            <div className="bg-color2 py-12 hidden lg:block">
                <div className="container">
                    <QuestionsAnswered />
                </div>
            </div>
            <div className="w-full relative">
                <div className="container">
                    <TestimonialsGurantee />
                    <ContactLogo />
                </div>
                <img className="absolute lg:left-[-90px] lg:top-[40%] lg:w-[180px] lg:h-[180px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                <img className="absolute lg:left-[15%] xl:left-[20%] lg:top-[50%] lg:w-[89px] lg:h-[70px]  hidden lg:block" src="/opacitybackground/shape1.svg"></img>
            </div>
            <div className="bg-color2 relative overflow-hidden">
                <ClaimConnect />
                <img className="absolute xl:left-[-180px] xl:top-0 xl:w-[410px] xl:h-[410px]  hidden xl:block" src="/opacitybackground/doublering.svg"></img>
            </div>
            <img className=" -z-50 absolute xl:left-[620px] xl:top-[580px] lg:left-[460px] lg:top-[560px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>

        </>
    )
}

export default BTBListForBussinessGrowth;