import Button from "../Button";
import DrawIcon from "../Hompage/DrawIcon";
import { IdentifyCustomerInfo } from "@/stack/stack";

const IdentifyCardList = () => {
    return (
        <>
            <div className="w-full flex flex-col  text-center items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-3 lg:mb-5">
                    <h1 className="font-bold text-2xl lg:text-[42px] xl:text-5xl leading-[110%]">
                        Identify the <span className="text-color1">customers</span> ready to buy now
                    </h1>
                </div>             
                <Button content="Let's connect"/>
                <div className="w-[95%] lg:mt-10">
                    <p className="font-semibold xl:text-2xl lg:text-xl text-base text-gray1 leading-tight lg:pb-2">We Provide Customer Service that Never Sleeps.</p>
                    <p className="font-normal text-base lg:text-xl text-[#466E79] leading-tight">Around the clock service built with your business in mind.</p>
                </div>
                <div className="w-full mx-auto flex flex-wrap  gap-10 md:gap-8 lg:gap-[80px] items-center mt-10 mb-10">
                   {
                        IdentifyCustomerInfo.map((item, index) => {
                            return (index % 2 ? <div key={index} className={`flex w-full xl:w-auto md:justify-end xl:justify-center justify-center `}>
                                <div className="relative">
                                    <div className="md:w-[640px] sm:w-[323px] xl:h-[176px] md:h-[169px]  sm:h-[149px] rounded-xl bg-white flex flex-col justify-center items-center">
                                        <h1 className="w-[90%] font-semibold md:text-2xl text-base text-[#171718] leading-loose text-left">{item.title}</h1>
                                        <p className="w-[90%] font-regular xl:text-base md:text-[14px] text-[12px] text-gray1 text-left">{item.content}</p>
                                    </div>
                                    <div className="absolute top-[-30px] left-[-30px]">
                                        <DrawIcon icon={item.imgUrl} />
                                    </div>
                                </div>
                            </div> : <div key={index} className={`flex w-full xl:w-auto md:justify-start xl:justify-center justify-center`}>
                                <div className="relative">
                                    <div className="md:w-[640px] sm:w-[323px] xl:h-[176px] md:h-[169px] sm:h-[149px] border rounded-xl bg-white flex flex-col justify-center items-center">
                                        <h1 className="w-[90%] font-semibold md:text-2xl text-base text-[#171718] leading-loose text-left">{item.title}</h1>
                                        <p className="w-[90%] font-regular xl:text-base md:text-[14px] text-[12px] text-gray1 text-left">{item.content}</p>
                                    </div>
                                    <div className="absolute top-[-30px] left-[-30px]">
                                        <DrawIcon icon={item.imgUrl} />
                                    </div>
                                </div>
                            </div>)})
                   }
                </div>
            </div>
        </>
    )
}
export default IdentifyCardList;