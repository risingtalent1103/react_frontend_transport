import IconAndText from "../IconAndText";
import ClaimFeeSetupStrategy from "../OutboundContentMarketing/ClaimFeeSetupStrategy";

const list = [
    {
        icon:"/icons/costsaving.svg",
        text:"Cost-Efficient Support"
    },
    {
        icon:"/icons/technicaladvance.svg",
        text:"Loyal Customer Care"
    },
    {
        icon:"/icons/proficiency.svg",
        text:"Flexible Contracts"
    },
    {
        icon:"/icons/scalableoperation.svg",
        text:"Scalable Operations"
    },
    {
        icon:"/icons/corefocus.svg",
        text:"Core Focus"
    }
]

const SendMail5 = () => {
    return(
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="flex text-color1 gap-2">
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> A SEAMLESS EXPANSION OF YOUR INTERNAL TEAM</span>
                    </div>
                    <h1 className="font-bold xl:text-[56px] md:text-[42px] text-2xl text-[#171718] leading-tight">
                        Customer Service Outsourcing
                    </h1>
                    <h3 className="lg:w-[80%] font-normal xl:text-base md:text-[14px] text-[12px] text-gray1">
                        The Contact Center  creates tailored teams of outstanding customer service experts available around the clock who are proficient using not only phone communications, but also e-mail, chat, text and digital and social media channels.
                    </h3>
                    <div className="flex flex-wrap xl:justify-center justify-start gap-[30px] w-[90%] mt-6">
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

export default SendMail5;