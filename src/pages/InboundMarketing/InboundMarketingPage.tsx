import DrawIcon2 from "@/components/DrawIcon2";
import { FC } from "react";

const InboundMarketingPage: FC = () => {
    return (
        <div className="w-full">
            <div className="container">
                <div className="w-full flex flex-col items-center border-b border-[#E5E7EB] py-[50px]">
                    <div className="flex items-center mx-auto gap-4">
                        <DrawIcon2 icon="/icons/inboundservice.svg"/>
                        <h1 className="font-bold text-[#171718] text-[2rem] lg:text-5xl xl:text-[3.5rem] leading-[110%]">
                            Inbound Services
                        </h1>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2 text-center my-6">
                    <p className="font-semibold text-base xl:text-xl">Our Process</p>
                    <h1 className="font-bold text-[#171718] text-[2rem] lg:text-5xl xl:text-[3.5rem] leading-[110%]">
                        Inbound Solutions With You in Mind.
                    </h1>
                    <p className="w-[70%] font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                        Our inbound outsourcing services allows your business to be there for your customers 24/7/365. When customers reach out, they expect a response. Telephone call, live chat, text, and email support.
                    </p>
                </div>
                {/* 1 */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[30px]  lg:gap-2 pb-[50px] lg:pb-[120px]">
                    <div className="relative w-[325px] h-[216px] my-[50px] lg:my-0">
                        <img className="z-30 w-full h-full rounded-lg" src="images/customerservice.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Customer Service
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            The Contact Center. Inbound Contact Center Services provides the consistent, high-quality solution you need to close the gap between your company and your customers. Whether you require ongoing contact center services to equip your customer service team – we’ve got you covered.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] border border-color1 rounded-full flex items-center justify-center">
                            <img className="w-[19.2px] xl:w-[32px]" src="/icons/uparrow.svg" alt="uparrow"/>
                        </div>
                    </div>
                </div>
               
                {/* 2 */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[30px] lg:gap-2 pb-[50px] lg:py-[120px] lg:border-t lg:border-[#E5E7EB]">
                    <div className="relative w-[325px] h-[216px] my-[50px] lg:my-0">
                        <img className="z-30 w-full h-full rounded-lg" src="images/omnichannel.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Omnichannel
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            With The Contact Center. Inbound Contact Center Services, you can do more. That’s more communication with customers, more lead nurturing of prospects, more relationship-building, and up-selling. You can do this all for less than what it will cost with anyone else or in-house.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] border border-color1 rounded-full flex items-center justify-center">
                            <img className="w-[19.2px] xl:w-[32px]" src="/icons/uparrow.svg" alt="uparrow"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default InboundMarketingPage;

