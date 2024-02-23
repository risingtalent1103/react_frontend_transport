import { ContentMarketingData } from "@/stack/stack";
import ContentMarketingItem from "./ContentMarketingItem";

const ContentMarketing = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
                <div className="w-full flex-1 flex flex-col  text-center lg:text-left justify-center gap-4">
                    <h1 className="font-bold text-2xl lg:text-[42px] xl:text-5xl leading-[110%]">
                        Lower your <span className="text-color1">content marketing</span> spend by As Much As 50%
                    </h1>
                    <p className="font-semibold text-base lg:text-xl xl:text-2xl leading-[110%]">
                        Generate Quality Leads with Better Content Marketing Distribution Strategies.
                    </p>
                    <p className="font-normal text-xs lg:text-sm leading-[120%]">
                        We ensure that your content is delivered and received by your target audience. Using our technology we can continue to track these people “digital behavior” to asses their degree of interest in your products/services. Moreover, we can invite the potential customer to ask questions or take action that leads to a faster sale. During the conversation, our representatives can gather critical information about the potential customer’s interest in your company and the likelihood that they will convert to a paying client.
                    </p>
                </div>
                <div className="w-full flex-1 flex flex-wrap justify-center gap-4 items-center">
                   {
                        ContentMarketingData.map((item, index) => {
                            return (
                                <ContentMarketingItem 
                                    key={index}
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    className={index % 2 ? 
                                        "ml-auto" 
                                        : "mr-auto"
                                    }
                                />
                            )
                        })
                   }
                </div>

            </div>
        </>
    )
}
export default ContentMarketing; 