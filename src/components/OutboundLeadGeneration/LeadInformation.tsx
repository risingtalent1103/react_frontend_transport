import Button from "../Button";
import LeadInformationItem from "./LeadInformationItem";
import { LeadInformationData } from "@/stack/stack";

const LeadInformation = () => {
    return (
        <>
            <div className="w-full flex flex-col  text-center items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-3">
                    <span className="text-gary1 font-semibold text-xs lg:text-xl xl:text-2xl">Actionable lead</span>
                    <h1 className="font-bold text-2xl lg:text-[42px] xl:text-5xl leading-[110%]">
                        <span className="text-color1">Lead Information</span> your salespeople can act on.
                    </h1>
                </div>             
                <p className="font-regular text-sm lg:text-base leading-[120%]">
                    Prospects that are qualified to have a business need for your product/services, have identified a budget, timing for decision is short, and have purchasing authority. Since they are properly profiled and qualified, they are worth your salespeople’s time and resources for further engagement, nurturing and direct sales efforts.
                    <br></br><br></br>
                    The Contact Center. has been qualifying leads since 1991 for companies like DELL, HP, Motorola, SAP, and smaller organizations like KnowB4 and Code 42 to name a few.
                    <br></br><br></br>
                    We have proven to our customers that we can fill their sales funnel with qualified actionable leads while saving them money in the process. (cost per lead)
                </p>
                <div className="w-full mx-auto flex flex-wrap justify-between  gap-10 md:gap-8 lg:gap-4 items-center mt-10 mb-10">
                   {
                        LeadInformationData.map((item, index) => {
                            return (
                                <LeadInformationItem 
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    imgUrl={item.imgUrl}
                                    className={index % 2 ? 
                                        "md:ml-auto  ml-auto" 
                                        :"md:mr-auto md:ml-0 ml-auto"
                                    }
                                />
                            )
                        })
                   }
                </div>
                <Button content="Let's Connect"/>
               
            </div>
        </>
    )
}
export default LeadInformation;