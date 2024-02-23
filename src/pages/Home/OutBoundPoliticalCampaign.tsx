import SendMail4 from "@/components/SendBoundPoliticalCampaign/SendMail4";
import { OurBoundPoliticalCampaignCards } from "@/stack/stack";
import OutBoundWeDo from "@/components/OutBoundWeDo";
import ExpandVoterContact from "@/components/SendBoundPoliticalCampaign/ExpandVoterContact";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";

const OutBoundPoliticalCampaign = () => {
    return (
        <>
            <div className="container xl:mt-[70px] lg:mt-[50px] mt-[50px]">
                <SendMail4 />
            </div>
            <div className="container xl:mt-[120px] mt-[80px]">
                {
                    OurBoundPoliticalCampaignCards.map((item, index) => {
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
            <div className="bg-color2 py-12">
                <div className="container">
                    <ExpandVoterContact />
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
            <img className=" -z-50 absolute xl:left-[600px] xl:top-[600px] lg:left-[400px] lg:top-[600px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>

        </>
    )
}

export default OutBoundPoliticalCampaign;