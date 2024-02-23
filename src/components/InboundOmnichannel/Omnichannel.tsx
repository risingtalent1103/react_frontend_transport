import SendMail from "../SmallSendMail";
import NeedMakeItem from "../NeedMakeItem";
import { OmnichannelData } from "@/stack/stack";

const Omnichannel = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10">
            <div className="lg:col-span-5 flex flex-col gap-4">
                <h2 className="font-bold text-2xl lg:text-[2rem] xl:text-5xl leading-[110%] text-[#171718]">
                    Omnichannel
                </h2>
                <h3 className="font-semibold text-gray1 text-base lg:text-xl xl:text-2xl leading-[110%]">
                    What have you done lately with your data to create new revenue?
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    You have launched an omnichannel strategy, and you know it is just a matter of time before the calls start flooding your company. With The Contact Center. Inbound Contact Center Services, you can do more. That’s more communication with customers, more lead nurturing of prospects, more relationship-building and up-selling. You can do this all for less than what it may cost to handle in-house or with many other U.S. call center companies. When you partner with The Contact Center., you will save resources on phones, computers, software, office equipment and even the need to hire additional staff.
                    <br></br><br></br>
                    From chat to email and social media, The Contact Center. Inbound Contact Center Services allows you to professionally manage the flood of inquiries possible when your target market responds to an omnichannel strategy.
                </p>
                <div className="flex flex-wrap justify-between my-6 w-full gap-3">
                    {
                        OmnichannelData.map((item, index) => {
                            return (
                                <NeedMakeItem 
                                    key={index}
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    content={item.content}
                                    className="w-full lg:w-[47%]"
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full lg:col-span-3">
                <SendMail />
            </div>
        </div>
    )
}
export default Omnichannel;