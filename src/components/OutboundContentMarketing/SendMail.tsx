import IconAndText from "../IconAndText";
import ClaimFeeSetupStrategy from "./ClaimFeeSetupStrategy";

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

const SendMail = () => {
    return(
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="flex text-color1 gap-2">
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> QUALITY LEADS</span>
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> BETTER DISTRIBUTION</span>
                    </div>
                    <h1 className="font-bold xl:text-[56px] md:text-[42px] text-2xl text-[#171718] leading-tight">
                        Content Marketing Distribution
                    </h1>
                    <h3 className="font-normal xl:text-base md:text-[14px] text-[12px] text-gray1">
                        Generate Quality Leads with Better Content Marketing Distribution Strategies. Unlocking New Business opportunities for Our Clients Since 1991
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

export default SendMail;