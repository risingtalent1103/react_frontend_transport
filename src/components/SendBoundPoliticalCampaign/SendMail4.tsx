import ClaimFeeSetupStrategy from "../OutboundContentMarketing/ClaimFeeSetupStrategy";


const SendMail4 = () => {
    return(
        <>
            <div className="flex lg:flex-row flex-col">
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="flex text-color1 gap-2">
                        <span className="flex justify-center items-center gap-1 lg:text-base text-xs"><div className="w-[10px] h-[10px] rounded-[50%] bg-color1"></div> ELEVATING YOUR CAMPAIGN CALLING CENTER</span>
                    </div>
                    <h1 className="font-bold xl:text-[56px] md:text-[42px] text-2xl text-[#171718] leading-tight">
                        Political Call Center Services
                    </h1>
                    <h3 className="font-normal xl:text-base md:text-[14px] text-[12px] text-gray1 xl:w-[95%] w-[99%]">
                        The Contact Center  is a multichannel inbound contact center, which means convenience and flexibility for your customers. They choose their preferred method for getting in contact with you, including voice, text, email and messaging. In addition, it’s easy to scale services up or down depending on promotions or seasonality.
                    </h3>
                </div>
                <div className="basis-1/2 border rounded-xl lg:my-0 mt-12">
                    <ClaimFeeSetupStrategy/>
                </div>
            </div>
        </>
    )
}

export default SendMail4;