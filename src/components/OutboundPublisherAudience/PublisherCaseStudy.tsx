import { HighestRoi } from "@/stack/stack";
import NeedMakeItem from "../NeedMakeItem";

const PublisherCaseStudy = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10 my-10">
            <div className="lg:col-span-5 flex flex-col gap-2">
                <h2 className="font-bold text-2xl lg:text-[2rem] xl:text-5xl leading-[110%] text-[#171718]">
                    Publisher Case Study
                </h2>
                <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%]">
                    What have you done lately with your data to create new revenue?
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none my-6">
                    Below is a success story of one publisher who committed to help their advertisers grow their business and, in the process, generated over a 400% return on their investment (ROI). When you finish reading this report, you will likely reach a simple conclusion that you should implement a similar process to grow your business as well.
                    <br></br><br></br>
                    You can achieve similar results without spending tens of thousands of dollars or several months to build a new data system and infrastructure. With the right mindset, and the support of the sales and audience development teams, you can start immediately and expect excellent results. Publishers have to invest large amounts of money in audience development for quality data upkeep. With shrinking print revenues (down 50% in the last few years), the commitment to 100% one-year data accuracy is extremely challenging.
                    <br></br><br></br>
                    That shouldn’t stop you from making quality data a priority. We can show you a way to update and enhance your database, while at the same time providing your advertisers what they need most to grow their business (qualified leads).
                    <br></br><br></br>
                    In today’s financial environment, can you afford to hesitate to implement a strategy to sell more and, in the process, help yourself to an amazing ROI?
                </p>
                <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%]">
                    How do you achieve the highest ROI?
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                    You need to make:
                </p>
                <div className="flex flex-wrap justify-between my-6 w-full gap-3">
                    {
                        HighestRoi.map((item, index) => {
                            return (
                                <NeedMakeItem 
                                    key={index}
                                    imgUrl={item.imgUrl}
                                    title={item.title}
                                    content={item.content}
                                    className={index % 2 === 0 ? "w-[407px] md:items-start md:mr-auto md:text-left" : "w-[407px] md:items-start md:ml-auto md:text-left"}
                                />
                            )
                        })
                    }
                </div>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    <span className="font-semibold">It is very important</span> to remember that all of your clients have sales teams begging for quality leads they can sell to. Most of your clients do not have a proven system in place to find these prospects through a cold call script or targeting in marketing. Moreover, sales teams are struggling to reach their segmented market and prospects right now, and they will appreciate any help and support you can offer adding qualified actionable leads to their empty sales funnels.
                </p>
            </div>
        </div>
    )
}   
export default PublisherCaseStudy;