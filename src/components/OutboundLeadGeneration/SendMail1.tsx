import IconAndText from "../IconAndText";
import ClaimFeeSetupStrategy from "../OutboundContentMarketing/ClaimFeeSetupStrategy";

const list = [
    {
        icon:"/icons/resulteffort.svg",
        text:"Results over efforts"
    },
    {
        icon:"/icons/salesboost.svg",
        text:"20% Sales Boost"
    },
    {
        icon:"/icons/marketsaving.svg",
        text:"50% Marketing Savings"
    },
    {
        icon:"/icons/salesenhance.svg",
        text:"30% Sales Enhancement"
    },
]

const SendMail1 = () => {
    return(
        <>
            <div className="flex lg:flex-row flex-col ">
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="flex text-color1 gap-2">
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> MILLIONS OF QUALIFIED ACTIONABLE LEADS SINCE 1991</span>
                    </div>
                    <h1 className="font-bold xl:text-[56px] md:text-[42px] text-2xl text-[#171718] leading-tight">
                        Generating targeted leads and unlocking opportunities for your brand.
                    </h1>
                    <h3 className="font-normal xl:text-base md:text-[14px] text-[12px] text-gray1">
                        Working with The Contact Center  professionals with vast lead generation experience also makes sense.Our goal is simple – Integrate with our client’s sales and marketing effort to become a new profit center. We do everything to deliver the highest possible ROI.
                    </h3>
                    <div className="flex flex-wrap gap-5 mt-6">
                        {
                            list.map((item) => {
                                return <IconAndText key={item.text} icon={item.icon} content={item.text} className="xl:w-[288px] w-[303px] h-[57px] border border-[#F3F4F6] rounded-lg"/>
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

export default SendMail1;