import CompaniesLeavingMoney from "@/components/CustomerdevelopmentWinback/CompaniesLeavingMoney";
import CustomerDevelopmentWeDo from "@/components/CustomerdevelopmentWinback/CustomerDevelopmentWeDo";
import IdentifyCardList from "@/components/CustomerdevelopmentWinback/IdentifyCardList";
import SendMail2 from "@/components/CustomerdevelopmentWinback/SendMail2";
import { CustomerDeveopmentConnectInfo } from "@/stack/stack";
import TestimonialsGurantee from "@/components/OutboundContentMarketing/TestimonialsGurantee";
import ContactLogo from "@/components/OutboundContentMarketing/ContactLogo";
import ClaimConnect from "@/components/OutboundContentMarketing/ClaimConnect";

const CustomerdevelopmentWinback = () => {
    return (
        <>
            <div className="container xl:mt-[70px] lg:mt-[50px] mt-[30px]">
                <SendMail2 />
            </div>
            <div className="bg-color2 py-12 sm:mt-24 mt-0">
                <div className="container">
                    <CompaniesLeavingMoney />
                </div>
            </div>
            <div className="container">
                <div className="xl:mt-[150px] lg:mt-[100px] mt-[0px]">
                    {
                        CustomerDeveopmentConnectInfo.map((item, index) => {
                            return (
                                <CustomerDevelopmentWeDo
                                    key={index}
                                    title={item.title}
                                    content1={item.content1}
                                    content2={item.content2}
                                    imgUrl={item.imgUrl}
                                    index={index}
                                    arrange={item.arrange}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-color2 py-12">
                <div className="container">
                    <IdentifyCardList />
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
            <img className=" -z-50 absolute xl:left-[600px] xl:top-[570px] lg:left-[400px] lg:top-[550px] lg:w-[410px] lg:h-[410px] hidden lg:block" src="/opacitybackground/circle3.svg"></img>

        </>
    )
}

export default CustomerdevelopmentWinback;