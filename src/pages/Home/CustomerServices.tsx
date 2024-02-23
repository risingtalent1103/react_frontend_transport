import SendMail5 from "@/components/CustomerServices/SendMail5";
import WellVersedCustomerExperience from "@/components/CustomerServices/WellVersedCustomerExperience";
import WhyOutsource from "@/components/CustomerServices/WhyOutsource";
import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";

const CustomerServices = () => {
    return (
        <>
            <div className="container xl:mt-[70px] lg:mt-[50px] mt-[30px] mb-24">
                <SendMail5 />
            </div>
            <div className="bg-color2 py-12">
                <div className="container">
                    <WellVersedCustomerExperience />
                </div>
            </div>
            <div className="container">
                <WhyOutsource />
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
            <img className=" -z-50 absolute xl:left-[600px] xl:top-[580px] lg:left-[400px] lg:top-[560px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>
        </>
    )
}

export default CustomerServices;