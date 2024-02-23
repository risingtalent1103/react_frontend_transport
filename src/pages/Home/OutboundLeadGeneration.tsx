import LeadInformation from "@/components/OutboundLeadGeneration/LeadInformation";
import CostAnalysis from "@/components/OutboundLeadGeneration/CostAnalysis";
import SendMail1 from "@/components/OutboundLeadGeneration/SendMail1";
import SayGoodBye from "@/components/OutboundLeadGeneration/SayGoodBye";
import OutBoundWeDo from "@/components/OutBoundWeDo";
import { LeadGenerationData } from "@/stack/stack";
import TargetingOpportunities from "@/components/OutboundLeadGeneration/TargetingOpportunities";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";

const OutboundLeadGeneration = () => {
    return(
        <>
            <div className="w-full relative">
                <div className="container xl:mt-[70px] lg:mt-[80px] mt-[30px]">
                    <SendMail1/>
                    <SayGoodBye/>
                </div>
                <img className="absolute lg:right-[-100px] lg:bottom-0 lg:w-[180px] lg:h-[180px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
            </div>
            <div className="w-full flex lg:flex-col flex-col-reverse">
                <div className="container xl:mt-[120px] lg:mt-[80px] mt-[0px]">
                {
                    LeadGenerationData.map((item, index) => {
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
                <div className="w-full lg:bg-[white] bg-color2 mt-10 mb-20 lg:mb-0 relative">
                    <TargetingOpportunities/>
                    <img className="absolute lg:right-[-240px] lg:bottom-0 lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/doublering.svg"></img>
                </div>
            </div>
            <div className="bg-color2 py-12 relative">
                <div className="container">
                    <LeadInformation />
                </div>
                <img className="absolute z-10 lg:right-[-100px] lg:bottom-[10%] lg:w-[180px] lg:h-[180px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
            </div>
            <div className="container py-10">
                <CostAnalysis />
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
            <img className=" -z-50 absolute xl:left-[650px] xl:top-[600px] lg:left-[400px] lg:top-[600px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>

        </>
    )
}

export default OutboundLeadGeneration;