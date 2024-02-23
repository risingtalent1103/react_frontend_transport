
const Publisher = () => {
    return (
        <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10">
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="h-[185px] lg:h-[260px] w-full">
                        <img className="h-full w-full rounded-lg"
                            src="/images/outboudpublisherbanner.jpg"
                            alt="outboundpublisherbanner"
                        />
                    </div>
                    <h2 className="font-bold text-2xl lg:text-[2rem] xl:text-5xl leading-[110%] text-[#171718]">
                        Publisher
                    </h2>
                    <div className="bg-color2 rounded-lg px-6 py-8 flex flex-col lg:flex-row items-start gap-6">
                        <div className="w-[65px] mx-auto">
                            <div className="w-[65px] h-[65px] bg-white rounded-full flex justify-center pt-1.5 mx-auto">
                                <img className="w-[53px] h-[41px] my-[5px]" src="/images/certification.png" alt="certification" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-center lg:text-left">
                            <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%]">
                                The Contact Center Received the ICompli Partner Program Certification by BPA World Wide
                            </h3>
                            <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                                The Contact Center has been servicing the publishing industry faithfully and exceptionally since 1991. Moving forward, our clients can expect to reduce the time, effort and resources needed to conduct their BPA audits.
                            </p>
                            <button className="bg-color1 px-2 py-4 rounded-lg w-[250px] font-medium text-base text-white hover:text-black leading-[110%] mx-auto lg:mx-0">
                                View Certification
                            </button>
                        </div>
                    </div>
                    {/* text content */}
                    <div>
                        <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                            Serving the Publishing industry since 1991.<br></br><br></br>
                            BPA/AAM/VAC Audits = 100% success.<br></br><br></br>
                            Our clients choose to work with us for the following reasons:<br></br><br></br>
                        </p>
                        <ul className="list-disc mx-6 text-gray1">
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                Our Average cost per subscriber is often lower in comparison to other vendors.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"> </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                We are able to convert at a higher rate than other telemarketing vendors in the U.S. and abroad.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                Our analysis and on time reporting is superior to other vendors.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                Our ability to deliver an overall greater value and greater savings is best realized when clients take advantage of the following combination.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                BVTM’s higher conversion rates of ReQual projects, produces the need for fewer New Names. Converting a higher % of New Names requires the purchase of fewer New Name records.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                The Contact Center ’s real-time analysis on new name lists enables purchase of smaller test lists before making a commitment to a larger, more expensive file. This leads to the purchase of ONLY the best performing lists. NOTE: We all know that good new name lists are difficult to come by.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                The Contact Center  is helping our clients to identify new list sources, divided by marketing segment, saving them thousands of dollars a year.
                            </li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base inline-block lg:list-item"></li>
                            <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%] xl:leading-none">
                                The Contact Center  (BVTM) is offering our clients a volume and off-season discount. We believe that we can provide a significant savings over your current rate.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:col-span-3">
                    <div className="w-full bg-[#F5F5F5] px-4 xl:px-8 pt-[50px] pb-[40px] flex flex-col text-center gap-6 lg:gap-2">
                        <h3 className="font-semibold text-xl xl:text-2xl leading-[110%] text-[#171718]">
                            Lets Grow Your Audience!
                        </h3>
                        <p className="font-regular text-xs md:text-base leading-[120%]">
                            The Contact Center  brings real value to your organization bt delivering the set of inbound and outbound contact center services. Fill the form below to get started
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 items-start">
                                <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                                    Full Name*
                                </label>
                                <input 
                                    type="input" 
                                    className="w-full h-[50px] px-4 border border-[#E5E7EB] rounded-lg"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                                    Bussiness Email*
                                </label>
                                <input 
                                    type="input" 
                                    className="w-full h-[50px] px-4 border border-[#E5E7EB] rounded-lg"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="flex flex-col gap-2 items-start">
                                <label className="font-regular text-sm md:text-base leading-[110%] text-gray1">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows={3}
                                    cols={50}
                                    className="w-full px-4 py-4 border border-[#E5E7EB] rounded-lg"
                                    placeholder="Type here..."
                                />
                            </div>
                        </div>
                        <button className="bg-color1 px-2 py-4 mt-2 rounded-lg w-full font-medium text-base text-white hover:text-black leading-[110%]">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Publisher;