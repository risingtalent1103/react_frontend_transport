import { oneStopContactInformation } from "@/stack/stack";
import DrawIcon from "./DrawIcon";

const OneStopContact = () => {
    return (
        <>
            <div className="flex flex-col just-center xl:my-[180px] md:mb-[150px] md:mt-[50px] mt-[50px] mb-[30px] xl:mx-[100px] md:px-0">
                <h3 className="font-semibold md:text-xl  text-base mx-auto leading-loose mb-2">Our Services</h3>
                <h1 className="font-bold xl:text-5xl md:text-4xl text-2xl mx-auto mb-[100px] text-center"><span className=" text-color1">One-Stop</span><span> Contact Center Solutions</span><span className="text-[#2251FF]">.</span></h1>
                <div className="flex flex-wrap gap-14">
                    {
                        oneStopContactInformation.map((item, index) => {
                            return index % 2 ? <div key={index} className={`flex w-full xl:w-auto md:justify-end xl:justify-center justify-center`}>
                                <div className="relative">
                                    <div className="md:w-[550px] sm:w-[323px] xl:h-[176px] md:h-[169px]  sm:h-[149px] border border-[#2251FF]/[20%] rounded-xl flex flex-col justify-center items-center">
                                        <h1 className="w-[90%] font-semibold md:text-2xl text-base text-[#171718] leading-loose">{item.serviceName}</h1>
                                        <p className="w-[90%] font-regular xl:text-base md:text-[14px] text-[12px] text-gray1">{item.serviceContent}</p>
                                    </div>
                                    <div className="absolute top-[-30px] left-[-30px]">
                                        <DrawIcon icon={item.icon} />
                                    </div>
                                </div>
                            </div> : <div key={index} className={`flex w-full xl:w-auto md:justify-start xl:justify-center justify-center`}>
                                <div className="relative">
                                    <div className="md:w-[550px] sm:w-[323px] xl:h-[176px] md:h-[169px] sm:h-[149px] border border-[#2251FF]/[20%] rounded-xl flex flex-col justify-center items-center">
                                        <h1 className="w-[90%] font-semibold md:text-2xl text-base text-[#171718] leading-loose">{item.serviceName}</h1>
                                        <p className="w-[90%] font-regular xl:text-base md:text-[14px] text-[12px] text-gray1">{item.serviceContent}</p>
                                    </div>
                                    <div className="absolute top-[-30px] left-[-30px]">
                                        <DrawIcon icon={item.icon} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OneStopContact;