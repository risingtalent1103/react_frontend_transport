import DrawIcon2 from "@/components/DrawIcon2";
import { FC } from "react";

const OutboundMarketingPage: FC = () => {
    return (
        <div className="w-full">
            <div className="container">
                <div className="w-full flex flex-col items-center border-b border-[#E5E7EB] py-[50px]">
                    <div className="flex items-center mx-auto gap-4">
                        <DrawIcon2 icon="/icons/inboundservice.svg"/>
                        <h1 className="font-bold text-[#171718] text-[2rem] lg:text-5xl xl:text-[3.5rem] leading-[110%]">
                            Outbound Services
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="w-full flex flex-col items-center gap-2 text-center my-6">
                    <p className="font-semibold text-base xl:text-xl">Our Process</p>
                    <h1 className="font-bold text-[#171718] text-[2rem] lg:text-5xl xl:text-[3.5rem] leading-[110%]">
                        Outbound Services
                    </h1>
                    <p className="w-[70%] font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                        In addition to lead generation services like appointment setting and telemarketing, we work on the customer service side as well with programs like market research and outbound surveys.
                    </p>
                </div>
                {/* 1 */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[30px]  lg:gap-2 pb-[50px] lg:pb-[120px]">
                    <div className="relative w-[325px] h-[216px] my-[50px] lg:my-0">
                        <img className="z-30 w-full h-full rounded-lg" src="images/leadgeneration.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Lead Generation
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            In addition to lead generation services like appointment setting and telemarketing, we work on the customer service side as well with programs like market research and outbound surveys.
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
                        <img className="z-30 w-full h-full rounded-lg" src="images/contentmarketing.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Content Marketing Distribution
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Telemarketing allows a company to distribute content to a segmented market, based on a prospect’s or client’s specific business needs, as well as follow up with their target audience to determine whether the content is being received.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] border border-color1 rounded-full flex items-center justify-center">
                            <img className="w-[19.2px] xl:w-[32px]" src="/icons/uparrow.svg" alt="uparrow"/>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[30px] lg:gap-2 pb-[50px] lg:py-[120px] lg:border-t lg:border-[#E5E7EB]">
                    <div className="relative w-[325px] h-[216px] my-[50px] lg:my-0">
                        <img className="z-30 w-full h-full rounded-lg" src="images/customerdevelop.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Customer Development and Winback
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Despite new and updated methods of connecting to customers, the telemarketing experience brings the best results in customer retention. It is less expensive to retain a customer than to acquire a new one, so retaining customer is important for your bottom line.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px] xl:w-[100px] xl:h-[100px] border border-color1 rounded-full flex items-center justify-center">
                            <img className="w-[19.2px] xl:w-[32px]" src="/icons/uparrow.svg" alt="uparrow"/>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-[30px] lg:gap-2 pb-[50px] lg:py-[120px] lg:border-t lg:border-[#E5E7EB]">
                    <div className="relative w-[325px] h-[216px] my-[50px] lg:my-0">
                        <img className="z-30 w-full h-full rounded-lg" src="images/survey.jpg" alt="leadgeneration" />
                        <div className="-z-10 w-[95%] h-[95%] rounded-xl top-[0] left-[0%] rotate-[35deg] absolute bg-color1 opacity-10"></div>
                    </div>
                    <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col justify-center gap-2">
                        <h3 className="font-semibold text-black1 text-xl lg:text-2xl xl:text-[2rem]">
                            Surveys & Market Research
                        </h3>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            The Contact Center  offers market research that reaches out directly to your audience to understand their needs, opinions and wants through a personal (human to human) survey or questionnaire. We select the best team to conduct the survey/research based on your needs.
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
export default OutboundMarketingPage;

