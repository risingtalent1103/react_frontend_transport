const ClaimFeeSetupStrategy = () => {
    return (
        <>
            <div className="w-full lg:h-[706px] h-[916px] flex justify-center items-center z-50">
                <form className="w-[90%] h-[90%]">
                    <div className="rounded-md w-[90%] font-bold text-[32px] text-color1 text-center">
                        Claim Your Fee Setup Strategy ($500 Value)
                    </div>
                    <p className="font-normal text-base leading-loose">Company*</p>
                    <input type="text" placeholder="Enter compnay name" className="rounded-md w-[100%] h-[50px] px-3 text-[14px] font-light border border-[#E5E7EB] outline-none mb-5"></input>
                    <div className="flex w-full lg:flex-row flex-col justify-between">
                        <div className="lg:w-[48%] w-full">
                            <p className="font-normal text-base leading-loose">Name*</p>
                            <input type="text" placeholder="Enter name" className="rounded-md w-full h-[50px] px-3 text-[14px] font-light border border-[#E5E7EB] outline-none mb-5"></input>
                        </div>
                        <div className="lg:w-[48%] w-full">
                            <p className="font-normal text-base leading-loose">Job Title*</p>
                            <input type="text" placeholder="Enter Job Title" className="rounded-md w-full h-[50px] px-3 text-[14px] font-light border border-[#E5E7EB] outline-none mb-5"></input>
                        </div>
                    </div>
                    <div className="flex w-full lg:flex-row flex-col justify-between">
                        <div className="lg:w-[48%] w-full">
                            <p className="font-normal text-base leading-loose">Name*</p>
                            <input type="email" placeholder="Enter Email" className="rounded-md w-full h-[50px] px-3 text-[14px] font-light border border-[#E5E7EB] outline-none mb-5"></input>
                        </div>
                        <div className="lg:w-[48%] w-full">
                            <p className="font-normal text-base leading-loose">Job Title*</p>
                            <input type="text" placeholder="Enter phone number" className="rounded-md w-full h-[50px] px-3 text-[14px] font-light border border-[#E5E7EB] outline-none mb-5"></input>
                        </div>
                    </div>
                    <p>Describe your project requirements*</p>
                    <textarea className="w-full h-[116px] text-[14px] font-light border border-[#E5E7EB] outline-none py-3 px-4 rounded-md mb-3" placeholder="Type here...">
                    </textarea>
                    <input type="submit" className="w-full h-[50px] bg-color1 rounded-md font-medium text-base text-white" value="Send"></input>
                </form>
            </div>
        </>
    )
}

export default ClaimFeeSetupStrategy;