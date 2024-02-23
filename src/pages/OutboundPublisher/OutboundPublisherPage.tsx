import ClaimConnect1 from "@/components/InboundOmnichannel/ClaimConnect1";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import Publisher from "@/components/OutboundPublisherAudience/Publisher";
import PublisherCaseStudy from "@/components/OutboundPublisherAudience/PublisherCaseStudy";
import PublisherProjectDetails from "@/components/OutboundPublisherAudience/PublisherProjectDetails";
import TestimonialsGurantee1 from "@/components/OutboundPublisherAudience/TestimonialsGurantee1";

const OutboundPulisherPage = () => {
    return (
        <>
            <div className="w-full">
                <div className="container xl:mt-0 lg:mt-[50px] mt-10">
                    <Publisher />
                    <PublisherCaseStudy />
                    <PublisherProjectDetails />
                </div>
            </div>
            <div className="w-full relative">
                <div className="container">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10 my-10">
                        <div className="lg:col-span-5 flex flex-col gap-2">
                            <ContactLogo/>
                            <TestimonialsGurantee1/>
                            
                        </div>
                    </div>
                </div>
                <img className="absolute lg:left-[-100px] lg:top-[450px] xl:top-[500px] lg:w-[180px] lg:h-[180px]  hidden lg:block" src="/opacitybackground/circle3.svg"></img>
                <img className="absolute left-[20%] top-[300px] lg:left-[10%] xl:left-[15%] lg:top-[500px] xl:top-[570px] lg:w-[89px] lg:h-[70px] " src="/opacitybackground/shape1.svg"></img>
            </div>
            <div className="w-full relative bg-color2">
                <div className="container">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10 mt-10">
                        <div className="lg:col-span-5 flex flex-col gap-2">
                            <ClaimConnect1/>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}
export default OutboundPulisherPage;