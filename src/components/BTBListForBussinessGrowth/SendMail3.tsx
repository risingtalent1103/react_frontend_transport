import IconAndText from "../IconAndText";
import ClaimFeeSetupStrategy from "../OutboundContentMarketing/ClaimFeeSetupStrategy";

const list = [
    {
        icon:"/icons/resulteffort.svg",
        text:"Discover: Target Connections"
    },
    {
        icon:"/icons/communication.svg",
        text:"Communicate: Seamless Engagement"
    },
    {
        icon:"/icons/salesenhance.svg",
        text:"Convert: Strategic Sales"
    },
]

const SendMail3 = () => {
    return(
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="flex text-color1 gap-2">
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> DISCOVER. COMMUNICATE. CONVERT.</span>
                    </div>
                    <h1 className="font-bold xl:text-[56px] md:text-[42px] text-2xl text-[#171718] leading-tight">
                        Enhance Your Sales Pipeline and Grow Your Business with Quality B2B Lists containing 100% Verified E-mails
                    </h1>
                    <h3 className="xl:w-[80%] font-normal xl:text-base md:text-[14px] text-[12px] text-gray1">
                        Accelerate the process of identifying new business opportunities and enhance your company’s growth with greater efficiency and reduced expenses. By utilizing The Contact Center ’s B2B contact data, you can eliminate the need to invest months in compiling business lists.
                    </h3>
                    <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-between gap-[35px] w-[92%] mt-6">
                        {
                            list.map((item) => {
                                return <IconAndText key={item.text} icon={item.icon} content={item.text} className="xl:w-[288px] w-[303px] h-[57px] border border-[#F3F4F6] rounded-lg xl:mx-auto"/>
                            })
                        }
                    </div>
                </div>
                <div className="basis-1/2 border rounded-xl lg:my-0 mt-12">
                    <ClaimFeeSetupStrategy/>
                </div>
            </div>
        </>
    )
}

export default SendMail3;