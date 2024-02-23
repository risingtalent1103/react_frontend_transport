const PublisherProjectDetails = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-10 my-10">
            <div className="lg:col-span-5 flex flex-col gap-2">
                <h2 className="font-bold text-2xl lg:text-[2rem] xl:text-5xl leading-[110%] text-[#171718]">
                    Project Details
                </h2>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    A publisher supporting his advertiser client was focused on generating qualified and actionable leads delivered daily to the sales force for an immediate follow-up.<br></br>
                    The advertiser provides services needed for the ongoing care and maintenance of commercial buildings.<br></br>
                    What did the advertiser consider a lead?
                </p>
                <div className="border border-border1 p-5 pr-6">
                    <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                        Leads were divided into FIVE groups and billed based on FOUR distinguished criteria:
                    </p>
                    <ul className="list-disc mx-6 text-gray1">
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Once a lead was qualified, a follow-up e-mail was sent to thank the “lead” for their interest and strengthen the advertiser’s brand.
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Below is a summary report of the project describing how the ROI was calculated
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            450% ROI Process
                        </li>
                        
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Lead Breakdown
                        </li>
                        <li className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                            Total project cost = $6798.00
                        </li>
                    </ul>
                </div>
                <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%] mt-6">
                    The $ Value of the Leads
                </h3>
                <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                    The advertiser confirmed that these leads were better than any prior lead generation efforts or other lead source used.
                    <br></br><br></br>
                    The publisher’s audience development department confirmed that not only was the ReQual project subsidized by this project ($0 direct cost to their budget), but that they are expecting to finally be considered as a profit center for the organization and no longer have to carry the historical label of a cost center.
                    <br></br><br></br>
                    The publisher sales force, realizing the profitable opportunity, is dedicated more than ever to engage all advertisers and promote our lead generation process as part of their product offerings. They expect great demand, especially as companies continue to battle the challenging impact of COVID-19 and are looking for ways to fill up the sales team funnel with new business opportunities.
                    <br></br><br></br>
                    Contact us for additional details including production and audience breakdown analysis reports to help establish how you can experience the highest ROI on your projects.
                </p>
                <div className="bg-color2 p-8 rounded-lg my-6">
                    <div className="w-full flex flex-col items-center lg:grid grid-rows-3 grid-cols-4 gap-6">
                        <div className="row-span-2 col-span-3 flex flex-col justify-between">
                            <h3 className="font-semibold text-[#171718] text-base lg:text-xl xl:text-2xl leading-[110%] mb-4">
                                How A Publisher Can Earn a 450% Return on Their Investment
                            </h3>
                            <p className="font-regular text-xs lg:text-sm xl:text-base leading-[120%]">
                                You can achieve similar results without spending tens of thousands of dollars or several months to build a new data system and infrastructure.
                            </p>
                        </div>
                        <div className="row-span-3 col-span-1 flex justify-end">
                            <img 
                                className="w-[155px] h-[200px]"
                                src="images/investment.jpg" 
                                alt="investment"
                            />
                        </div>
                        <div className="row-span-1 col-span-3 flex items-center">
                            <button className="bg-color1 px-6 py-4 rounded-lg text-white w-[250px] h-[50px] hover:text-black">Download Case Study</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PublisherProjectDetails;