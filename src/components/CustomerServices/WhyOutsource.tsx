import { CostEffectiveData, WhyOutsourceData } from "@/stack/stack";
import { FC } from "react";
import NeedMakeItem from "../NeedMakeItem";
import Button from "../Button";

const WhyOutsource: FC = () => {
    return (
        <>
            <div className="w-full text-center mt-12">
                <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%]">
                    Why should I outsource my customer service?
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    Outsourcing your customer service can provide numerous significant benefits for your business, including: 
                </p>
                <div className="flex flex-wrap justify-center my-6 w-full gap-8">
                        {
                            WhyOutsourceData.map((item, index) => {
                                return (
                                    <NeedMakeItem 
                                        key={index}
                                        imgUrl={item.imgUrl}
                                        title={item.title}
                                        content={item.content}
                                        className="w-full lg:w-[31%] xl:w-[23%]"
                                    />
                                )
                            })
                        }
                </div>
                <Button className="mx-auto mt-4" content="Let's Connect"/>
            </div>
            <div className="w-full text-center mt-4">
                <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%]">
                    Is it cost effective to outsource my customer service?
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    Reducing customer service costs without compromising customer satisfaction requires a strategic approach that prioritizes efficiency and effectiveness. Here are some effective strategies to consider for lowering your customer service costs:
                </p>
                <div className="flex flex-wrap justify-center my-6 w-full gap-8">
                        {
                            CostEffectiveData.map((item, index) => {
                                return (
                                    <NeedMakeItem 
                                        key={index}
                                        imgUrl={item.imgUrl}
                                        title={item.title}
                                        content={item.content}
                                        className="w-full lg:w-[31%] xl:w-[23%]"
                                    />
                                )
                            })
                        }
                </div>
                <Button className="mx-auto mt-4" content="Let's Connect"/>
            </div>
        </>

    )
}
export default WhyOutsource;